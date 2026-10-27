// Module ID: 12709
// Function ID: 12710
// Dependencies: [12590]
// Exports: vercelWaitUntil

// Module 12709
import _mod12590 from "module_12590" /* 12590 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12590.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
