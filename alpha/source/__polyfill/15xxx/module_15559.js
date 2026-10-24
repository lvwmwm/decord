// Module ID: 15559
// Function ID: 15560
// Dependencies: [15544, 15540, 15560]

// Module 15559
import _mod15540 from "module_15540" /* 15540 */;
import _mod15544 from "module_15544" /* 15544 */;

const prop = Object.getOwnPropertySymbols && !_mod15544(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15540;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15560) && tmp2(15560) < 41;
    const tmp6 = !Symbol.sham && tmp2(15560) && tmp2(15560) < 41;
  }
  return tmp5;
});

export default prop;
