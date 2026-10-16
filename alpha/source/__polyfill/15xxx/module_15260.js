// Module ID: 15260
// Function ID: 15261
// Dependencies: [15245, 15241, 15261]

// Module 15260
import _mod15241 from "module_15241" /* 15241 */;
import _mod15245 from "module_15245" /* 15245 */;

const prop = Object.getOwnPropertySymbols && !_mod15245(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15241;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15261) && tmp2(15261) < 41;
    const tmp6 = !Symbol.sham && tmp2(15261) && tmp2(15261) < 41;
  }
  return tmp5;
});

export default prop;
