// Module ID: 14570
// Function ID: 14571
// Dependencies: [14555, 14551, 14571]

// Module 14570
import _mod14551 from "module_14551" /* 14551 */;
import _mod14555 from "module_14555" /* 14555 */;

const prop = Object.getOwnPropertySymbols && !_mod14555(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14551;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14571) && tmp2(14571) < 41;
    const tmp6 = !Symbol.sham && tmp2(14571) && tmp2(14571) < 41;
  }
  return tmp5;
});

export default prop;
