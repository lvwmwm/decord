// Module ID: 15371
// Function ID: 15372
// Dependencies: [15356, 15352, 15372]

// Module 15371
import _mod15352 from "module_15352" /* 15352 */;
import _mod15356 from "module_15356" /* 15356 */;

const prop = Object.getOwnPropertySymbols && !_mod15356(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15352;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15372) && tmp2(15372) < 41;
    const tmp6 = !Symbol.sham && tmp2(15372) && tmp2(15372) < 41;
  }
  return tmp5;
});

export default prop;
