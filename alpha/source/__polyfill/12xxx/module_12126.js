// Module ID: 12126
// Function ID: 12127
// Dependencies: [12007]
// Exports: vercelWaitUntil

// Module 12126
import _mod12007 from "module_12007" /* 12007 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12007.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
