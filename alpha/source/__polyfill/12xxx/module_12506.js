// Module ID: 12506
// Function ID: 12507
// Dependencies: [12387]
// Exports: vercelWaitUntil

// Module 12506
import _mod12387 from "module_12387" /* 12387 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12387.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
