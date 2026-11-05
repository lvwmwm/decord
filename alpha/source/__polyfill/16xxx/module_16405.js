// Module ID: 16405
// Function ID: 16406
// Dependencies: [16390, 16386, 16406]

// Module 16405
import _mod16386 from "module_16386" /* 16386 */;
import _mod16390 from "module_16390" /* 16390 */;

const prop = Object.getOwnPropertySymbols && !_mod16390(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod16386;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(16406) && tmp2(16406) < 41;
    const tmp6 = !Symbol.sham && tmp2(16406) && tmp2(16406) < 41;
  }
  return tmp5;
});

export default prop;
