// Module ID: 368
// Function ID: 5460
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 368 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_7(closure_6(prototype), arg1, arg2);
  const importDefault = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
function processColor(arg0) {
  if (null == arg0) {
    return null;
  } else if (isRgbaValue(arg0)) {
    return arg0;
  } else {
    const tmp3 = importDefault(dependencyMap[6])(arg0);
    if (null == tmp3) {
      return null;
    } else {
      if ("object" === typeof tmp3) {
        let obj = arg1(dependencyMap[7]);
        const processColorObjectResult = obj.processColorObject(tmp3);
        if (null != processColorObjectResult) {
          return processColorObjectResult;
        }
      } else if ("number" === tmp8) {
        obj = { r: (4278190080 & tmp3) >>> 24, g: (16711680 & tmp3) >>> 16, b: (65280 & tmp3) >>> 8, a: (255 & tmp3) / 255 };
        return obj;
      }
      return null;
    }
  }
}
function isRgbaValue(arg0) {
  let tmp = arg0;
  if (arg0) {
    tmp = "number" === typeof arg0.r;
  }
  if (tmp) {
    tmp = "number" === typeof arg0.g;
  }
  if (tmp) {
    tmp = "number" === typeof arg0.b;
  }
  if (tmp) {
    tmp = "number" === typeof arg0.a;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = { EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: 570425343, canManageWebhooks: 35190849, canManageGuild: 666194432, markPotentialBadState: 672213460 };

export default (arg0) => {
  class AnimatedColor {
    constructor(arg0, arg1) {
      tmp = arg0;
      self = this;
      tmp2 = closure_3(this, AnimatedColor);
      items = [];
      items[0] = arg1;
      obj = closure_6(AnimatedColor);
      tmp3 = closure_5;
      if (closure_10()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        tmp6 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result._suspendCallbacks = 0;
      if (null == tmp) {
        tmp = closure_9;
      }
      tmp7 = tmp;
      if (tmp) {
        tmp8 = closure_1;
        tmp9 = closure_2;
        num = 8;
        tmp7 = tmp.r instanceof closure_1(closure_2[8]);
      }
      if (tmp7) {
        tmp10 = closure_1;
        tmp11 = closure_2;
        num2 = 8;
        tmp7 = tmp.g instanceof closure_1(closure_2[8]);
      }
      if (tmp7) {
        tmp12 = closure_1;
        tmp13 = closure_2;
        num3 = 8;
        tmp7 = tmp.b instanceof closure_1(closure_2[8]);
      }
      if (tmp7) {
        tmp14 = closure_1;
        tmp15 = closure_2;
        num4 = 8;
        tmp7 = tmp.a instanceof closure_1(closure_2[8]);
      }
      if (tmp7) {
        ({ r: obj2.r, g: obj2.g, b: obj2.b, a: obj2.a } = tmp);
      } else {
        tmp16 = closure_12;
        tmp17 = closure_12(tmp);
        if (null == tmp17) {
          tmp17 = closure_9;
        }
        tmp19 = closure_13;
        tmp18 = closure_9;
        tmp20 = tmp17;
        tmp21 = tmp17;
        if (!closure_13(tmp17)) {
          tmp3Result.nativeColor = tmp17;
          tmp21 = tmp18;
        }
        tmp22 = closure_1;
        tmp23 = closure_2;
        num5 = 8;
        tmp24 = closure_1(closure_2[8]);
        prototype = tmp24.prototype;
        tmp25 = new.target;
        tmp26 = new.target;
        tmp24 = new tmp24(tmp21.r);
        tmp28 = tmp24;
        tmp3Result.r = tmp24;
        tmp29 = closure_1(closure_2[8]);
        prototype2 = tmp29.prototype;
        tmp30 = new.target;
        tmp31 = new.target;
        tmp29 = new tmp29(tmp21.g);
        tmp33 = tmp29;
        tmp3Result.g = tmp29;
        tmp34 = closure_1(closure_2[8]);
        prototype3 = tmp34.prototype;
        tmp35 = new.target;
        tmp36 = new.target;
        tmp34 = new tmp34(tmp21.b);
        tmp38 = tmp34;
        tmp3Result.b = tmp34;
        tmp39 = closure_1(closure_2[8]);
        prototype4 = tmp39.prototype;
        tmp40 = new.target;
        tmp41 = new.target;
        tmp39 = new tmp39(tmp21.a);
        tmp43 = tmp39;
        tmp3Result.a = tmp39;
      }
      tmp44 = null != arg1 && arg1.useNativeDriver;
      if (tmp44) {
        __makeNativeResult = tmp3Result.__makeNative();
      }
      return tmp3Result;
    }
  }
  const arg1 = AnimatedColor;
  callback2(AnimatedColor, arg0);
  let obj = {
    key: "setValue",
    value: function setValue(arg0) {
      const self = this;
      const AnimatedColor = this;
      const callback = false;
      if (this.__isNative) {
        const API = callback(tmp4[9]).API;
        const result = API.setWaitingForIdentifier(self.__getNativeTag().toString());
        const str = self.__getNativeTag();
      }
      let tmp4 = callback6(arg0);
      if (null == tmp4) {
        tmp4 = closure_9;
      }
      const result1 = self._withSuspendedCallbacks(() => {
        if (callback(tmp4)) {
          const r = tmp2.r;
          r.setValue(tmp.r);
          const g = tmp2.g;
          g.setValue(tmp.g);
          const b = tmp2.b;
          b.setValue(tmp.b);
          const a = tmp2.a;
          a.setValue(tmp.a);
          if (null != tmp2.nativeColor) {
            self.nativeColor = null;
            let closure_1 = true;
          }
        } else if (tmp2.nativeColor !== tmp) {
          self.nativeColor = tmp;
          closure_1 = true;
        }
      });
      if (self.__isNative) {
        const str2 = self.__getNativeTag();
        if (callback) {
          const API2 = callback(tmp4[9]).API;
          const result2 = API2.updateAnimatedNodeConfig(str2, self.__getNativeConfig());
        }
        const API3 = callback(tmp4[9]).API;
        const result3 = API3.unsetWaitingForIdentifier(str2.toString());
      } else {
        AnimatedColor(tmp4[8]).flushValue(self);
        const obj = AnimatedColor(tmp4[8]);
      }
      self.__callListeners(self.__getValue());
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "setOffset",
    value: function setOffset(arg0) {
      const r = this.r;
      r.setOffset(arg0.r);
      const g = this.g;
      g.setOffset(arg0.g);
      const b = this.b;
      b.setOffset(arg0.b);
      const a = this.a;
      a.setOffset(arg0.a);
    }
  };
  items[1] = obj;
  obj = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const r = this.r;
      r.flattenOffset();
      const g = this.g;
      g.flattenOffset();
      const b = this.b;
      b.flattenOffset();
      const a = this.a;
      a.flattenOffset();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "extractOffset",
    value: function extractOffset() {
      const r = this.r;
      r.extractOffset();
      const g = this.g;
      g.extractOffset();
      const b = this.b;
      b.extractOffset();
      const a = this.a;
      a.extractOffset();
    }
  };
  items[4] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.stopAnimation();
      const g = this.g;
      g.stopAnimation();
      const b = this.b;
      b.stopAnimation();
      const a = this.a;
      a.stopAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[5] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      const r = this.r;
      r.resetAnimation();
      const g = this.g;
      g.resetAnimation();
      const b = this.b;
      b.resetAnimation();
      const a = this.a;
      a.resetAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[6] = {
    key: "__getValue",
    value: function __getValue() {
      let g;
      let r;
      const self = this;
      if (null != this.nativeColor) {
        let nativeColor = self.nativeColor;
      } else {
        ({ r, g } = self);
        const b = self.b;
        const __getValueResult = r.__getValue();
        const a = self.a;
        const __getValueResult1 = g.__getValue();
        const _HermesInternal = HermesInternal;
        nativeColor = "rgba(" + __getValueResult + ", " + __getValueResult1 + ", " + b.__getValue() + ", " + a.__getValue() + ")";
        const __getValueResult2 = b.__getValue();
      }
      return nativeColor;
    }
  };
  items[7] = {
    key: "__attach",
    value: function __attach() {
      const r = this.r;
      r.__addChild(this);
      const g = this.g;
      g.__addChild(this);
      const b = this.b;
      b.__addChild(this);
      const a = this.a;
      a.__addChild(this);
      callback5(AnimatedColor, "__attach", this, 3)([]);
    }
  };
  items[8] = {
    key: "__detach",
    value: function __detach() {
      const r = this.r;
      r.__removeChild(this);
      const g = this.g;
      g.__removeChild(this);
      const b = this.b;
      b.__removeChild(this);
      const a = this.a;
      a.__removeChild(this);
      callback5(AnimatedColor, "__detach", this, 3)([]);
    }
  };
  items[9] = {
    key: "_withSuspendedCallbacks",
    value: function _withSuspendedCallbacks(arg0) {
      this._suspendCallbacks = this._suspendCallbacks + 1;
      arg0();
      this._suspendCallbacks = this._suspendCallbacks - 1;
    }
  };
  items[10] = {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const self = this;
      if (0 === this._suspendCallbacks) {
        const items = [arg0];
        callback5(AnimatedColor, "__callListeners", self, 3)(items);
      }
    }
  };
  items[11] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const r = this.r;
      r.__makeNative(arg0);
      const g = this.g;
      g.__makeNative(arg0);
      const b = this.b;
      b.__makeNative(arg0);
      const a = this.a;
      a.__makeNative(arg0);
      const items = [arg0];
      callback5(AnimatedColor, "__makeNative", this, 3)(items);
    }
  };
  items[12] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let a;
      let b;
      let g;
      let r;
      ({ r, g, b, a } = this);
      return { type: "color", r: r.__getNativeTag(), g: g.__getNativeTag(), b: b.__getNativeTag(), a: a.__getNativeTag(), nativeColor: this.nativeColor, debugID: this.__getDebugID() };
    }
  };
  return callback(AnimatedColor, items);
}(importDefault(dependencyMap[10]));
