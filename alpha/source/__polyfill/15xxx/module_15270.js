// Module ID: 15270
// Function ID: 15271
// Dependencies: [15255, 15251, 15271]

// Module 15270
import _mod15251 from "module_15251" /* 15251 */;
import _mod15255 from "module_15255" /* 15255 */;

const prop = Object.getOwnPropertySymbols && !_mod15255(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15251;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15271) && tmp2(15271) < 41;
    const tmp6 = !Symbol.sham && tmp2(15271) && tmp2(15271) < 41;
  }
  return tmp5;
});

export default prop;
