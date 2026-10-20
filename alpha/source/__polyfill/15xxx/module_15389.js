// Module ID: 15389
// Function ID: 15390
// Dependencies: [15374, 15370, 15390]

// Module 15389
import _mod15370 from "module_15370" /* 15370 */;
import _mod15374 from "module_15374" /* 15374 */;

const prop = Object.getOwnPropertySymbols && !_mod15374(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15370;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15390) && tmp2(15390) < 41;
    const tmp6 = !Symbol.sham && tmp2(15390) && tmp2(15390) < 41;
  }
  return tmp5;
});

export default prop;
