// Module ID: 14602
// Function ID: 14603
// Dependencies: [14587, 14583, 14603]

// Module 14602
import _mod14583 from "module_14583" /* 14583 */;
import _mod14587 from "module_14587" /* 14587 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14587(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14583.String(SymbolResult);
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
        tmp2Result = tmp2(14603);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14603) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
