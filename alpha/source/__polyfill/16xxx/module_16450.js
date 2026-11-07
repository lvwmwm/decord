// Module ID: 16450
// Function ID: 16451
// Dependencies: [16435, 16431, 16451]

// Module 16450
import _mod16431 from "module_16431" /* 16431 */;
import _mod16435 from "module_16435" /* 16435 */;

const prop = Object.getOwnPropertySymbols && !_mod16435(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16431;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16451) && tmp2(16451) < 41;
    const tmp6 = !Symbol.sham && tmp2(16451) && tmp2(16451) < 41;
  }
  return tmp5;
});

export default prop;
