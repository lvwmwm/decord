// Module ID: 16643
// Function ID: 16644
// Dependencies: [16628, 16624, 16644]

// Module 16643
import _mod16624 from "module_16624" /* 16624 */;
import _mod16628 from "module_16628" /* 16628 */;

const prop = Object.getOwnPropertySymbols && !_mod16628(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16624;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16644) && tmp2(16644) < 41;
    const tmp6 = !Symbol.sham && tmp2(16644) && tmp2(16644) < 41;
  }
  return tmp5;
});

export default prop;
