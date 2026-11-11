// Module ID: 9851
// Function ID: 9852
// Dependencies: [9732]
// Exports: vercelWaitUntil

// Module 9851
import _mod9732 from "module_9732" /* 9732 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod9732.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
