// Module ID: 13656
// Function ID: 13657
// Name: prop
// Dependencies: [13641, 13637, 13657]

// Module 13656 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13641")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13637).String(SymbolResult);
    let tmp5 = !StringResult;
    if (StringResult) {
      const _Object = Object;
      const _Symbol = Symbol;
      tmp5 = !(Object(SymbolResult) instanceof Symbol);
    }
    if (!tmp5) {
      const _Symbol2 = Symbol;
      let tmp2Result = !sham;
      if (!sham) {
        tmp2Result = tmp2(13657);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13657) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
