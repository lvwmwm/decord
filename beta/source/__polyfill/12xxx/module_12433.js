// Module ID: 12433
// Function ID: 12434
// Dependencies: [12314]
// Exports: vercelWaitUntil

// Module 12433
import _mod12314 from "module_12314" /* 12314 */;


export const vercelWaitUntil = function vercelWaitUntil(arg0) {
  const obj = _mod12314.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
