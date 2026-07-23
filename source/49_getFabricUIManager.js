// Module ID: 49
// Function ID: 1355
// Name: getFabricUIManager
// Dependencies: [50]

// Module 49 (getFabricUIManager)
const global = arg0;
const module = arg2;
const dependencyMap = arg6;
let closure_4 = ["createNode", "cloneNode", "cloneNodeWithNewChildren", "cloneNodeWithNewProps", "cloneNodeWithNewChildrenAndProps", "createChildSet", "appendChild", "appendChildToSet", "completeRoot", "measure", "measureInWindow", "measureLayout", "configureNextLayoutAnimation", "sendAccessibilityEvent", "findShadowNodeByTag_DEPRECATED", "setNativeProps", "dispatchCommand", "compareDocumentPosition", "getBoundingClientRect", "unstable_DefaultEventPriority", "unstable_DiscreteEventPriority", "unstable_ContinuousEventPriority", "unstable_IdleEventPriority", "unstable_getCurrentEventPriority"];
arg5.getFabricUIManager = function getFabricUIManager() {
  let tmp = null == closure_3;
  if (tmp) {
    tmp = null != global.nativeFabricUIManager;
  }
  if (tmp) {
    closure_3 = (function createProxyWithCachedProperties(nativeFabricUIManager, closure_4) {
      let closure_0 = nativeFabricUIManager;
      let obj = Object.create(nativeFabricUIManager);
      function _loop(item10010) {
        let closure_0 = item10010;
        const obj = {
          get() {
            return item10010[item10010];
          }
        };
        outer2_1(outer2_2[0])(obj, item10010, obj);
      }
      for (const item10010 of arg1) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10010);
        continue;
      }
      return obj;
    })(global.nativeFabricUIManager, closure_4);
  }
  return closure_3;
};
