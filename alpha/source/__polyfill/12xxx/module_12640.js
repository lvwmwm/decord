// Module ID: 12640
// Function ID: 12641
// Dependencies: [12521]
// Exports: vercelWaitUntil

// Module 12640
import _mod12521 from "module_12521" /* 12521 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12521.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
