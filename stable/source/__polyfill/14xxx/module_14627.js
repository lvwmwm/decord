// Module ID: 14627
// Function ID: 14628
// Dependencies: [14612, 14608, 14628]

// Module 14627
import _mod14608 from "module_14608" /* 14608 */;
import _mod14612 from "module_14612" /* 14612 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14612(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14608.String(SymbolResult);
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
        tmp2Result = tmp2(14628);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14628) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
