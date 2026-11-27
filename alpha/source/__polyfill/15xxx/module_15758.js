// Module ID: 15758
// Function ID: 15759
// Dependencies: [15743, 15739, 15759]

// Module 15758
import _mod15739 from "module_15739" /* 15739 */;
import _mod15743 from "module_15743" /* 15743 */;

const prop = Object.getOwnPropertySymbols && !_mod15743(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15739;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15759) && tmp2(15759) < 41;
    const tmp6 = !Symbol.sham && tmp2(15759) && tmp2(15759) < 41;
  }
  return tmp5;
});

export default prop;
