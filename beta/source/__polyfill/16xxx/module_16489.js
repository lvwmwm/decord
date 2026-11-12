// Module ID: 16489
// Function ID: 16490
// Dependencies: [16474, 16470, 16490]

// Module 16489
import _mod16470 from "module_16470" /* 16470 */;
import _mod16474 from "module_16474" /* 16474 */;

const prop = Object.getOwnPropertySymbols && !_mod16474(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16470;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16490) && tmp2(16490) < 41;
    const tmp6 = !Symbol.sham && tmp2(16490) && tmp2(16490) < 41;
  }
  return tmp5;
});

export default prop;
