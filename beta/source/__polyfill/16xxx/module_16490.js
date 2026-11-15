// Module ID: 16490
// Function ID: 16491
// Dependencies: [16475, 16471, 16491]

// Module 16490
import _mod16471 from "module_16471" /* 16471 */;
import _mod16475 from "module_16475" /* 16475 */;

const prop = Object.getOwnPropertySymbols && !_mod16475(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16471;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16491) && tmp2(16491) < 41;
    const tmp6 = !Symbol.sham && tmp2(16491) && tmp2(16491) < 41;
  }
  return tmp5;
});

export default prop;
