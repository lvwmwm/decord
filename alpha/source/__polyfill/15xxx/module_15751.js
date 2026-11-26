// Module ID: 15751
// Function ID: 15752
// Dependencies: [15736, 15732, 15752]

// Module 15751
import _mod15732 from "module_15732" /* 15732 */;
import _mod15736 from "module_15736" /* 15736 */;

const prop = Object.getOwnPropertySymbols && !_mod15736(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15732;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15752) && tmp2(15752) < 41;
    const tmp6 = !Symbol.sham && tmp2(15752) && tmp2(15752) < 41;
  }
  return tmp5;
});

export default prop;
