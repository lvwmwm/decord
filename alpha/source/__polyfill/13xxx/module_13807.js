// Module ID: 13807
// Function ID: 13808
// Dependencies: [13792, 13788, 13808]

// Module 13807
import _mod13788 from "module_13788" /* 13788 */;
import _mod13792 from "module_13792" /* 13792 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13792(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13788.String(SymbolResult);
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
        tmp2Result = tmp2(13808);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13808) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
