// Module ID: 14011
// Function ID: 14012
// Dependencies: [13996, 13992, 14012]

// Module 14011
import _mod13992 from "module_13992" /* 13992 */;
import _mod13996 from "module_13996" /* 13996 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13996(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13992.String(SymbolResult);
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
        tmp2Result = tmp2(14012);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14012) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
