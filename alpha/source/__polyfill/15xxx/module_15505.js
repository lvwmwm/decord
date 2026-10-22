// Module ID: 15505
// Function ID: 15506
// Dependencies: [15490, 15486, 15506]

// Module 15505
import _mod15486 from "module_15486" /* 15486 */;
import _mod15490 from "module_15490" /* 15490 */;

const prop = Object.getOwnPropertySymbols && !_mod15490(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15486;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15506) && tmp2(15506) < 41;
    const tmp6 = !Symbol.sham && tmp2(15506) && tmp2(15506) < 41;
  }
  return tmp5;
});

export default prop;
