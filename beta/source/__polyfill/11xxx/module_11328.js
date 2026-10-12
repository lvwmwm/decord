// Module ID: 11328
// Function ID: 11329
// Dependencies: [11209]
// Exports: vercelWaitUntil

// Module 11328
import _mod11209 from "module_11209" /* 11209 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod11209.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
