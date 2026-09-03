// Module ID: 12691
// Function ID: 12692
// Name: vercelWaitUntil
// Dependencies: [12572]

// Module 12691 (vercelWaitUntil)
import getGlobalSingleton from "getGlobalSingleton" /* 12572 */;

require = arg1;
const dependencyMap = arg6;
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = getGlobalSingleton.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
  if (obj) {
    if (obj.get) {
      if (obj.get()) {
        obj = obj.get();
      }
      let waitUntil = obj;
      if (obj) {
        waitUntil = obj.waitUntil;
      }
      if (waitUntil) {
        obj.waitUntil(arg0);
      }
    }
  }
  obj = {};
};
