// Module ID: 14547
// Function ID: 14548
// Dependencies: [14532, 14528, 14548]

// Module 14547
import _mod14528 from "module_14528" /* 14528 */;
import _mod14532 from "module_14532" /* 14532 */;

const prop = Object.getOwnPropertySymbols && !_mod14532(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14528;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14548) && tmp2(14548) < 41;
    const tmp6 = !Symbol.sham && tmp2(14548) && tmp2(14548) < 41;
  }
  return tmp5;
});

export default prop;
