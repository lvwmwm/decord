// Module ID: 15539
// Function ID: 15540
// Dependencies: [15524, 15520, 15540]

// Module 15539
import _mod15520 from "module_15520" /* 15520 */;
import _mod15524 from "module_15524" /* 15524 */;

const prop = Object.getOwnPropertySymbols && !_mod15524(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15520;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15540) && tmp2(15540) < 41;
    const tmp6 = !Symbol.sham && tmp2(15540) && tmp2(15540) < 41;
  }
  return tmp5;
});

export default prop;
