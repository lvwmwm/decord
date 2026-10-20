// Module ID: 14575
// Function ID: 14576
// Dependencies: [14560, 14556, 14576]

// Module 14575
import _mod14556 from "module_14556" /* 14556 */;
import _mod14560 from "module_14560" /* 14560 */;

const prop = Object.getOwnPropertySymbols && !_mod14560(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14556;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14576) && tmp2(14576) < 41;
    const tmp6 = !Symbol.sham && tmp2(14576) && tmp2(14576) < 41;
  }
  return tmp5;
});

export default prop;
