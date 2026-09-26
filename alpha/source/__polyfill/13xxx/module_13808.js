// Module ID: 13808
// Function ID: 13809
// Dependencies: [13793, 13789, 13809]

// Module 13808
import _mod13789 from "module_13789" /* 13789 */;
import _mod13793 from "module_13793" /* 13793 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13793(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13789.String(SymbolResult);
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
        tmp2Result = tmp2(13809);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13809) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
