// Module ID: 13903
// Function ID: 13904
// Name: tokenize
// Dependencies: [13831, 13875]

// Module 13903 (tokenize)
import tokenize from "tokenize" /* 13831 */;
import tokenize2 from "tokenize" /* 13875 */;

function consumeRaw(arg0) {
  return this.Raw(arg0, tokenize2.mode.leftCurlyBracket, true);
}
function consumePrelude() {
  const self = this;
  const SelectorListResult = this.SelectorList();
  const tmp2 = "Raw" !== SelectorListResult.type && false === self.scanner.eof && self.scanner.tokenType !== LeftCurlyBracket;
  if (tmp2) {
    self.error();
  }
  return SelectorListResult;
}
const LeftCurlyBracket = tokenize.TYPE.LeftCurlyBracket;
let obj = {
  name: "Rule",
  structure: { prelude: ["SelectorList", "Raw"], block: ["Block"] },
  parse() {
    let BlockResult;
    let parseWithFallbackResult;
    const self = this;
    const tokenStart = this.scanner.tokenStart;
    if (this.parseRulePrelude) {
      parseWithFallbackResult = self.parseWithFallback(consumePrelude, consumeRaw);
    } else {
      parseWithFallbackResult = consumeRaw.call(self, tmp);
    }
    const obj = { type: "Rule", loc: self.getLocation(tokenStart, self.scanner.tokenStart), prelude: parseWithFallbackResult, block: BlockResult };
    BlockResult = self.Block(true);
    return obj;
  },
  generate(prelude) {
    this.node(prelude.prelude);
    this.node(prelude.block);
  },
  walkContext: "rule"
};

export default obj;
