// Module ID: 13153
// Function ID: 13154
// Name: tokenize
// Dependencies: [13064, 13108]

// Module 13153 (tokenize)
import tokenize from "tokenize" /* 13064 */;
import tokenize2 from "tokenize" /* 13108 */;

const Comma = tokenize.TYPE.Comma;
const WhiteSpace = tokenize.TYPE.WhiteSpace;

export default function() {
  const self = this;
  const list = this.createList();
  const scanner = this.scanner;
  scanner.skipSC();
  list.push(this.Identifier());
  const scanner2 = this.scanner;
  scanner2.skipSC();
  if (this.scanner.tokenType === Comma) {
    let element;
    list.push(self.Operator());
    const tokenIndex = self.scanner.tokenIndex;
    if (self.parseCustomProperty) {
      element = self.Value(null);
    } else {
      element = self.Raw(self.scanner.tokenIndex, tokenize2.mode.exclamationMarkOrSemicolon, false);
    }
    if ("Value" === element.type) {
      const children = element.children;
      if (children.isEmpty()) {
        let diff = tokenIndex - self.scanner.tokenIndex;
        if (diff <= 0) {
          const scanner3 = self.scanner;
          while (scanner3.lookupType(diff) !== WhiteSpace) {
            diff = diff + 1;
          }
          const children2 = element.children;
          children2.appendData({ type: "WhiteSpace", loc: null, value: " " });
        }
      }
    }
    list.push(element);
  }
  return list;
};
