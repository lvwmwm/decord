// Module ID: 15434
// Function ID: 15435
// Dependencies: [15419, 15415, 15435]

// Module 15434
import _mod15415 from "module_15415" /* 15415 */;
import _mod15419 from "module_15419" /* 15419 */;

const prop = Object.getOwnPropertySymbols && !_mod15419(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15415;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15435) && tmp2(15435) < 41;
    const tmp6 = !Symbol.sham && tmp2(15435) && tmp2(15435) < 41;
  }
  return tmp5;
});

export default prop;
