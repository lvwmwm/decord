// Module ID: 357
// Function ID: 5288
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 357 (_isNativeReflectConstruct)
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
  const tmpResult = closure_4(closure_3(prototype), arg1, arg2);
  let closure_1 = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const connectAnimatedNodes = importDefault(dependencyMap[6]).API.connectAnimatedNodes;
const disconnectAnimatedNodes = importDefault(dependencyMap[6]).API.disconnectAnimatedNodes;

export default (arg0) => {
  class AnimatedWithChildren {
    constructor() {
      self = this;
      tmp = AnimatedWithChildren(this, AnimatedWithChildren);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_3(AnimatedWithChildren);
      tmp3 = closure_2;
      if (closure_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, combined, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result._children = [];
      return tmp3Result;
    }
  }
  let closure_0 = AnimatedWithChildren;
  callback2(AnimatedWithChildren, arg0);
  let obj = {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      const self = this;
      if (!this.__isNative) {
        self.__isNative = true;
        const _children = self._children;
        if (_children.length > 0) {
          for (let num2 = 0; num2 < length; num2 = num2 + 1) {
            let obj = _children[num2];
            let __makeNativeResult = obj.__makeNative(arg0);
            let tmp2 = callback2;
            let __getNativeTagResult = self.__getNativeTag();
            let tmp4 = callback2(__getNativeTagResult, obj.__getNativeTag());
          }
        }
      }
      const items = [arg0];
      callback5(AnimatedWithChildren, "__makeNative", self, 3)(items);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "__addChild",
    value: function __addChild(__makeNative) {
      const self = this;
      if (0 === this._children.length) {
        self.__attach();
      }
      const _children = self._children;
      _children.push(__makeNative);
      if (self.__isNative) {
        __makeNative.__makeNative(self.__getPlatformConfig());
        callback2(self.__getNativeTag(), __makeNative.__getNativeTag());
        const __getNativeTagResult = self.__getNativeTag();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "__removeChild",
    value: function __removeChild(__isNative) {
      const self = this;
      const _children = this._children;
      const index = _children.indexOf(__isNative);
      if (-1 !== index) {
        if (tmp4) {
          callback3(self.__getNativeTag(), __isNative.__getNativeTag());
          const __getNativeTagResult = self.__getNativeTag();
        }
        const _children1 = self._children;
        _children1.splice(index, 1);
        if (0 === self._children.length) {
          self.__detach();
        }
        const tmp4 = self.__isNative && __isNative.__isNative;
      } else {
        const _console = console;
        console.warn("Trying to remove a child that doesn't exist");
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "__getChildren",
    value: function __getChildren() {
      return this._children;
    }
  };
  items[4] = {
    key: "__callListeners",
    value: function __callListeners(arg0) {
      const items = [arg0];
      callback5(AnimatedWithChildren, "__callListeners", this, 3)(items);
      if (!this.__isNative) {
        const _children = this._children;
        for (let num = 0; num < length; num = num + 1) {
          let obj = _children[num];
          if (obj.__getValue) {
            let __callListenersResult = obj.__callListeners(obj.__getValue());
          }
        }
        const length = _children.length;
      }
    }
  };
  return callback(AnimatedWithChildren, items);
}(importDefault(dependencyMap[7]));
