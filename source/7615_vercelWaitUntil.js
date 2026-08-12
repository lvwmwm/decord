// Module ID: 7615
// Function ID: 7616
// Name: vercelWaitUntil
// Dependencies: [7496]

// Module 7615 (vercelWaitUntil)
const require = arg1;
const dependencyMap = arg6;
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = require(7496) /* getGlobalSingleton */.GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
