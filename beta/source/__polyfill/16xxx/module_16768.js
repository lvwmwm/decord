// Module ID: 16768
// Function ID: 16769
// Dependencies: [16753, 16749, 16769]

// Module 16768
import _mod16749 from "module_16749" /* 16749 */;
import _mod16753 from "module_16753" /* 16753 */;

const prop = Object.getOwnPropertySymbols && !_mod16753(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16749;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16769) && tmp2(16769) < 41;
    const tmp6 = !Symbol.sham && tmp2(16769) && tmp2(16769) < 41;
  }
  return tmp5;
});

export default prop;
