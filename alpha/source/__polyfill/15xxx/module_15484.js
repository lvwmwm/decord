// Module ID: 15484
// Function ID: 15485
// Dependencies: [15469, 15465, 15485]

// Module 15484
import _mod15465 from "module_15465" /* 15465 */;
import _mod15469 from "module_15469" /* 15469 */;

const prop = Object.getOwnPropertySymbols && !_mod15469(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15465;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15485) && tmp2(15485) < 41;
    const tmp6 = !Symbol.sham && tmp2(15485) && tmp2(15485) < 41;
  }
  return tmp5;
});

export default prop;
