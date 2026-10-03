// Module ID: 14078
// Function ID: 14079
// Dependencies: [14063, 14059, 14079]

// Module 14078
import _mod14059 from "module_14059" /* 14059 */;
import _mod14063 from "module_14063" /* 14063 */;

const prop = Object.getOwnPropertySymbols && !_mod14063(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod14059;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(14079) && tmp2(14079) < 41;
    const tmp6 = !Symbol.sham && tmp2(14079) && tmp2(14079) < 41;
  }
  return tmp5;
});

export default prop;
