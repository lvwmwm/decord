// Module ID: 369
// Function ID: 5484
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 348, 358]

// Module 369 (_isNativeReflectConstruct)
import set from "set";
import _assertNativeAnimatedModule from "_assertNativeAnimatedModule";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  let closure_0 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = _get(_getPrototypeOf(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(closure_0, arg0);
    }
  }
  return fn;
}

export default ((arg0) => {
  class AnimatedTracking {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
      self = this;
      tmp = outer1_2(this, AnimatedTracking);
      items = [];
      items[0] = arg5;
      obj = outer1_5(AnimatedTracking);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._value = arg0;
      tmp2Result._parent = arg1;
      tmp2Result._animationClass = arg2;
      tmp2Result._animationConfig = arg3;
      obj3 = AnimatedTracking(outer1_1[6]);
      tmp2Result._useNativeDriver = obj3.shouldUseNativeDriver(arg3);
      tmp2Result._callback = arg4;
      __attachResult = tmp2Result.__attach();
      return tmp2Result;
    }
  }
  callback2(AnimatedTracking, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      this.__isNative = true;
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      outer1_9(AnimatedTracking, "__makeNative", this, 3)(items);
      const _value = this._value;
      _value.__makeNative(arg0);
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "__getValue",
    value: function __getValue() {
      const _parent = this._parent;
      return _parent.__getValue();
    }
  };
  items[1] = obj;
  obj = {
    key: "__attach",
    value: function __attach() {
      const self = this;
      const _parent = this._parent;
      _parent.__addChild(this);
      if (this._useNativeDriver) {
        self.__makeNative(self._animationConfig.platformConfig);
      }
      outer1_9(AnimatedTracking, "__attach", self, 3)([]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      outer1_9(AnimatedTracking, "__detach", this, 3)([]);
    }
  };
  items[4] = {
    key: "update",
    value: function update() {
      let _animationClass;
      let _value;
      ({ _value, _animationClass } = this);
      const toValue = this._animationConfig.toValue;
      _animationClass = new _animationClass(Object.assign({}, this._animationConfig, { toValue: toValue.__getValue() }));
      _value.animate(_animationClass, this._callback);
    }
  };
  items[5] = {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      const _animationClass = new this._animationClass(Object.assign({}, this._animationConfig, { toValue: undefined }));
      const obj = { type: "tracking" };
      const result = _animationClass.__getNativeAnimationConfig();
      obj.animationId = AnimatedTracking(outer1_1[6]).generateNewAnimationId();
      obj.animationConfig = result;
      const _parent = this._parent;
      obj.toValue = _parent.__getNativeTag();
      const _value = this._value;
      obj.value = _value.__getNativeTag();
      obj.debugID = this.__getDebugID();
      return obj;
    }
  };
  return callback(AnimatedTracking, items);
})(require("_assertNativeAnimatedModule"));
