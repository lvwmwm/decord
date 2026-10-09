// Module ID: 11287
// Function ID: 11288
// Dependencies: [11168]
// Exports: vercelWaitUntil

// Module 11287
import _mod11168 from "module_11168" /* 11168 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod11168.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
};
