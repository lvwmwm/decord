// Module ID: 16142
// Function ID: 16143
// Dependencies: [16127, 16123, 16143]

// Module 16142
import _mod16123 from "module_16123" /* 16123 */;
import _mod16127 from "module_16127" /* 16127 */;

const prop = Object.getOwnPropertySymbols && !_mod16127(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16123;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16143) && tmp2(16143) < 41;
    const tmp6 = !Symbol.sham && tmp2(16143) && tmp2(16143) < 41;
  }
  return tmp5;
});

export default prop;
