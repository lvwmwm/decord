// Module ID: 13537
// Function ID: 104142
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 13538, 13541, 4482]
// Exports: default

// Module 13537 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import ReanimatedNativeStackScreen from "ReanimatedNativeStackScreen";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_9 = ((Component) => {
  class ReanimatedScreenWrapper {
    constructor() {
      self = this;
      tmp = outer1_3(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_6(apply);
      tmp3 = outer1_5;
      if (outer1_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, combined, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.ref = null;
      tmp3Result.setRef = (ref) => {
        tmp3Result.ref = ref;
        if (null != tmp3Result.props.onComponentRef) {
          const props = tmp3Result.props;
          props.onComponentRef(ref);
        }
      };
      return tmp3Result;
    }
  }
  callback2(ReanimatedScreenWrapper, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (null != this.ref) {
        ref.setNativeProps(arg0);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      if (this.props.isNativeStack) {
        let tmpResult = tmp(tmp2[7]);
      } else {
        tmpResult = tmp(tmp2[8]);
      }
      return outer1_8(tmpResult, Object.assign({}, self.props, { ref: self.setRef }));
    }
  };
  items[1] = obj;
  return callback(ReanimatedScreenWrapper, items);
})(require("result").Component);

export default function ReanimatedScreenProvider(children) {
  return jsx(require(4482) /* Animated */.ScreenContext.Provider, { value: closure_9, children: children.children });
};
