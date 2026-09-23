// Module ID: 14682
// Function ID: 14683
// Dependencies: [14667, 14663, 14683]

// Module 14682
import _mod14663 from "module_14663" /* 14663 */;
import _mod14667 from "module_14667" /* 14667 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14667(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14663.String(SymbolResult);
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
        tmp2Result = tmp2(14683);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14683) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
