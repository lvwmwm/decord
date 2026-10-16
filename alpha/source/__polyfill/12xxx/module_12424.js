// Module ID: 12424
// Function ID: 12425
// Dependencies: [12305]
// Exports: vercelWaitUntil

// Module 12424
import _mod12305 from "module_12305" /* 12305 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12305.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
