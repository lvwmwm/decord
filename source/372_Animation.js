// Module ID: 372
// Function ID: 5521
// Name: Animation
// Dependencies: [65, 6, 7, 99, 100, 348, 373, 79]

// Module 372 (Animation)
import _toConsumableArray from "_toConsumableArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import javaScriptFlagGetter from "javaScriptFlagGetter";
import _classPrivateFieldBase from "_classPrivateFieldBase";
import importDefaultResult from "_classPrivateFieldKey";

let c7 = 1;
let closure_8 = importDefaultResult("nativeID");
let closure_9 = importDefaultResult("onEnd");
let closure_10 = importDefaultResult("useNativeDriver");

export default (() => {
  class Animation {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, Animation);
      definePropertyResult = Object.defineProperty(this, outer1_8, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, outer1_9, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, outer1_10, { writable: true, value: undefined });
      tmp5 = outer1_6(this, outer1_10);
      obj = Animation(outer1_2[5]);
      tmp5[outer1_10] = obj.shouldUseNativeDriver(arg0);
      this.__active = false;
      isInteraction = arg0.isInteraction;
      if (null == isInteraction) {
        tmp6 = outer1_6;
        tmp7 = outer1_10;
        isInteraction = !outer1_6(self, outer1_10)[outer1_10];
      }
      self.__isInteraction = isInteraction;
      ({ isLooping: self.__isLooping, iterations } = arg0);
      num = 1;
      if (null != iterations) {
        num = iterations;
      }
      self.__iterations = num;
      return;
    }
  }
  let obj = {
    key: "start",
    value: function start(arg0, arg1, arg2, arg3, __isNative) {
      const self = this;
      if (!outer1_6(this, outer1_10)[outer1_10]) {
        if (true === __isNative.__isNative) {
          const _Error = Error;
          const error = new Error("Attempting to run JS driven animation on animated node that has been moved to \"native\" earlier by starting an animation with `useNativeDriver: true`");
          throw error;
        }
      }
      outer1_6(self, outer1_9)[outer1_9] = arg2;
      self.__active = true;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "stop",
    value: function stop() {
      const self = this;
      if (null != outer1_6(this, outer1_8)[outer1_8]) {
        const tmp3 = outer1_6(self, outer1_8)[outer1_8];
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp3 + ":stopAnimation";
        const API = Animation(outer1_2[5]).API;
        const result = API.setWaitingForIdentifier(combined);
        const API2 = Animation(outer1_2[5]).API;
        API2.stopAnimation(tmp3);
        const API3 = Animation(outer1_2[5]).API;
        const result1 = API3.unsetWaitingForIdentifier(combined);
      }
      self.__active = false;
    }
  };
  items[1] = obj;
  obj = {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const error = new Error("This animation type cannot be offloaded to native");
      throw error;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__findAnimatedPropsNodes",
    value: function __findAnimatedPropsNodes(closure_0) {
      const self = this;
      const items = [];
      if (closure_0 instanceof Animation(outer1_2[6])) {
        items.push(closure_0);
        return items;
      } else {
        const __getChildrenResult = closure_0.__getChildren();
        for (const item10014 of __getChildrenResult) {
          let tmp3 = items;
          let push = items.push;
          let tmp4 = outer1_3;
          let applyResult = push.apply(items, outer1_3(self.__findAnimatedPropsNodes(item10014)));
          continue;
        }
        return items;
      }
    }
  };
  items[4] = {
    key: "__startAnimationIfNative",
    value: function __startAnimationIfNative(closure_0) {
      let self = this;
      self = this;
      if (outer1_6(this, outer1_10)[outer1_10]) {
        const _HermesInternal = HermesInternal;
        const combined = "" + outer1_7 + ":startAnimation";
        outer1_7 = outer1_7 + 1;
        const API = Animation(outer1_2[5]).API;
        let result = API.setWaitingForIdentifier(combined);
        let result1 = self.__getNativeAnimationConfig();
        obj.__makeNative(result1.platformConfig);
        const tmp14 = outer1_6(self, outer1_8);
        tmp14[outer1_8] = Animation(outer1_2[5]).generateNewAnimationId();
        const API2 = Animation(outer1_2[5]).API;
        API2.startAnimatingNode(outer1_6(self, outer1_8)[outer1_8], obj.__getNativeTag(), result1, (value) => {
          self.__notifyAnimationEnd(value);
          value = value.value;
          if (null != value) {
            const result = closure_0.__onAnimatedValueUpdateReceived(value, tmp2);
            if (obj2.cxxNativeAnimatedEnabled()) {
              const obj = outer2_1(outer2_2[7]);
            }
            const result1 = self.__findAnimatedPropsNodes(closure_0);
            const item = result1.forEach((update) => update.update());
            obj2 = outer2_1(outer2_2[7]);
          }
        });
        const API3 = Animation(outer1_2[5]).API;
        const result2 = API3.unsetWaitingForIdentifier(combined);
        return true;
      } else {
        return false;
      }
    }
  };
  items[5] = {
    key: "__notifyAnimationEnd",
    value: function __notifyAnimationEnd(value) {
      const tmp = outer1_6(this, outer1_9)[outer1_9];
      if (null != tmp) {
        outer1_6(this, outer1_9)[outer1_9] = null;
        tmp(value);
      }
    }
  };
  items[6] = {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  };
  return callback(Animation, items);
})();
