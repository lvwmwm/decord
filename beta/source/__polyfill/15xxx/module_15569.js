// Module ID: 15569
// Function ID: 15570
// Dependencies: [15554, 15550, 15570]

// Module 15569
import _mod15550 from "module_15550" /* 15550 */;
import _mod15554 from "module_15554" /* 15554 */;

const prop = Object.getOwnPropertySymbols && !_mod15554(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15550;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15570) && tmp2(15570) < 41;
    const tmp6 = !Symbol.sham && tmp2(15570) && tmp2(15570) < 41;
  }
  return tmp5;
});

export default prop;
