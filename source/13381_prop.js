// Module ID: 13381
// Function ID: 13382
// Name: prop
// Dependencies: [13366, 13362, 13382]

// Module 13381 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13366")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13362).String(SymbolResult);
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
        tmp2Result = tmp2(13382);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13382) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
