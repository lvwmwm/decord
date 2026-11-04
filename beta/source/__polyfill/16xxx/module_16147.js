// Module ID: 16147
// Function ID: 16148
// Dependencies: [16132, 16128, 16148]

// Module 16147
import _mod16128 from "module_16128" /* 16128 */;
import _mod16132 from "module_16132" /* 16132 */;

const prop = Object.getOwnPropertySymbols && !_mod16132(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16128;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16148) && tmp2(16148) < 41;
    const tmp6 = !Symbol.sham && tmp2(16148) && tmp2(16148) < 41;
  }
  return tmp5;
});

export default prop;
