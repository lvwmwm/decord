// Module ID: 871
// Function ID: 872
// Name: vercelWaitUntil
// Dependencies: [698]
// Exports: vercelWaitUntil

// Module 871 (vercelWaitUntil)
import _mod698 from "module_698" /* 698 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  if (typeof globalThis.EdgeRuntime === "string") {
    const _Symbol = Symbol;
    const tmp7 = _mod698.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
    let value;
    if (tmp7 != null) {
      const get = tmp7.get;
      if (get != null) {
        value = get();
      }
    }
    let waitUntil;
    if (value != null) {
      waitUntil = value.waitUntil;
    }
    if (waitUntil) {
      value.waitUntil(arg0);
    }
  }
};
