// Module ID: 13809
// Function ID: 13810
// Dependencies: [13794, 13790, 13810]

// Module 13809
import _mod13790 from "module_13790" /* 13790 */;
import _mod13794 from "module_13794" /* 13794 */;

const prop = Object.getOwnPropertySymbols && !_mod13794(() => {
  const SymbolResult = Symbol("symbol detection");
  const obj = _mod13790;
  const StringResult = obj.String(SymbolResult);
  let tmp5 = !StringResult;
  if (StringResult) {
    const _Object = Object;
    const _Symbol = Symbol;
    tmp5 = !(Object(SymbolResult) instanceof Symbol);
  }
  if (!tmp5) {
    const _Symbol2 = Symbol;
    tmp5 = !Symbol.sham && tmp2(13810) && tmp2(13810) < 41;
    const tmp6 = !Symbol.sham && tmp2(13810) && tmp2(13810) < 41;
  }
  return tmp5;
});

export default prop;
