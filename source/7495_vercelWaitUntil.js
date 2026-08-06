// Module ID: 7495
// Function ID: 7496
// Name: vercelWaitUntil
// Dependencies: [7376]

// Module 7495 (vercelWaitUntil)
const require = arg1;
const dependencyMap = arg6;
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = require(7376) /* getGlobalSingleton */.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
