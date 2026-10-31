// Module ID: 12897
// Function ID: 12898
// Dependencies: []

// Module 12897
let obj = {
  name: "Nth",
  structure: { nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null] },
  parse(arg0) {
    const self = this;
    const scanner = this.scanner;
    scanner.skipSC();
    const tokenStart = this.scanner.tokenStart;
    const scanner2 = this.scanner;
    if (!scanner2.lookupValue(0, "odd")) {
      let AnPlusBResult;
      let offset;
      let tmp5;
      const scanner3 = self.scanner;
      if (!scanner3.lookupValue(0, "even")) {
        AnPlusBResult = self.AnPlusB();
      }
      const scanner4 = self.scanner;
      scanner4.skipSC();
      if (arg0) {
        const scanner5 = self.scanner;
        if (scanner5.lookupValue(0, "of")) {
          const iter = self.scanner;
          iter.next();
          const SelectorListResult = self.SelectorList();
          tmp5 = SelectorListResult;
          offset = tokenStart;
          if (self.needPositions) {
            offset = self.getLastListNode(SelectorListResult.children).loc.end.offset;
            tmp5 = SelectorListResult;
          }
        }
        const obj = { type: "Nth", loc: self.getLocation(tokenStart, offset), nth: AnPlusBResult, selector: tmp5 };
        return obj;
      }
      tmp5 = null;
      offset = tokenStart;
      if (self.needPositions) {
        offset = AnPlusBResult.loc.end.offset;
        tmp5 = null;
      }
    }
    AnPlusBResult = self.Identifier();
  },
  generate(nth) {
    const self = this;
    this.node(nth.nth);
    if (null !== nth.selector) {
      self.chunk(" of ");
      self.node(nth.selector);
    }
  }
};

export default obj;
