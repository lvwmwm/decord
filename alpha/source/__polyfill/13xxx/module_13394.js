// Module ID: 13394
// Function ID: 13395
// Dependencies: [13275]
// Exports: vercelWaitUntil

// Module 13394
import _mod13275 from "module_13275" /* 13275 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13275.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
