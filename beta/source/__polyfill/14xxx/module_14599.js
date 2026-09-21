// Module ID: 14599
// Function ID: 14600
// Dependencies: [14584, 14580, 14600]

// Module 14599
import _mod14580 from "module_14580" /* 14580 */;
import _mod14584 from "module_14584" /* 14584 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14584(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14580.String(SymbolResult);
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
        tmp2Result = tmp2(14600);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14600) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
