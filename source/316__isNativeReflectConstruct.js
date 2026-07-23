// Module ID: 316
// Function ID: 4814
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 31, 44]

// Module 316 (_isNativeReflectConstruct)
import result from "result";
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
  const tmpResult = _get(_getPrototypeOf(prototype), "setState", arg2);
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

export default ((PureComponent) => {
  class StateSafePureComponent {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, StateSafePureComponent);
      items = [];
      items[0] = PureComponent;
      obj = outer1_5(StateSafePureComponent);
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
      tmp2Result._inAsyncStateUpdate = false;
      result = tmp2Result._installSetStateHooks();
      return tmp2Result;
    }
  }
  callback2(StateSafePureComponent, PureComponent);
  let obj = {
    key: "setState",
    value: function setState(arg0, arg1) {
      let self = this;
      let closure_0 = arg0;
      self = this;
      if ("function" === typeof arg0) {
        const items = [
          (arg0, arg1) => {
              self._inAsyncStateUpdate = true;
              self._inAsyncStateUpdate = false;
              return callback(arg0, arg1);
            },
          arg1
        ];
        outer1_9(closure_0, "setState", self, 3)(items);
      } else {
        const items1 = [arg0, arg1];
        outer1_9(closure_0, "setState", self, 3)(items1);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "_installSetStateHooks",
    value: function _installSetStateHooks() {
      let closure_1;
      let result;
      const self = this;
      ({ props: closure_1, state: result } = this);
      let obj = {
        get() {
          StateSafePureComponent(outer2_1[7])(!self._inAsyncStateUpdate, "\"this.props\" should not be accessed during state updates");
          return closure_1;
        },
        set(arg0) {
          let closure_1 = arg0;
        }
      };
      Object.defineProperty(this, "props", obj);
      obj = {
        get() {
          StateSafePureComponent(outer2_1[7])(!self._inAsyncStateUpdate, "\"this.state\" should not be acceessed during state updates");
          return result;
        },
        set(arg0) {
          let result = arg0;
        }
      };
      Object.defineProperty(this, "state", obj);
    }
  };
  items[1] = obj;
  return callback(StateSafePureComponent, items);
})(require("result").PureComponent);
