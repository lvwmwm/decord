// Module ID: 13375
// Function ID: 13376
// Dependencies: [13256]
// Exports: vercelWaitUntil

// Module 13375
import _mod13256 from "module_13256" /* 13256 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13256.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
