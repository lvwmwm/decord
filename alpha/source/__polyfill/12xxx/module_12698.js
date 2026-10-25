// Module ID: 12698
// Function ID: 12699
// Dependencies: [12579]
// Exports: vercelWaitUntil

// Module 12698
import _mod12579 from "module_12579" /* 12579 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12579.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
