// Module ID: 16801
// Function ID: 16802
// Dependencies: [16786, 16782, 16802]

// Module 16801
import _mod16782 from "module_16782" /* 16782 */;
import _mod16786 from "module_16786" /* 16786 */;

const prop = Object.getOwnPropertySymbols && !_mod16786(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16782;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16802) && tmp2(16802) < 41;
    const tmp6 = !Symbol.sham && tmp2(16802) && tmp2(16802) < 41;
  }
  return tmp5;
});

export default prop;
