// Module ID: 15565
// Function ID: 15566
// Dependencies: [15550, 15546, 15566]

// Module 15565
import _mod15546 from "module_15546" /* 15546 */;
import _mod15550 from "module_15550" /* 15550 */;

const prop = Object.getOwnPropertySymbols && !_mod15550(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15546;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15566) && tmp2(15566) < 41;
    const tmp6 = !Symbol.sham && tmp2(15566) && tmp2(15566) < 41;
  }
  return tmp5;
});

export default prop;
