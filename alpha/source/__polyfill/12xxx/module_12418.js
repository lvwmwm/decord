// Module ID: 12418
// Function ID: 12419
// Dependencies: [12299]
// Exports: vercelWaitUntil

// Module 12418
import _mod12299 from "module_12299" /* 12299 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12299.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
