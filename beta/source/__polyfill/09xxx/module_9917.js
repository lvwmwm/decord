// Module ID: 9917
// Function ID: 9918
// Dependencies: [9798]
// Exports: vercelWaitUntil

// Module 9917
import _mod9798 from "module_9798" /* 9798 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod9798.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
