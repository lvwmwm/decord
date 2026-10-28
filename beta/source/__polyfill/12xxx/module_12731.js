// Module ID: 12731
// Function ID: 12732
// Dependencies: [12612]
// Exports: vercelWaitUntil

// Module 12731
import _mod12612 from "module_12612" /* 12612 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12612.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
