// Module ID: 970
// Function ID: 10465
// Name: vercelWaitUntil
// Dependencies: [798]

// Module 970 (vercelWaitUntil)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  if ("string" === typeof globalThis.EdgeRuntime) {
    const _Symbol = Symbol;
    const obj = require(798).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
    let value;
    if (null != obj) {
      if (null != obj.get) {
        value = obj.get();
      }
    }
    if (tmp2) {
      value.waitUntil(arg0);
    }
    tmp2 = null != value && value.waitUntil;
  }
};
