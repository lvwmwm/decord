// Module ID: 12701
// Function ID: 12702
// Dependencies: [12582]
// Exports: vercelWaitUntil

// Module 12701
import _mod12582 from "module_12582" /* 12582 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12582.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
