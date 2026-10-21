// Module ID: 15461
// Function ID: 15462
// Dependencies: [15446, 15442, 15462]

// Module 15461
import _mod15442 from "module_15442" /* 15442 */;
import _mod15446 from "module_15446" /* 15446 */;

const prop = Object.getOwnPropertySymbols && !_mod15446(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15442;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15462) && tmp2(15462) < 41;
    const tmp6 = !Symbol.sham && tmp2(15462) && tmp2(15462) < 41;
  }
  return tmp5;
});

export default prop;
