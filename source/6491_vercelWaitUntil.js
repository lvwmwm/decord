// Module ID: 6491
// Function ID: 6492
// Name: vercelWaitUntil
// Dependencies: [6372]

// Module 6491 (vercelWaitUntil)
const require = arg1;
const dependencyMap = arg6;
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = require(6372) /* getGlobalSingleton */.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
