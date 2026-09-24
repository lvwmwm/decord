// Module ID: 14691
// Function ID: 14692
// Dependencies: [14676, 14672, 14692]

// Module 14691
import _mod14672 from "module_14672" /* 14672 */;
import _mod14676 from "module_14676" /* 14676 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14676(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14672.String(SymbolResult);
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
        tmp2Result = tmp2(14692);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14692) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
