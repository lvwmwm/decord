// Module ID: 358
// Function ID: 5301
// Name: _assertNativeAnimatedModule
// Dependencies: [6, 7, 99, 100, 348, 44]

// Module 358 (_assertNativeAnimatedModule)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _classPrivateFieldBase from "_classPrivateFieldBase";

let c5 = 1;
function _assertNativeAnimatedModule() {
  const result = importDefault(348).assertNativeAnimatedModule();
  let c6 = null;
}
let closure_7 = require("_classPrivateFieldKey")("listeners");

export default (() => {
  class AnimatedNode {
    constructor(arg0) {
      tmp = outer1_2(this, AnimatedNode);
      definePropertyResult = Object.defineProperty(this, outer1_7, { writable: true, value: undefined });
      this._platformConfig = undefined;
      this.__isNative = false;
      this.__nativeTag = undefined;
      this.__debugID = undefined;
      tmp3 = outer1_4(this, outer1_7);
      map = new Map();
      tmp3[outer1_7] = map;
      return;
    }
  }
  let obj = {
    key: "__attach",
    value: function __attach() {

    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "__detach",
    value: function __detach() {
      const self = this;
      this.removeAllListeners();
      let __isNative = this.__isNative;
      if (__isNative) {
        __isNative = null != self.__nativeTag;
      }
      if (__isNative) {
        const API = AnimatedNode(outer1_1[4]).API;
        API.dropAnimatedNode(self.__nativeTag);
        self.__nativeTag = undefined;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "__getValue",
    value: function __getValue() {

    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      return this.__getValue();
    }
  };
  items[4] = {
    key: "__addChild",
    value: function __addChild(arg0) {

    }
  };
  items[5] = {
    key: "__removeChild",
    value: function __removeChild(arg0) {

    }
  };
  items[6] = {
    key: "__getChildren",
    value: function __getChildren() {
      return [];
    }
  };
  items[7] = {
    key: "__makeNative",
    value: function __makeNative(_platformConfig) {
      AnimatedNode(outer1_1[5])(this.__isNative, "This node cannot be made a \"native\" animated node");
      this._platformConfig = _platformConfig;
    }
  };
  items[8] = {
    key: "addListener",
    value: function addListener(arg0) {
      const outer1_5 = tmp + 1;
      const StringResult = String(+outer1_5);
      const result = outer1_4(this, outer1_7)[outer1_7].set(StringResult, arg0);
      return StringResult;
    }
  };
  items[9] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      outer1_4(this, outer1_7)[outer1_7].delete(arg0);
    }
  };
  items[10] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      outer1_4(this, outer1_7)[outer1_7].clear();
    }
  };
  items[11] = {
    key: "hasListeners",
    value: function hasListeners(progress) {
      return outer1_4(this, outer1_7)[outer1_7].size > 0;
    }
  };
  items[12] = {
    key: "__onAnimatedValueUpdateReceived",
    value: function __onAnimatedValueUpdateReceived(arg0, arg1) {
      this.__callListeners(arg0 + arg1);
    }
  };
  items[13] = {
    key: "__callListeners",
    value: function __callListeners(value) {
      const obj = { value };
      const item = outer1_4(this, outer1_7)[outer1_7].forEach((arg0) => {
        arg0(obj);
      });
    }
  };
  items[14] = {
    key: "__getNativeTag",
    value: function __getNativeTag() {
      const self = this;
      let __nativeTag = this.__nativeTag;
      if (null == __nativeTag) {
        if (null != outer1_6) {
          outer1_6();
        }
        AnimatedNode(outer1_1[5])(self.__isNative, "Attempt to get native tag from node not marked as \"native\"");
        const newNodeTag = AnimatedNode(outer1_1[4]).generateNewNodeTag();
        self.__nativeTag = newNodeTag;
        const __getNativeConfigResult = self.__getNativeConfig();
        if (self._platformConfig) {
          __getNativeConfigResult.platformConfig = self._platformConfig;
        }
        const API = AnimatedNode(outer1_1[4]).API;
        const animatedNode = API.createAnimatedNode(newNodeTag, __getNativeConfigResult);
        __nativeTag = newNodeTag;
        const obj = AnimatedNode(outer1_1[4]);
      }
      return __nativeTag;
    }
  };
  items[15] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const error = new Error("This JS animated node type cannot be used as native animated node");
      throw error;
    }
  };
  items[16] = {
    key: "__getPlatformConfig",
    value: function __getPlatformConfig() {
      return this._platformConfig;
    }
  };
  items[17] = {
    key: "__setPlatformConfig",
    value: function __setPlatformConfig(_platformConfig) {
      this._platformConfig = _platformConfig;
    }
  };
  items[18] = {
    key: "toJSON",
    value: function toJSON() {
      return this.__getValue();
    }
  };
  items[19] = {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  };
  return callback(AnimatedNode, items);
})();
