// Module ID: 15598
// Function ID: 15599
// Dependencies: [15583, 15579, 15599]

// Module 15598
import _mod15579 from "module_15579" /* 15579 */;
import _mod15583 from "module_15583" /* 15583 */;

const prop = Object.getOwnPropertySymbols && !_mod15583(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15579;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15599) && tmp2(15599) < 41;
    const tmp6 = !Symbol.sham && tmp2(15599) && tmp2(15599) < 41;
  }
  return tmp5;
});

export default prop;
