// Module ID: 15555
// Function ID: 15556
// Dependencies: [15540, 15536, 15556]

// Module 15555
import _mod15536 from "module_15536" /* 15536 */;
import _mod15540 from "module_15540" /* 15540 */;

const prop = Object.getOwnPropertySymbols && !_mod15540(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15536;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15556) && tmp2(15556) < 41;
    const tmp6 = !Symbol.sham && tmp2(15556) && tmp2(15556) < 41;
  }
  return tmp5;
});

export default prop;
