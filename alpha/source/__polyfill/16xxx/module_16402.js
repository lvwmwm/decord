// Module ID: 16402
// Function ID: 16403
// Dependencies: [16387, 16383, 16403]

// Module 16402
import _mod16383 from "module_16383" /* 16383 */;
import _mod16387 from "module_16387" /* 16387 */;

const prop = Object.getOwnPropertySymbols && !_mod16387(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16383;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16403) && tmp2(16403) < 41;
    const tmp6 = !Symbol.sham && tmp2(16403) && tmp2(16403) < 41;
  }
  return tmp5;
});

export default prop;
