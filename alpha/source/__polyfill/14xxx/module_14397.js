// Module ID: 14397
// Function ID: 14398
// Dependencies: [14382, 14378, 14398]

// Module 14397
import _mod14378 from "module_14378" /* 14378 */;
import _mod14382 from "module_14382" /* 14382 */;

const prop = Object.getOwnPropertySymbols && !_mod14382(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14378;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14398) && tmp2(14398) < 41;
    const tmp6 = !Symbol.sham && tmp2(14398) && tmp2(14398) < 41;
  }
  return tmp5;
});

export default prop;
