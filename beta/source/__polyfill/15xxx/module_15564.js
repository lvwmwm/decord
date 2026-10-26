// Module ID: 15564
// Function ID: 15565
// Dependencies: [15549, 15545, 15565]

// Module 15564
import _mod15545 from "module_15545" /* 15545 */;
import _mod15549 from "module_15549" /* 15549 */;

const prop = Object.getOwnPropertySymbols && !_mod15549(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15545;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15565) && tmp2(15565) < 41;
    const tmp6 = !Symbol.sham && tmp2(15565) && tmp2(15565) < 41;
  }
  return tmp5;
});

export default prop;
