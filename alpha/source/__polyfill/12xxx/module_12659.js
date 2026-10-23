// Module ID: 12659
// Function ID: 12660
// Dependencies: [12540]
// Exports: vercelWaitUntil

// Module 12659
import _mod12540 from "module_12540" /* 12540 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12540.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
