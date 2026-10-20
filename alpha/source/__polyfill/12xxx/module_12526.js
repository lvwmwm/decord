// Module ID: 12526
// Function ID: 12527
// Dependencies: [12407]
// Exports: vercelWaitUntil

// Module 12526
import _mod12407 from "module_12407" /* 12407 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12407.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
