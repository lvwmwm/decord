// Module ID: 14242
// Function ID: 14243
// Name: prop
// Dependencies: [14227, 14223, 14243]

// Module 14242 (prop)
import _mod14223 from "module_14223" /* 14223 */;
import _mod14227 from "module_14227" /* 14227 */;

let prop = Object.getOwnPropertySymbols;
if (prop) {
  prop = !_mod14227(() => {
    const SymbolResult = Symbol("symbol detection");
    const StringResult = _mod14223.String(SymbolResult);
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
        tmp2Result = tmp2(14243);
      }
      if (tmp2Result) {
        tmp2Result = tmp2(14243) < 41;
      }
      tmp5 = tmp2Result;
    }
    return tmp5;
  });
}

export default prop;
