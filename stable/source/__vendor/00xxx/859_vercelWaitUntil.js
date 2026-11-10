// Module ID: 859
// Function ID: 860
// Name: vercelWaitUntil
// Dependencies: [685]
// Exports: vercelWaitUntil

// Module 859 (vercelWaitUntil)
import _mod685 from "module_685" /* 685 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function vercelWaitUntil(arg0) {
  if (typeof globalThis.EdgeRuntime === "string") {
    const _Symbol = Symbol;
    const tmp7 = _mod685.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
}
