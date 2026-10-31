// Module ID: 13159
// Function ID: 13160
// Dependencies: [13040]
// Exports: vercelWaitUntil

// Module 13159
import _mod13040 from "module_13040" /* 13040 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13040.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
