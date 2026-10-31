// Module ID: 16143
// Function ID: 16144
// Dependencies: [16128, 16124, 16144]

// Module 16143
import _mod16124 from "module_16124" /* 16124 */;
import _mod16128 from "module_16128" /* 16128 */;

const prop = Object.getOwnPropertySymbols && !_mod16128(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16124;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16144) && tmp2(16144) < 41;
    const tmp6 = !Symbol.sham && tmp2(16144) && tmp2(16144) < 41;
  }
  return tmp5;
});

export default prop;
