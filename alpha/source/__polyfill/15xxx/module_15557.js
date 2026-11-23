// Module ID: 15557
// Function ID: 15558
// Dependencies: [15542, 15538, 15558]

// Module 15557
import _mod15538 from "module_15538" /* 15538 */;
import _mod15542 from "module_15542" /* 15542 */;

const prop = Object.getOwnPropertySymbols && !_mod15542(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15538;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15558) && tmp2(15558) < 41;
    const tmp6 = !Symbol.sham && tmp2(15558) && tmp2(15558) < 41;
  }
  return tmp5;
});

export default prop;
