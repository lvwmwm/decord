// Module ID: 15339
// Function ID: 15340
// Dependencies: [15324, 15320, 15340]

// Module 15339
import _mod15320 from "module_15320" /* 15320 */;
import _mod15324 from "module_15324" /* 15324 */;

const prop = Object.getOwnPropertySymbols && !_mod15324(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15320;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15340) && tmp2(15340) < 41;
    const tmp6 = !Symbol.sham && tmp2(15340) && tmp2(15340) < 41;
  }
  return tmp5;
});

export default prop;
