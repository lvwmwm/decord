// Module ID: 13807
// Function ID: 13808
// Dependencies: [13792, 13788, 13808]

// Module 13807
import _mod13788 from "module_13788" /* 13788 */;
import _mod13792 from "module_13792" /* 13792 */;

const prop = Object.getOwnPropertySymbols && !_mod13792(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod13788;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(13808) && tmp2(13808) < 41;
    const tmp6 = !Symbol.sham && tmp2(13808) && tmp2(13808) < 41;
  }
  return tmp5;
});

export default prop;
