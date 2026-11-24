// Module ID: 15578
// Function ID: 15579
// Dependencies: [15563, 15559, 15579]

// Module 15578
import _mod15559 from "module_15559" /* 15559 */;
import _mod15563 from "module_15563" /* 15563 */;

const prop = Object.getOwnPropertySymbols && !_mod15563(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15559;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15579) && tmp2(15579) < 41;
    const tmp6 = !Symbol.sham && tmp2(15579) && tmp2(15579) < 41;
  }
  return tmp5;
});

export default prop;
