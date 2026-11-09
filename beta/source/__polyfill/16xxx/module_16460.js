// Module ID: 16460
// Function ID: 16461
// Dependencies: [16445, 16441, 16461]

// Module 16460
import _mod16441 from "module_16441" /* 16441 */;
import _mod16445 from "module_16445" /* 16445 */;

const prop = Object.getOwnPropertySymbols && !_mod16445(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16441;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16461) && tmp2(16461) < 41;
    const tmp6 = !Symbol.sham && tmp2(16461) && tmp2(16461) < 41;
  }
  return tmp5;
});

export default prop;
