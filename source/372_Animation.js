// Module ID: 372
// Function ID: 5521
// Name: Animation
// Dependencies: []

// Module 372 (Animation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const importDefaultResult = importDefault(dependencyMap[4]);
let closure_7 = 1;
let closure_8 = importDefaultResult("nativeID");
let closure_9 = importDefaultResult("onEnd");
let closure_10 = importDefaultResult("useNativeDriver");

export default () => {
  class Animation {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, Animation);
      definePropertyResult = Object.defineProperty(this, closure_8, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(this, closure_9, { writable: true, value: undefined });
      definePropertyResult2 = Object.defineProperty(this, closure_10, { writable: true, value: undefined });
      tmp5 = closure_6(this, closure_10);
      obj = Animation(closure_2[5]);
      tmp5[closure_10] = obj.shouldUseNativeDriver(arg0);
      this.__active = false;
      isInteraction = arg0.isInteraction;
      if (null == isInteraction) {
        tmp6 = closure_6;
        tmp7 = closure_10;
        isInteraction = !closure_6(self, closure_10)[closure_10];
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
  const importDefault = Animation;
  let obj = {
    key: "start",
    value: function start(arg0, arg1, arg2, arg3, __isNative) {
      const self = this;
      if (!callback2(this, closure_10)[closure_10]) {
        if (true === __isNative.__isNative) {
          const _Error = Error;
          const error = new Error("Attempting to run JS driven animation on animated node that has been moved to \"native\" earlier by starting an animation with `useNativeDriver: true`");
          throw error;
        }
      }
      callback2(self, closure_9)[closure_9] = arg2;
      self.__active = true;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "stop",
    value: function stop() {
      const self = this;
      if (null != callback2(this, closure_8)[closure_8]) {
        const tmp3 = callback2(self, closure_8)[closure_8];
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp3 + ":stopAnimation";
        const API = Animation(closure_2[5]).API;
        const result = API.setWaitingForIdentifier(combined);
        const API2 = Animation(closure_2[5]).API;
        API2.stopAnimation(tmp3);
        const API3 = Animation(closure_2[5]).API;
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
    value: function __findAnimatedPropsNodes(item10014) {
      const self = this;
      const items = [];
      if (item10014 instanceof Animation(closure_2[6])) {
        items.push(item10014);
        return items;
      } else {
        const __getChildrenResult = item10014.__getChildren();
        for (const item10014 of __getChildrenResult) {
          let tmp3 = items;
          let push = items.push;
          let tmp4 = closure_3;
          let applyResult = push.apply(items, closure_3(self.__findAnimatedPropsNodes(item10014)));
        }
        return items;
      }
    }
  };
  items[4] = {
    key: "__startAnimationIfNative",
    value: function __startAnimationIfNative(arg0) {
      let self = this;
      const Animation = arg0;
      self = this;
      if (callback2(this, closure_10)[closure_10]) {
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_7 + ":startAnimation";
        closure_7 = closure_7 + 1;
        const API = Animation(closure_2[5]).API;
        const result = API.setWaitingForIdentifier(combined);
        const result1 = self.__getNativeAnimationConfig();
        obj.__makeNative(result1.platformConfig);
        const tmp14 = callback2(self, closure_8);
        tmp14[closure_8] = Animation(closure_2[5]).generateNewAnimationId();
        const API2 = Animation(closure_2[5]).API;
        API2.startAnimatingNode(callback2(self, closure_8)[closure_8], obj.__getNativeTag(), result1, (value) => {
          self.__notifyAnimationEnd(value);
          value = value.value;
          if (null != value) {
            const result = value.__onAnimatedValueUpdateReceived(value, tmp2);
            if (obj2.cxxNativeAnimatedEnabled()) {
              const obj = self(closure_2[7]);
            }
            const result1 = self.__findAnimatedPropsNodes(value);
            const item = result1.forEach((update) => update.update());
            const obj2 = self(closure_2[7]);
          }
        });
        const API3 = Animation(closure_2[5]).API;
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
      const tmp = callback2(this, closure_9)[closure_9];
      if (null != tmp) {
        callback2(this, closure_9)[closure_9] = null;
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
}();
