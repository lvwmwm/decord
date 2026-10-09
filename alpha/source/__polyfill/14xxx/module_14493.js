// Module ID: 14493
// Function ID: 14494
// Dependencies: [14478, 14474, 14494]

// Module 14493
import _mod14474 from "module_14474" /* 14474 */;
import _mod14478 from "module_14478" /* 14478 */;

const prop = Object.getOwnPropertySymbols && !_mod14478(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14474;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14494) && tmp2(14494) < 41;
    const tmp6 = !Symbol.sham && tmp2(14494) && tmp2(14494) < 41;
  }
  return tmp5;
});

export default prop;
