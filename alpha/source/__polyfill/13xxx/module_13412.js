// Module ID: 13412
// Function ID: 13413
// Dependencies: [13293]
// Exports: vercelWaitUntil

// Module 13412
import _mod13293 from "module_13293" /* 13293 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13293.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
