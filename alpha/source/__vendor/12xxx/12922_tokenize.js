// Module ID: 12922
// Function ID: 12923
// Name: tokenize
// Dependencies: [12833, 12877]

// Module 12922 (tokenize)
import tokenize from "tokenize" /* 12833 */;
import tokenize2 from "tokenize" /* 12877 */;

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
