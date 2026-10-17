// Module ID: 12489
// Function ID: 12490
// Dependencies: [12370]
// Exports: vercelWaitUntil

// Module 12489
import _mod12370 from "module_12370" /* 12370 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12370.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
