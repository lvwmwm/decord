// Module ID: 9930
// Function ID: 9931
// Dependencies: [9811]
// Exports: vercelWaitUntil

// Module 9930
import _mod9811 from "module_9811" /* 9811 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod9811.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
