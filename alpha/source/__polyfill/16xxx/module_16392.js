// Module ID: 16392
// Function ID: 16393
// Dependencies: [16377, 16373, 16393]

// Module 16392
import _mod16373 from "module_16373" /* 16373 */;
import _mod16377 from "module_16377" /* 16377 */;

const prop = Object.getOwnPropertySymbols && !_mod16377(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16373;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16393) && tmp2(16393) < 41;
    const tmp6 = !Symbol.sham && tmp2(16393) && tmp2(16393) < 41;
  }
  return tmp5;
});

export default prop;
