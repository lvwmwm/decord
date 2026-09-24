// Module ID: 14637
// Function ID: 14638
// Dependencies: [14622, 14618, 14638]

// Module 14637
import _mod14618 from "module_14618" /* 14618 */;
import _mod14622 from "module_14622" /* 14622 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14622(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14618.String(SymbolResult);
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
        tmp2Result = tmp2(14638);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14638) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
