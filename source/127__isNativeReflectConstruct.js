// Module ID: 127
// Function ID: 2115
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 127 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class DOMRect {
    constructor() {
      self = this;
      tmp = DOMRect(this, DOMRect);
      obj = closure_3(DOMRect);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = DOMRect;
  callback2(DOMRect, arg0);
  let obj = {
    key: "x",
    get() {
      return this.__getInternalX();
    },
    set(arg0) {
      this.__setInternalX(arg0);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "y",
    get() {
      return this.__getInternalY();
    },
    set(DOMRectReadOnly) {
      this.__setInternalY(DOMRectReadOnly);
    }
  };
  items[1] = obj;
  obj = {
    key: "width",
    get() {
      return this.__getInternalWidth();
    },
    set(arg0) {
      this.__setInternalWidth(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "height",
    get() {
      return this.__getInternalHeight();
    },
    set(arg0) {
      this.__setInternalHeight(arg0);
    }
  };
  const items1 = [
    {
      key: "fromRect",
      value: function fromRect(arg0) {
        let tmp = DOMRect;
        if (arg0) {
          const prototype2 = tmp.prototype;
          tmp = new tmp(arg0.x, arg0.y, arg0.width, arg0.height);
        } else {
          const prototype = tmp.prototype;
          tmp = new tmp();
        }
        return tmp;
      }
    }
  ];
  return callback(DOMRect, items, items1);
}(importDefault(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {
  clone(arg0) {
    return new tmp2(arg0.x, arg0.y, arg0.width, arg0.height);
  }
};
obj.setPlatformObject(tmp2, obj);

export default tmp2;
