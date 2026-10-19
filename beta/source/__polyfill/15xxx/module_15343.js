// Module ID: 15343
// Function ID: 15344
// Dependencies: [15328, 15324, 15344]

// Module 15343
import _mod15324 from "module_15324" /* 15324 */;
import _mod15328 from "module_15328" /* 15328 */;

const prop = Object.getOwnPropertySymbols && !_mod15328(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15324;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15344) && tmp2(15344) < 41;
    const tmp6 = !Symbol.sham && tmp2(15344) && tmp2(15344) < 41;
  }
  return tmp5;
});

export default prop;
