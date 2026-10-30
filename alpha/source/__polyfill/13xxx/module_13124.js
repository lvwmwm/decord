// Module ID: 13124
// Function ID: 13125
// Dependencies: [13005]
// Exports: vercelWaitUntil

// Module 13124
import _mod13005 from "module_13005" /* 13005 */;


export function vercelWaitUntil(arg0) {
  const obj = _mod13005.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
