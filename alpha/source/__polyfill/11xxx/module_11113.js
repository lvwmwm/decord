// Module ID: 11113
// Function ID: 11114
// Dependencies: [10994]
// Exports: vercelWaitUntil

// Module 11113
import _mod10994 from "module_10994" /* 10994 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod10994.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
