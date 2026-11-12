// Module ID: 9850
// Function ID: 9851
// Dependencies: [9731]
// Exports: vercelWaitUntil

// Module 9850
import _mod9731 from "module_9731" /* 9731 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod9731.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
