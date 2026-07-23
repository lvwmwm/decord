// Module ID: 808
// Function ID: 9066
// Name: withRandomSafeContext
// Dependencies: [798]

// Module 808 (withRandomSafeContext)
const require = arg1;
const dependencyMap = arg6;
function withRandomSafeContext(arg0) {
  if (undefined !== callback) {
    if (callback) {
      let tmp9 = callback(arg0);
    } else {
      tmp9 = arg0();
    }
    return tmp9;
  } else {
    const _Symbol = Symbol;
    const forResult = Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const GLOBAL_OBJ = require(798).GLOBAL_OBJ;
    if (forResult in GLOBAL_OBJ) {
      if ("function" === typeof GLOBAL_OBJ[forResult]) {
        callback = tmp7;
        let tmp7Result = tmp7(arg0);
      }
      return tmp7Result;
    }
    callback = null;
    tmp7Result = arg0();
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.safeDateNow = function safeDateNow() {
  return withRandomSafeContext(() => Date.now());
};
arg5.safeMathRandom = function safeMathRandom() {
  return withRandomSafeContext(() => Math.random());
};
arg5.withRandomSafeContext = withRandomSafeContext;
