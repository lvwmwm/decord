// Module ID: 13648
// Function ID: 13649
// Name: prop
// Dependencies: [13633, 13629, 13649]

// Module 13648 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13633")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13629).String(SymbolResult);
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
        tmp2Result = tmp2(13649);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13649) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
