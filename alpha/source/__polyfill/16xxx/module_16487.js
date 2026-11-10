// Module ID: 16487
// Function ID: 16488
// Dependencies: [16472, 16468, 16488]

// Module 16487
import _mod16468 from "module_16468" /* 16468 */;
import _mod16472 from "module_16472" /* 16472 */;

const prop = Object.getOwnPropertySymbols && !_mod16472(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16468;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16488) && tmp2(16488) < 41;
    const tmp6 = !Symbol.sham && tmp2(16488) && tmp2(16488) < 41;
  }
  return tmp5;
});

export default prop;
