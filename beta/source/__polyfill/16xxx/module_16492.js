// Module ID: 16492
// Function ID: 16493
// Dependencies: [16477, 16473, 16493]

// Module 16492
import _mod16473 from "module_16473" /* 16473 */;
import _mod16477 from "module_16477" /* 16477 */;

const prop = Object.getOwnPropertySymbols && !_mod16477(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16473;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16493) && tmp2(16493) < 41;
    const tmp6 = !Symbol.sham && tmp2(16493) && tmp2(16493) < 41;
  }
  return tmp5;
});

export default prop;
