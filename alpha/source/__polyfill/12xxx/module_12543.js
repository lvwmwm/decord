// Module ID: 12543
// Function ID: 12544
// Dependencies: [12424]
// Exports: vercelWaitUntil

// Module 12543
import _mod12424 from "module_12424" /* 12424 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12424.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
