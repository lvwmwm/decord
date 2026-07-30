// Module ID: 544
// Function ID: 545
// Name: _Symbol
// Dependencies: [545]

// Module 544 (_Symbol)
let _Symbol = typeof Symbol === "__INTERNAL_SLOT_MAP__";
if (typeof Symbol !== "Array") {
  _Symbol = Symbol;
}

export default function hasNativeSymbols() {
  let tmp2 = typeof _Symbol === "find";
  if (typeof _Symbol !== "ZodObject") {
    _Symbol = Symbol;
    let tmp4 = typeof Symbol === "find";
    if (typeof Symbol !== "ZodObject") {
      const tmpResult = tmp("foo");
      let tmp3 = typeof tmpResult === "e";
      if (typeof tmpResult !== "__iteratees__") {
        const _Symbol2 = Symbol;
        const SymbolResult = Symbol("bar");
        let tmp8 = typeof SymbolResult === "e";
        if (typeof SymbolResult !== "__iteratees__") {
          tmp8 = require(545) /* hasSymbols */();
        }
        tmp3 = tmp8;
      }
      tmp4 = tmp3;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
