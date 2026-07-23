// Module ID: 367
// Function ID: 5436
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 347, 44, 357]

// Module 367 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import invariant from "invariant";
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
let c8 = 1;

export default ((arg0) => {
  class AnimatedValueXY {
    constructor(arg0, arg1) {
      point = arg0;
      self = this;
      tmp = outer1_2(this, AnimatedValueXY);
      items = [];
      items[0] = arg1;
      obj = outer1_5(AnimatedValueXY);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      if (!point) {
        point = { x: 0, y: 0 };
      }
      if ("number" === typeof point.x) {
        if ("number" === typeof point.y) {
          tmp11 = AnimatedValueXY;
          tmp12 = outer1_1;
          num = 6;
          tmp13 = AnimatedValueXY(outer1_1[6]);
          prototype = tmp13.prototype;
          tmp14 = new.target;
          tmp15 = new.target;
          tmp13 = new tmp13(point.x);
          tmp17 = tmp13;
          tmp2Result.x = tmp13;
          tmp18 = AnimatedValueXY(outer1_1[6]);
          prototype2 = tmp18.prototype;
          tmp19 = new.target;
          tmp20 = new.target;
          tmp18 = new tmp18(point.y);
          tmp22 = tmp18;
          tmp2Result.y = tmp18;
        }
        tmp2Result._listeners = {};
        useNativeDriver = arg1;
        if (arg1) {
          useNativeDriver = arg1.useNativeDriver;
        }
        if (useNativeDriver) {
          __makeNativeResult = tmp2Result.__makeNative();
        }
        return tmp2Result;
      }
      tmp6 = AnimatedValueXY(outer1_1[7]);
      tmp7 = point.x instanceof AnimatedValueXY(outer1_1[6]);
      if (tmp7) {
        tmp8 = AnimatedValueXY;
        tmp9 = outer1_1;
        tmp7 = point.y instanceof AnimatedValueXY(outer1_1[6]);
      }
      tmp6Result = tmp6(tmp7, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.");
      ({ x: obj2.x, y: obj2.y } = point);
      return;
    }
  }
  callback2(AnimatedValueXY, arg0);
  let obj = {
    key: "setValue",
    value: function setValue(arg0) {
      const x = this.x;
      x.setValue(arg0.x);
      const y = this.y;
      y.setValue(arg0.y);
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "setOffset",
    value: function setOffset(arg0) {
      const x = this.x;
      x.setOffset(arg0.x);
      const y = this.y;
      y.setOffset(arg0.y);
    }
  };
  items[1] = obj;
  obj = {
    key: "flattenOffset",
    value: function flattenOffset() {
      const x = this.x;
      x.flattenOffset();
      const y = this.y;
      y.flattenOffset();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "extractOffset",
    value: function extractOffset() {
      const x = this.x;
      x.extractOffset();
      const y = this.y;
      y.extractOffset();
    }
  };
  items[4] = {
    key: "__getValue",
    value: function __getValue() {
      let x;
      let y;
      ({ x, y } = this);
      return { x: x.__getValue(), y: y.__getValue() };
    }
  };
  items[5] = {
    key: "resetAnimation",
    value: function resetAnimation(arg0) {
      const self = this;
      const x = this.x;
      x.resetAnimation();
      const y = this.y;
      y.resetAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[6] = {
    key: "stopAnimation",
    value: function stopAnimation(arg0) {
      const self = this;
      const x = this.x;
      x.stopAnimation();
      const y = this.y;
      y.stopAnimation();
      if (arg0) {
        arg0(self.__getValue());
      }
    }
  };
  items[7] = {
    key: "addListener",
    value: function addListener(arg0) {
      let _listeners;
      let x;
      let y;
      let closure_0 = arg0;
      const self = this;
      const outer1_8 = tmp + 1;
      const StringResult = String(+outer1_8);
      function jointCallback(arg0) {
        callback(self.__getValue());
      }
      ({ x, _listeners, y } = this);
      _listeners[StringResult] = { x: x.addListener(jointCallback), y: y.addListener(jointCallback) };
      return StringResult;
    }
  };
  items[8] = {
    key: "removeListener",
    value: function removeListener(arg0) {
      const x = this.x;
      x.removeListener(this._listeners[arg0].x);
      const y = this.y;
      y.removeListener(this._listeners[arg0].y);
      delete tmp[tmp2];
    }
  };
  items[9] = {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      const x = this.x;
      x.removeAllListeners();
      const y = this.y;
      y.removeAllListeners();
      this._listeners = {};
    }
  };
  items[10] = {
    key: "getLayout",
    value: function getLayout() {
      return { left: this.x, top: this.y };
    }
  };
  items[11] = {
    key: "getTranslateTransform",
    value: function getTranslateTransform() {
      const items = [{ translateX: this.x }, { translateY: this.y }];
      return items;
    }
  };
  items[12] = {
    key: "__attach",
    value: function __attach() {
      const x = this.x;
      x.__addChild(this);
      const y = this.y;
      y.__addChild(this);
      outer1_10(AnimatedValueXY, "__attach", this, 3)([]);
    }
  };
  items[13] = {
    key: "__detach",
    value: function __detach() {
      const x = this.x;
      x.__removeChild(this);
      const y = this.y;
      y.__removeChild(this);
      outer1_10(AnimatedValueXY, "__detach", this, 3)([]);
    }
  };
  items[14] = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const x = this.x;
      x.__makeNative(arg0);
      const y = this.y;
      y.__makeNative(arg0);
      const items = [arg0];
      outer1_10(AnimatedValueXY, "__makeNative", this, 3)(items);
    }
  };
  return callback(AnimatedValueXY, items);
})(require("_isNativeReflectConstruct"));
