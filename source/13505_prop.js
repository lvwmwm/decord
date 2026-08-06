// Module ID: 13505
// Function ID: 13506
// Name: prop
// Dependencies: [13490, 13486, 13506]

// Module 13505 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13490")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13486).String(SymbolResult);
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
        tmp2Result = tmp2(13506);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13506) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
