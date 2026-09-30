// Module ID: 14003
// Function ID: 14004
// Dependencies: [13988, 13984, 14004]

// Module 14003
import _mod13984 from "module_13984" /* 13984 */;
import _mod13988 from "module_13988" /* 13988 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13988(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13984.String(SymbolResult);
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
        tmp2Result = tmp2(14004);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14004) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
