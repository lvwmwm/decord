// Module ID: 12973
// Function ID: 12974
// Dependencies: [12854]
// Exports: vercelWaitUntil

// Module 12973
import _mod12854 from "module_12854" /* 12854 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod12854.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
  if (obj) {
    if (obj.get) {
      let obj1;
      if (obj.get()) {
        obj1 = obj.get();
      }
      const tmp = obj1 && obj1.waitUntil;
      if (tmp) {
        obj1.waitUntil(arg0);
      }
    }
  }
  obj1 = {};
}
