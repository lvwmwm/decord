// Module ID: 13393
// Function ID: 13394
// Dependencies: [13274]
// Exports: vercelWaitUntil

// Module 13393
import _mod13274 from "module_13274" /* 13274 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13274.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
