// Module ID: 12395
// Function ID: 12396
// Dependencies: [12276]
// Exports: vercelWaitUntil

// Module 12395
import _mod12276 from "module_12276" /* 12276 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12276.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
