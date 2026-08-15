// Module ID: 13692
// Function ID: 13693
// Name: prop
// Dependencies: [13677, 13673, 13693]

// Module 13692 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13677")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13673).String(SymbolResult);
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
        tmp2Result = tmp2(13693);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13693) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
