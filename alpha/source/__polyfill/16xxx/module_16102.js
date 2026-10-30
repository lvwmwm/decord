// Module ID: 16102
// Function ID: 16103
// Dependencies: [16087, 16083, 16103]

// Module 16102
import _mod16083 from "module_16083" /* 16083 */;
import _mod16087 from "module_16087" /* 16087 */;

const prop = Object.getOwnPropertySymbols && !_mod16087(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16083;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16103) && tmp2(16103) < 41;
    const tmp6 = !Symbol.sham && tmp2(16103) && tmp2(16103) < 41;
  }
  return tmp5;
});

export default prop;
