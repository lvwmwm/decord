// Module ID: 15563
// Function ID: 15564
// Dependencies: [15548, 15544, 15564]

// Module 15563
import _mod15544 from "module_15544" /* 15544 */;
import _mod15548 from "module_15548" /* 15548 */;

const prop = Object.getOwnPropertySymbols && !_mod15548(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15544;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15564) && tmp2(15564) < 41;
    const tmp6 = !Symbol.sham && tmp2(15564) && tmp2(15564) < 41;
  }
  return tmp5;
});

export default prop;
