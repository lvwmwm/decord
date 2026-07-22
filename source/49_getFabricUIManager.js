// Module ID: 49
// Function ID: 1355
// Name: getFabricUIManager
// Dependencies: []

// Module 49 (getFabricUIManager)
let closure_4 = ["raw", "textAlign", "ref", "count", "body", "onPress", "backgroundColor", "cix", "title", "ix", "title", "push", "valueOf", "length", "Object", true, true, true, true, true, true, true, true, true];
arg5.getFabricUIManager = function getFabricUIManager() {
  let tmp = null == closure_3;
  if (tmp) {
    tmp = null != arg0.nativeFabricUIManager;
  }
  if (tmp) {
    closure_3 = function createProxyWithCachedProperties(nativeFabricUIManager, closure_4) {
      const obj = Object.create(nativeFabricUIManager);
      function _loop(item10010) {
        const obj = {
          get() {
            return arg0[closure_0];
          }
        };
        obj(closure_2[0])(obj, item10010, obj);
      }
      for (const item10010 of arg1) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10010);
      }
      return obj;
    }(arg0.nativeFabricUIManager, closure_4);
  }
  return closure_3;
};
