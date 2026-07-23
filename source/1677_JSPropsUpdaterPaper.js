// Module ID: 1677
// Function ID: 18580
// Name: JSPropsUpdaterPaper
// Dependencies: [6, 7, 27, 1585, 1589]

// Module 1677 (JSPropsUpdaterPaper)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import get_ActivityIndicator from "get ActivityIndicator";
import isJest from "isJest";

let Platform;
let closure_5;
const require = arg1;
({ NativeEventEmitter: closure_5, Platform } = get_ActivityIndicator);
isJest = isJest.shouldBeUseWeb();
let tmp4 = (() => {
  class JSPropsUpdaterPaper {
    constructor() {
      tmp = outer1_3(this, JSPropsUpdaterPaper);
      tmp2 = new outer1_5(undefined);
      this._reanimatedEventEmitter = tmp2;
      return;
    }
  }
  let obj = {
    key: "addOnJSPropsChangeListener",
    value: function addOnJSPropsChangeListener(getComponentViewTag) {
      let _tagToComponentMapping = JSPropsUpdaterPaper._tagToComponentMapping;
      const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
      if (1 === JSPropsUpdaterPaper._tagToComponentMapping.size) {
        const self = this;
        const _reanimatedEventEmitter = this._reanimatedEventEmitter;
        _reanimatedEventEmitter.addListener("onReanimatedPropsChange", function listener(viewTag) {
          const _tagToComponentMapping = outer1_0._tagToComponentMapping;
          const value = _tagToComponentMapping.get(viewTag.viewTag);
          if (null != value) {
            value._updateFromNative(viewTag.props);
          }
        });
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      const _tagToComponentMapping = JSPropsUpdaterPaper._tagToComponentMapping;
      _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      if (0 === JSPropsUpdaterPaper._tagToComponentMapping.size) {
        const self = this;
        const _reanimatedEventEmitter = this._reanimatedEventEmitter;
        _reanimatedEventEmitter.removeAllListeners("onReanimatedPropsChange");
      }
    }
  };
  items[1] = obj;
  return callback(JSPropsUpdaterPaper, items);
})();
tmp4._tagToComponentMapping = new Map();
let closure_6 = { code: "function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};}" };
const tmp6 = (() => {
  class JSPropsUpdaterFabric {
    constructor() {
      tmp = outer1_3(this, updater);
      if (!updater.isInitialized) {
        updater = function updater(value, props) {
          const _tagToComponentMapping = updater._tagToComponentMapping;
          value = _tagToComponentMapping.get(value);
          if (null != value) {
            value._updateFromNative(props);
          }
        };
        tmp2 = outer1_1;
        tmp3 = outer1_2;
        num = 4;
        obj = outer1_1(outer1_2[4]);
        pnpm_JSPropsUpdaterTs1 = /* worklet (recovered source) */ function pnpm_JSPropsUpdaterTs1(){const{runOnJS,updater}=this.__closure;global.updateJSProps=function(viewTag,props){runOnJS(updater)(viewTag,props);};};
        obj = {};
        obj.runOnJS = outer1_1(outer1_2[4]).runOnJS;
        obj.updater = updater;
        pnpm_JSPropsUpdaterTs1.__closure = obj;
        num2 = 2068327241111;
        pnpm_JSPropsUpdaterTs1.__workletHash = 2068327241111;
        tmp4 = outer1_6;
        pnpm_JSPropsUpdaterTs1.__initData = outer1_6;
        tmp5 = obj.runOnUIImmediately(pnpm_JSPropsUpdaterTs1)();
        tmp6 = updater;
        flag = true;
        updater.isInitialized = true;
      }
      return;
    }
  }
  let obj = {
    key: "addOnJSPropsChangeListener",
    value: function addOnJSPropsChangeListener(getComponentViewTag) {
      if (JSPropsUpdaterFabric.isInitialized) {
        const _tagToComponentMapping = JSPropsUpdaterFabric._tagToComponentMapping;
        const result = _tagToComponentMapping.set(getComponentViewTag.getComponentViewTag(), getComponentViewTag);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "removeOnJSPropsChangeListener",
    value: function removeOnJSPropsChangeListener(getComponentViewTag) {
      if (JSPropsUpdaterFabric.isInitialized) {
        const _tagToComponentMapping = JSPropsUpdaterFabric._tagToComponentMapping;
        _tagToComponentMapping.delete(getComponentViewTag.getComponentViewTag());
      }
    }
  };
  items[1] = obj;
  return callback(JSPropsUpdaterFabric, items);
})();
const map = new Map();
tmp6._tagToComponentMapping = new Map();
tmp6.isInitialized = false;
if (isJest) {
  tmp4 = (() => {
    class JSPropsUpdaterWeb {
      constructor() {
        tmp = outer1_3(this, JSPropsUpdaterWeb);
        return;
      }
    }
    let obj = {
      key: "addOnJSPropsChangeListener",
      value: function addOnJSPropsChangeListener(arg0) {

      }
    };
    const items = [obj, ];
    obj = {
      key: "removeOnJSPropsChangeListener",
      value: function removeOnJSPropsChangeListener(arg0) {

      }
    };
    items[1] = obj;
    return callback(JSPropsUpdaterWeb, items);
  })();
} else if (global._IS_FABRIC) {
  tmp4 = tmp6;
}

export default tmp4;
