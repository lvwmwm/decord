// Module ID: 14891
// Function ID: 14892
// Dependencies: [14876, 14872, 14892]

// Module 14891
import _mod14872 from "module_14872" /* 14872 */;
import _mod14876 from "module_14876" /* 14876 */;

const prop = Object.getOwnPropertySymbols && !_mod14876(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14872;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14892) && tmp2(14892) < 41;
    const tmp6 = !Symbol.sham && tmp2(14892) && tmp2(14892) < 41;
  }
  return tmp5;
});

export default prop;
