// Module ID: 12756
// Function ID: 12757
// Dependencies: [12637]
// Exports: vercelWaitUntil

// Module 12756
import _mod12637 from "module_12637" /* 12637 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12637.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
