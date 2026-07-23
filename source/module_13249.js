// Module ID: 13249
// Function ID: 101692
// Dependencies: [13234, 13230, 13250]

// Module 13249
let tmp2 = !tmp;
if (!!Object.getOwnPropertySymbols) {
  tmp2 = !require("module_13234")(() => {
    const SymbolResult = Symbol("symbol detection");
    let tmp2 = !require(13230) /* check */.String(SymbolResult);
    if (!tmp2) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp2 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp2) {
      const _Symbol2 = Symbol;
      let tmp3 = !Symbol.sham;
      if (tmp3) {
        tmp3 = require(13250);
      }
      if (tmp3) {
        tmp3 = require(13250) < 41;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  });
}

export default tmp2;
