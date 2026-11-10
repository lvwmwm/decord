// Module ID: 13174
// Function ID: 13175
// Dependencies: [13055]
// Exports: vercelWaitUntil

// Module 13174
import _mod13055 from "module_13055" /* 13055 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13055.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
}
