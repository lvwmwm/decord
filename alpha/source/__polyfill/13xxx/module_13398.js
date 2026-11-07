// Module ID: 13398
// Function ID: 13399
// Dependencies: [13279]
// Exports: vercelWaitUntil

// Module 13398
import _mod13279 from "module_13279" /* 13279 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13279.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
