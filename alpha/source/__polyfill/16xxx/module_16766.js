// Module ID: 16766
// Function ID: 16767
// Dependencies: [16751, 16747, 16767]

// Module 16766
import _mod16747 from "module_16747" /* 16747 */;
import _mod16751 from "module_16751" /* 16751 */;

const prop = Object.getOwnPropertySymbols && !_mod16751(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16747;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16767) && tmp2(16767) < 41;
    const tmp6 = !Symbol.sham && tmp2(16767) && tmp2(16767) < 41;
  }
  return tmp5;
});

export default prop;
