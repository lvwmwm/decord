// Module ID: 13302
// Function ID: 102019
// Dependencies: [13287, 13283, 13303]

// Module 13302
let tmp2 = !tmp;
if (!!Object.getOwnPropertySymbols) {
  tmp2 = !require("module_13287")(() => {
    const SymbolResult = Symbol("symbol detection");
    let tmp2 = !require(13283) /* check */.String(SymbolResult);
    if (!tmp2) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp2 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp2) {
      const _Symbol2 = Symbol;
      let tmp3 = !Symbol.sham;
      if (tmp3) {
        tmp3 = require(13303);
      }
      if (tmp3) {
        tmp3 = require(13303) < 41;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  });
}

export default tmp2;
