// Module ID: 13310
// Function ID: 13311
// Dependencies: [13191]
// Exports: vercelWaitUntil

// Module 13310
import _mod13191 from "module_13191" /* 13191 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13191.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
