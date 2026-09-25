// Module ID: 13852
// Function ID: 13853
// Dependencies: [13837, 13833, 13853]

// Module 13852
import _mod13833 from "module_13833" /* 13833 */;
import _mod13837 from "module_13837" /* 13837 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod13837(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod13833.String(SymbolResult);
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
        tmp2Result = tmp2(13853);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(13853) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
