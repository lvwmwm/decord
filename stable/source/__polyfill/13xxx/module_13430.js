// Module ID: 13430
// Function ID: 13431
// Dependencies: [13311]
// Exports: vercelWaitUntil

// Module 13430
import _mod13311 from "module_13311" /* 13311 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13311.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
