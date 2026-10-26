// Module ID: 12699
// Function ID: 12700
// Dependencies: [12580]
// Exports: vercelWaitUntil

// Module 12699
import _mod12580 from "module_12580" /* 12580 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12580.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
