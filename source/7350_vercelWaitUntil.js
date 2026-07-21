// Module ID: 7350
// Function ID: 59259
// Name: vercelWaitUntil
// Dependencies: []

// Module 7350 (vercelWaitUntil)
arg5.vercelWaitUntil = function vercelWaitUntil(arg0) {
  let obj = arg1(arg6[0]).GLOBAL_OBJ[Symbol.for(Symbol, "@vercel/request-context")];
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
