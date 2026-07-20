// Module ID: 369
// Function ID: 5484
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 369 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  const importDefault = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_6(closure_5(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);

export default (arg0) => {
  class AnimatedTracking {
    constructor(arg0, arg1, arg2, arg3, arg4, arg5) {
      self = this;
      tmp = closure_2(this, AnimatedTracking);
      items = [];
      items[0] = arg5;
      obj = closure_5(AnimatedTracking);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._value = arg0;
      tmp2Result._parent = arg1;
      tmp2Result._animationClass = arg2;
      tmp2Result._animationConfig = arg3;
      obj3 = AnimatedTracking(closure_1[6]);
      tmp2Result._useNativeDriver = obj3.shouldUseNativeDriver(arg3);
      tmp2Result._callback = arg4;
      __attachResult = tmp2Result.__attach();
      return tmp2Result;
    }
  }
  const importDefault = AnimatedTracking;
  callback2(AnimatedTracking, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      this.__isNative = true;
      const _parent = this._parent;
      _parent.__makeNative(arg0);
      const items = [arg0];
      callback4(AnimatedTracking, "__makeNative", this, 3)(items);
      const _value = this._value;
      _value.__makeNative(arg0);
    }
  };
  const items = [obj, , , , , ];
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
      callback4(AnimatedTracking, "__attach", self, 3)([]);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__detach",
    value: function __detach() {
      const _parent = this._parent;
      _parent.__removeChild(this);
      callback4(AnimatedTracking, "__detach", this, 3)([]);
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
      obj.animationId = AnimatedTracking(closure_1[6]).generateNewAnimationId();
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
}(importDefault(dependencyMap[7]));
