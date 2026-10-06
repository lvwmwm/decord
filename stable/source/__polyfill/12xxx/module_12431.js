// Module ID: 12431
// Function ID: 12432
// Dependencies: [12312]
// Exports: vercelWaitUntil

// Module 12431
import _mod12312 from "module_12312" /* 12312 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12312.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
