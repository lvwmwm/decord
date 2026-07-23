// Module ID: 521
// Function ID: 6624
// Name: hasNativeSymbols
// Dependencies: [522]

// Module 521 (hasNativeSymbols)
let closure_2 = "undefined" !== typeof Symbol && Symbol;

export default function hasNativeSymbols() {
  let tmp = "function" === typeof callback;
  if (tmp) {
    const _Symbol = Symbol;
    let tmp3 = "function" === typeof Symbol;
    if (tmp3) {
      let tmp5 = "symbol" === typeof callback("foo");
      if (tmp5) {
        const _Symbol2 = Symbol;
        let tmp6 = "symbol" === typeof Symbol("bar");
        if (tmp6) {
          tmp6 = require(522) /* hasSymbols */();
        }
        tmp5 = tmp6;
      }
      tmp3 = tmp5;
    }
    tmp = tmp3;
  }
  return tmp;
};
