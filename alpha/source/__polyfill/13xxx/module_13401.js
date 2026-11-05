// Module ID: 13401
// Function ID: 13402
// Dependencies: [13282]
// Exports: vercelWaitUntil

// Module 13401
import _mod13282 from "module_13282" /* 13282 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13282.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
