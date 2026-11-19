// Module ID: 15470
// Function ID: 15471
// Dependencies: [15455, 15451, 15471]

// Module 15470
import _mod15451 from "module_15451" /* 15451 */;
import _mod15455 from "module_15455" /* 15455 */;

const prop = Object.getOwnPropertySymbols && !_mod15455(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15451;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15471) && tmp2(15471) < 41;
    const tmp6 = !Symbol.sham && tmp2(15471) && tmp2(15471) < 41;
  }
  return tmp5;
});

export default prop;
