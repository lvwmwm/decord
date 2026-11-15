// Module ID: 13429
// Function ID: 13430
// Dependencies: [13310]
// Exports: vercelWaitUntil

// Module 13429
import _mod13310 from "module_13310" /* 13310 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13310.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
