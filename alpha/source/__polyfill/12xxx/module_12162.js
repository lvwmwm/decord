// Module ID: 12162
// Function ID: 12163
// Dependencies: [12043]
// Exports: vercelWaitUntil

// Module 12162
import _mod12043 from "module_12043" /* 12043 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12043.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
