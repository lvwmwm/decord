// Module ID: 15600
// Function ID: 15601
// Dependencies: [15585, 15581, 15601]

// Module 15600
import _mod15581 from "module_15581" /* 15581 */;
import _mod15585 from "module_15585" /* 15585 */;

const prop = Object.getOwnPropertySymbols && !_mod15585(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15581;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15601) && tmp2(15601) < 41;
    const tmp6 = !Symbol.sham && tmp2(15601) && tmp2(15601) < 41;
  }
  return tmp5;
});

export default prop;
