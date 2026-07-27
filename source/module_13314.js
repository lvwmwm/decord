// Module ID: 13314
// Function ID: 102151
// Dependencies: [13299, 13295, 13315]

// Module 13314
let tmp2 = !tmp;
if (!!Object.getOwnPropertySymbols) {
  tmp2 = !require("module_13299")(() => {
    const SymbolResult = Symbol("symbol detection");
    let tmp2 = !require(13295) /* check */.String(SymbolResult);
    if (!tmp2) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp2 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp2) {
      const _Symbol2 = Symbol;
      let tmp3 = !Symbol.sham;
      if (tmp3) {
        tmp3 = require(13315);
      }
      if (tmp3) {
        tmp3 = require(13315) < 41;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  });
}

export default tmp2;
