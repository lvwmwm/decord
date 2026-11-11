// Module ID: 16648
// Function ID: 16649
// Dependencies: [16633, 16629, 16649]

// Module 16648
import _mod16629 from "module_16629" /* 16629 */;
import _mod16633 from "module_16633" /* 16633 */;

const prop = Object.getOwnPropertySymbols && !_mod16633(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16629;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16649) && tmp2(16649) < 41;
    const tmp6 = !Symbol.sham && tmp2(16649) && tmp2(16649) < 41;
  }
  return tmp5;
});

export default prop;
