// Module ID: 12693
// Function ID: 12694
// Dependencies: [12574]
// Exports: vercelWaitUntil

// Module 12693
import _mod12574 from "module_12574" /* 12574 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12574.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
