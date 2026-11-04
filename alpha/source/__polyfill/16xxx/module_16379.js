// Module ID: 16379
// Function ID: 16380
// Dependencies: [16364, 16360, 16380]

// Module 16379
import _mod16360 from "module_16360" /* 16360 */;
import _mod16364 from "module_16364" /* 16364 */;

const prop = Object.getOwnPropertySymbols && !_mod16364(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16360;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16380) && tmp2(16380) < 41;
    const tmp6 = !Symbol.sham && tmp2(16380) && tmp2(16380) < 41;
  }
  return tmp5;
});

export default prop;
