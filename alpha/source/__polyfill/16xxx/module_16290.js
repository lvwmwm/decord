// Module ID: 16290
// Function ID: 16291
// Dependencies: [16275, 16271, 16291]

// Module 16290
import _mod16271 from "module_16271" /* 16271 */;
import _mod16275 from "module_16275" /* 16275 */;

const prop = Object.getOwnPropertySymbols && !_mod16275(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16271;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16291) && tmp2(16291) < 41;
    const tmp6 = !Symbol.sham && tmp2(16291) && tmp2(16291) < 41;
  }
  return tmp5;
});

export default prop;
