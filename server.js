/* Setting things up. */
const express = require("express"),
  app = express(),
  CronJob = require("cron").CronJob,
  Twit = require("twit"),
  grammar = require("./grammar.js"),
  config = {
    /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */

    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    }
  },
  T = new Twit(config.twitter);

app.use(express.static("public"));

let listener = app.listen(process.env.PORT, function() {
  console.log("Your bot is running on port " + listener.address().port);

  /*
    Set up a new cron job to start tweeting automatically.
    Check out https://www.npmjs.com/package/cron#available-cron-patterns to learn more about cron scheduling patterns.
    
    For a few examples, see https://glitch.com/edit/#!/creative-bots?path=helpers%2Fcron-schedules.js

  */

  new CronJob("0 */3 * * *", function() {
    function gen(grammar, name) {
      var stack = [name];
      var rules = grammar.ParserRules;
      var str = "";
      while (stack.length > 0) {
        var currentname = stack.pop();
        if (typeof currentname === "string") {
          var goodrules = grammar.ParserRules.filter(function(x) {
            return x.name === currentname;
          }).sort(function(a, b) {
            return a.symbols.length - b.symbols.length;
          });
          if (goodrules.length > 0) {
            var chosen =
              goodrules[Math.floor(Math.random() * goodrules.length)];

            // if the stack grows big, choose the smallest
            // rule so we can try to get it to terminate
            if (stack.length > 7) {
              chosen = goodrules[0];
            }

            for (var i = chosen.symbols.length - 1; i >= 0; i--) {
              stack.push(chosen.symbols[i]);
            }
          } else {
            throw new Error("Nothing matches rule: " + currentname + "!");
          }
        } else if (currentname.test) {
          // var c = new randexp(currentname).gen(); Is this important? I just commented it out!
          // str += c;
          continue;
        } else if (currentname.literal) {
          var c = currentname.literal;
          str += c;
          continue;
        }
      }
      return str;
    }

    // const date = new Date().toLocaleString();
    let example = gen(grammar, grammar.ParserStart);

    T.post("statuses/update", { status: example }, function(
      err,
      data,
      response
    ) {
      if (err) {
        console.log("error!", err);
      } else {
        console.log(
          "tweeted",
          `https://twitter.com/${data.user.screen_name}/status/${data.id_str}`
        );
      }
    });
  }).start();
});
