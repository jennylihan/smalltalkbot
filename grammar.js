// Generated automatically by nearley, version undefined
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "MAIN", "symbols": ["SENTENCE", {"literal":".","pos":6}]},
    {"name": "MAIN", "symbols": ["QUESTION", {"literal":"?","pos":12}]},
    {"name": "QUESTION$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTIONWORD", "_", "QUESTION$string$1", "_", "OBJ"]},
    {"name": "QUESTION$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$3", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":" "}, {"literal":"n"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$2", "_", "OBJ", "_", "QUESTION$string$3"]},
    {"name": "QUESTION$string$4", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}, {"literal":"m"}, {"literal":"a"}, {"literal":"n"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION$string$5", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTION", "symbols": ["QUESTION$string$4", "_", "THINGS", "_", "QUESTION$string$5", "_", "GERUND"]},
    {"name": "QUESTIONWORD$string$1", "symbols": [{"literal":"H"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$1"]},
    {"name": "QUESTIONWORD$string$2", "symbols": [{"literal":"W"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "QUESTIONWORD", "symbols": ["QUESTIONWORD$string$2"]},
    {"name": "SENTENCE", "symbols": ["SUB", "_", "VERB", "_", "MOD"]},
    {"name": "SENTENCE$string$1", "symbols": [{"literal":"O"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE$string$2", "symbols": [{"literal":"."}, {"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SENTENCE", "symbols": ["SENTENCE$string$1", "_", "OBJ", "_", "SENTENCE$string$2"]},
    {"name": "SUB", "symbols": [{"literal":"I","pos":96}]},
    {"name": "SUB$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SUB", "symbols": ["SUB$string$1"]},
    {"name": "VERB$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$1"]},
    {"name": "VERB$string$2", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$2"]},
    {"name": "VERB$string$3", "symbols": [{"literal":"t"}, {"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$3"]},
    {"name": "VERB$string$4", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":" "}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"n"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$4"]},
    {"name": "VERB$string$5", "symbols": [{"literal":"m"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "VERB", "symbols": ["VERB$string$5", "_", "OBJ"]},
    {"name": "GERUND$string$1", "symbols": [{"literal":"l"}, {"literal":"o"}, {"literal":"v"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$1"]},
    {"name": "GERUND$string$2", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$2"]},
    {"name": "GERUND$string$3", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$3"]},
    {"name": "GERUND$string$4", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "GERUND", "symbols": ["GERUND$string$4"]},
    {"name": "MOD$string$1", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"t"}, {"literal":"h"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$1", "_", "OBJ"]},
    {"name": "MOD$string$2", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"a"}, {"literal":"b"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$2", "_", "OBJ"]},
    {"name": "MOD$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$3", "_", "OBJ"]},
    {"name": "MOD$string$4", "symbols": [{"literal":"a"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}, {"literal":"i"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$4"]},
    {"name": "MOD$string$5", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$5", "_", "SENTENCE"]},
    {"name": "MOD$string$6", "symbols": [{"literal":"."}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "MOD", "symbols": ["MOD$string$6"]},
    {"name": "OBJ$string$1", "symbols": [{"literal":"y"}, {"literal":"o"}, {"literal":"u"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$1"]},
    {"name": "OBJ$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$2"]},
    {"name": "OBJ$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"r"}, {"literal":" "}, {"literal":"V"}, {"literal":"C"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$3"]},
    {"name": "OBJ$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$4"]},
    {"name": "OBJ$string$5", "symbols": [{"literal":"m"}, {"literal":"y"}, {"literal":" "}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}, {"literal":"m"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$5"]},
    {"name": "OBJ$string$6", "symbols": [{"literal":"M"}, {"literal":"L"}, {"literal":"/"}, {"literal":"A"}, {"literal":"I"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$6"]},
    {"name": "OBJ$string$7", "symbols": [{"literal":"s"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$7"]},
    {"name": "OBJ$string$8", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"S"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":" "}, {"literal":"M"}, {"literal":"i"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"n"}, {"literal":"n"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$8"]},
    {"name": "OBJ$string$9", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"t"}, {"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"g"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"f"}, {"literal":"o"}, {"literal":"r"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$9"]},
    {"name": "OBJ$string$10", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":"2"}, {"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$10"]},
    {"name": "OBJ$string$11", "symbols": [{"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"o"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"s"}, {"literal":"y"}, {"literal":"n"}, {"literal":"d"}, {"literal":"r"}, {"literal":"o"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$11"]},
    {"name": "OBJ$string$12", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"L"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"u"}, {"literal":"p"}, {"literal":"d"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$12"]},
    {"name": "OBJ$string$13", "symbols": [{"literal":"H"}, {"literal":"u"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"b"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"m"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJ", "symbols": ["OBJ$string$13"]},
    {"name": "THINGS$string$1", "symbols": [{"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$1"]},
    {"name": "THINGS$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}, {"literal":"u"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$2"]},
    {"name": "THINGS$string$3", "symbols": [{"literal":"c"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$3"]},
    {"name": "THINGS$string$4", "symbols": [{"literal":"w"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}, {"literal":"2"}, {"literal":"m"}, {"literal":"e"}, {"literal":"e"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$4"]},
    {"name": "THINGS$string$5", "symbols": [{"literal":"u"}, {"literal":"n"}, {"literal":"i"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "THINGS", "symbols": ["THINGS$string$5"]},
    {"name": "_", "symbols": [{"literal":" ","pos":268}]}
]
  , ParserStart: "MAIN"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
