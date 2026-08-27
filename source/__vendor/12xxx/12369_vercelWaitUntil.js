// Module ID: 12369
// Function ID: 12370
// Name: vercelWaitUntil
// Dependencies: [12250]

// Module 12369 (vercelWaitUntil)
import getGlobalSingleton from "getGlobalSingleton" /* 12250 */;

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
