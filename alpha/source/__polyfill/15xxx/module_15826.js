// Module ID: 15826
// Function ID: 15827
// Dependencies: [15811, 15807, 15827]

// Module 15826
import _mod15807 from "module_15807" /* 15807 */;
import _mod15811 from "module_15811" /* 15811 */;

const prop = Object.getOwnPropertySymbols && !_mod15811(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15807;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15827) && tmp2(15827) < 41;
    const tmp6 = !Symbol.sham && tmp2(15827) && tmp2(15827) < 41;
  }
  return tmp5;
});

export default prop;
