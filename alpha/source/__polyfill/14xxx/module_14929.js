// Module ID: 14929
// Function ID: 14930
// Dependencies: [14914, 14910, 14930]

// Module 14929
import _mod14910 from "module_14910" /* 14910 */;
import _mod14914 from "module_14914" /* 14914 */;

const prop = Object.getOwnPropertySymbols && !_mod14914(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14910;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14930) && tmp2(14930) < 41;
    const tmp6 = !Symbol.sham && tmp2(14930) && tmp2(14930) < 41;
  }
  return tmp5;
});

export default prop;
