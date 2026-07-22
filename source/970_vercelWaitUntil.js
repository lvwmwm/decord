// Module ID: 970
// Function ID: 10463
// Name: vercelWaitUntil
// Dependencies: [0]

// Module 970 (vercelWaitUntil)
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  if ("string" === typeof globalThis.EdgeRuntime) {
    const _Symbol = Symbol;
    const obj = arg1(arg6[0]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
    let value;
    if (null != obj) {
      if (null != obj.get) {
        value = obj.get();
      }
    }
    if (tmp2) {
      value.waitUntil(arg0);
    }
    const tmp2 = null != value && value.waitUntil;
  }
};
