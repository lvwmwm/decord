// Module ID: 15700
// Function ID: 15701
// Dependencies: [15685, 15681, 15701]

// Module 15700
import _mod15681 from "module_15681" /* 15681 */;
import _mod15685 from "module_15685" /* 15685 */;

const prop = Object.getOwnPropertySymbols && !_mod15685(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15681;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15701) && tmp2(15701) < 41;
    const tmp6 = !Symbol.sham && tmp2(15701) && tmp2(15701) < 41;
  }
  return tmp5;
});

export default prop;
