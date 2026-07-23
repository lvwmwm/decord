// Module ID: 47
// Function ID: 1322
// Name: raiseSoftError
// Dependencies: [48, 49, 51, 50]

// Module 47 (raiseSoftError)
let closure_7;
let closure_8;
const require = arg1;
let module = arg2;
const dependencyMap = arg6;
function raiseSoftError(clearJSResponder, arg1) {
  let str = "";
  const combined = "[ReactNative Architecture][JS] '" + clearJSResponder + "' is not available in the new React Native architecture.";
  if (arg1) {
    const _HermesInternal = HermesInternal;
    str = " " + arg1;
  }
  console.error(combined + str);
}
RN$LegacyInterop_UIManager_getConstants = RN$LegacyInterop_UIManager_getConstants.RN$LegacyInterop_UIManager_getConstants;
let c3 = false;
let closure_4 = {};
const fn = () => {
  if (!c3) {
    let closure_4 = module(48)(RN$LegacyInterop_UIManager_getConstants)();
    c3 = true;
  }
  return closure_4;
};
({ RN$LegacyInterop_UIManager_getConstantsForViewManager: closure_7, RN$LegacyInterop_UIManager_getDefaultEventTypes: closure_8 } = RN$LegacyInterop_UIManager_getConstants);
let closure_9 = (() => {
  let c0 = false;
  let c1 = null;
  return () => {
    if (!c0) {
      let closure_1 = _null(outer1_2[0])(outer1_8)();
      c0 = true;
    }
    return closure_1;
  };
})();
let obj = {
  measure(arg0, arg1) {
    raiseSoftError("measure");
  },
  measureInWindow(arg0, arg1) {
    raiseSoftError("measureInWindow");
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    raiseSoftError("measureLayout");
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    raiseSoftError("measureLayoutRelativeToParent");
  },
  dispatchViewManagerCommand(arg0, arg1, arg2) {
    raiseSoftError("dispatchViewManagerCommand");
  }
};
obj = {
  createView(arg0, arg1, arg2, arg3) {
    raiseSoftError("createView");
  },
  updateView(_nativeTag, uiViewClassName, combined) {
    raiseSoftError("updateView");
  },
  setChildren(_nativeTag, items) {
    raiseSoftError("setChildren");
  },
  manageChildren(_nativeTag, items, items1, items2, items3, arg5) {
    raiseSoftError("manageChildren");
  },
  setJSResponder(_nativeTag, arg1) {
    raiseSoftError("setJSResponder");
  },
  clearJSResponder() {
    raiseSoftError("clearJSResponder");
  }
};
obj = {
  getConstantsForViewManager(arg0) {
    if (callback) {
      let obj = callback(arg0);
    } else {
      raiseSoftError("getConstantsForViewManager");
      obj = {};
    }
    return obj;
  },
  getDefaultEventTypes() {
    if (closure_8) {
      let items = callback2();
    } else {
      raiseSoftError("getDefaultEventTypes");
      items = [];
    }
    return items;
  },
  setLayoutAnimationEnabledExperimental(arg0) {

  },
  sendAccessibilityEvent(arg0, arg1) {
    let str = "focus";
    if (arg1 !== 8) {
      str = "windowStateChange";
      if (arg1 !== 32) {
        str = "click";
        if (arg1 !== 1) {
          str = "viewHoverEnter";
          if (arg1 !== 128) {
            const _console = console;
            const _HermesInternal = HermesInternal;
            console.error("sendAccessibilityEvent() dropping event: Called with unsupported eventType: " + arg1);
          }
        }
      }
    }
    const tmp3 = module(48);
    const tmp3Result = tmp3(require(49) /* getFabricUIManager */.getFabricUIManager());
    const result = tmp3Result.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = tmp3Result.sendAccessibilityEvent(result, str);
    } else {
      const _console2 = console;
      const _HermesInternal2 = HermesInternal;
      console.error("sendAccessibilityEvent() dropping event: Cannot find view with tag #" + arg0);
    }
  }
};
const merged = Object.assign({}, obj, {}, obj, obj, {
  getViewManagerConfig(arg0) {
    if (RN$LegacyInterop_UIManager_getConstants) {
      const tmp9 = fn();
      let getConstantsForViewManager = !tmp9[arg0];
      if (getConstantsForViewManager) {
        getConstantsForViewManager = merged.getConstantsForViewManager;
      }
      if (getConstantsForViewManager) {
        tmp9[arg0] = merged.getConstantsForViewManager(arg0);
      }
      return tmp9[arg0];
    } else {
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const combined = "getViewManagerConfig('" + arg0 + "')";
      raiseSoftError(combined, "If '" + arg0 + "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('" + arg0 + "') instead.");
      return null;
    }
  },
  hasViewManagerConfig(unstable_hasComponent) {
    return require(51) /* map */.unstable_hasComponent(unstable_hasComponent);
  },
  getConstants() {
    if (RN$LegacyInterop_UIManager_getConstants) {
      let tmp3 = fn();
    } else {
      raiseSoftError("getConstants");
      tmp3 = null;
    }
    return tmp3;
  },
  findSubviewIn(arg0, arg1, arg2) {
    const _require = arg2;
    const tmp = module(48);
    const tmpResult = tmp(_require(49).getFabricUIManager());
    module = tmpResult;
    const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmpResult.findNodeAtPoint(result, arg1[0], arg1[1], (stateNode) => {
        if (null != stateNode) {
          const node = stateNode.stateNode.node;
          if (node) {
            const nativeTag = stateNode.stateNode.canonical.nativeTag;
            tmpResult.measure(node, (arg0, arg1, arg2, arg3, arg4, arg5) => {
              nativeTag(nativeTag, arg4, arg5, arg2, arg3);
            });
          } else {
            const _console2 = console;
            console.error("findSubviewIn(): Cannot find node at point");
          }
        } else {
          const _console = console;
          console.error("findSubviewIn(): Cannot find node at point");
        }
      });
    } else {
      let _console = console;
      const _HermesInternal = HermesInternal;
      console.error("findSubviewIn() noop: Cannot find view with reactTag " + arg0);
    }
  },
  viewIsDescendantOf(arg0, arg1, arg2) {
    const tmp = module(48);
    const tmpResult = tmp(require(49) /* getFabricUIManager */.getFabricUIManager());
    const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = tmpResult.findShadowNodeByTag_DEPRECATED(arg1);
      if (result1) {
        const items = [16 & tmpResult.compareDocumentPosition(result1, result)];
        arg2(items);
      } else {
        const _console2 = console;
        const _HermesInternal2 = HermesInternal;
        console.error("viewIsDescendantOf() noop: Cannot find view with ancestorReactTag " + arg1);
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("viewIsDescendantOf() noop: Cannot find view with reactTag " + arg0);
    }
  },
  configureNextLayoutAnimation(duration, fn2, fn) {
    const tmp = module(48);
    const obj = require(49) /* getFabricUIManager */;
    const result = tmp(require(49) /* getFabricUIManager */.getFabricUIManager()).configureNextLayoutAnimation(duration, fn2, fn);
  }
});
if (RN$LegacyInterop_UIManager_getConstants) {
  const _Object = Object;
  const keys = Object.keys(fn());
  const item = keys.forEach((arg0) => {
    merged[arg0] = fn()[arg0];
  });
  if (merged.getConstants().ViewManagerNames) {
    const ViewManagerNames = merged.getConstants().ViewManagerNames;
    const item1 = ViewManagerNames.forEach((arg0) => {
      let closure_0 = arg0;
      module(50)(merged, arg0, {
        get() {
          return outer1_1(outer1_2[0])(outer1_10.getConstantsForViewManager)(closure_0);
        }
      });
    });
  }
}
arg5.default = merged;
