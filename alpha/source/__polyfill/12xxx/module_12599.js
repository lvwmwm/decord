// Module ID: 12599
// Function ID: 12600
// Dependencies: [12480]
// Exports: vercelWaitUntil

// Module 12599
import _mod12480 from "module_12480" /* 12480 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12480.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
