// Module ID: 47
// Function ID: 1322
// Name: raiseSoftError
// Dependencies: []

// Module 47 (raiseSoftError)
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
let closure_3 = false;
let closure_4 = {};
const fn = () => {
  if (!closure_3) {
    let closure_4 = arg2(arg6[0])(RN$LegacyInterop_UIManager_getConstants)();
    closure_3 = true;
  }
  return closure_4;
};
({ RN$LegacyInterop_UIManager_getConstantsForViewManager: closure_7, RN$LegacyInterop_UIManager_getDefaultEventTypes: closure_8 } = RN$LegacyInterop_UIManager_getConstants);
let closure_9 = () => {
  let closure_0 = false;
  let closure_1 = null;
  return () => {
    if (!closure_0) {
      const _null = _null(closure_2[0])(closure_8)();
      closure_0 = true;
    }
    return _null;
  };
}();
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
    const tmp3 = arg2(arg6[0]);
    const tmp3Result = tmp3(arg1(arg6[1]).getFabricUIManager());
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
  hasViewManagerConfig(arg0) {
    return arg1(arg6[2]).unstable_hasComponent(arg0);
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
    arg1 = arg2;
    const tmp = arg2(arg6[0]);
    const tmpResult = tmp(arg1(arg6[1]).getFabricUIManager());
    arg2 = tmpResult;
    const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmpResult.findNodeAtPoint(result, arg1[0], arg1[1], (stateNode) => {
        if (null != stateNode) {
          const node = stateNode.stateNode.node;
          if (node) {
            const arg2 = stateNode.stateNode.canonical.nativeTag;
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
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("findSubviewIn() noop: Cannot find view with reactTag " + arg0);
    }
  },
  viewIsDescendantOf(arg0, arg1, arg2) {
    const tmp = arg2(arg6[0]);
    const tmpResult = tmp(arg1(arg6[1]).getFabricUIManager());
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
    const tmp = fn(arg6[0]);
    const obj = fn2(arg6[1]);
    const result = tmp(fn2(arg6[1]).getFabricUIManager()).configureNextLayoutAnimation(duration, fn2, fn);
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
      const arg1 = arg0;
      arg2(arg6[3])(merged, arg0, {
        get() {
          return callback(closure_2[0])(obj.getConstantsForViewManager)(arg0);
        }
      });
    });
  }
}
arg5.default = merged;
