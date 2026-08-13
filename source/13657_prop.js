// Module ID: 13657
// Function ID: 13658
// Name: prop
// Dependencies: [13642, 13638, 13658]

// Module 13657 (prop)
let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !require("module_13642")(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = require(13638).String(SymbolResult);
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
        tmp2Result = tmp2(13658);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13658) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
