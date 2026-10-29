// Module ID: 16062
// Function ID: 16063
// Dependencies: [16047, 16043, 16063]

// Module 16062
import _mod16043 from "module_16043" /* 16043 */;
import _mod16047 from "module_16047" /* 16047 */;

const prop = Object.getOwnPropertySymbols && !_mod16047(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16043;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16063) && tmp2(16063) < 41;
    const tmp6 = !Symbol.sham && tmp2(16063) && tmp2(16063) < 41;
  }
  return tmp5;
});

export default prop;
