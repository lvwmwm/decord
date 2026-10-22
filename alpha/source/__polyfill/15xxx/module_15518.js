// Module ID: 15518
// Function ID: 15519
// Dependencies: [15503, 15499, 15519]

// Module 15518
import _mod15499 from "module_15499" /* 15499 */;
import _mod15503 from "module_15503" /* 15503 */;

const prop = Object.getOwnPropertySymbols && !_mod15503(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15499;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15519) && tmp2(15519) < 41;
    const tmp6 = !Symbol.sham && tmp2(15519) && tmp2(15519) < 41;
  }
  return tmp5;
});

export default prop;
