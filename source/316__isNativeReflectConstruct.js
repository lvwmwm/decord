// Module ID: 316
// Function ID: 4814
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 316 (_isNativeReflectConstruct)
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
  const tmpResult = closure_6(closure_5(prototype), "setState", arg2);
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

export default (PureComponent) => {
  class StateSafePureComponent {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, StateSafePureComponent);
      items = [];
      items[0] = PureComponent;
      obj = closure_5(StateSafePureComponent);
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
      tmp2Result._inAsyncStateUpdate = false;
      result = tmp2Result._installSetStateHooks();
      return tmp2Result;
    }
  }
  const importDefault = StateSafePureComponent;
  callback2(StateSafePureComponent, PureComponent);
  let obj = {
    key: "setState",
    value: function setState(arg0, arg1) {
      let self = this;
      const StateSafePureComponent = arg0;
      self = this;
      if ("function" === typeof arg0) {
        const items = [
          (arg0, arg1) => {
              self._inAsyncStateUpdate = true;
              self._inAsyncStateUpdate = false;
              return arg0(arg0, arg1);
            },
          arg1
        ];
        callback4(StateSafePureComponent, "setState", self, 3)(items);
      } else {
        const items1 = [arg0, arg1];
        callback4(StateSafePureComponent, "setState", self, 3)(items1);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      const StateSafePureComponent = this;
      ({ props: closure_1, state: closure_2 } = this);
      let obj = {
        get() {
          self(closure_1[7])(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return closure_1;
        },
        set(arg0) {

        }
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          self(closure_1[7])(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return closure_2;
        },
        set(arg0) {

        }
      };
      Object.defineProperty(this, "state", obj);
    }
  };
  items[1] = obj;
  return callback(StateSafePureComponent, items);
}(importAll(dependencyMap[6]).PureComponent);
