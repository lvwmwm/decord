// Module ID: 15225
// Function ID: 15226
// Dependencies: [15210, 15206, 15226]

// Module 15225
import _mod15206 from "module_15206" /* 15206 */;
import _mod15210 from "module_15210" /* 15210 */;

const prop = Object.getOwnPropertySymbols && !_mod15210(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod15206;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(15226) && tmp2(15226) < 41;
    const tmp6 = !Symbol.sham && tmp2(15226) && tmp2(15226) < 41;
  }
  return tmp5;
});

export default prop;
