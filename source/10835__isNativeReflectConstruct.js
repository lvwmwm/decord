// Module ID: 10835
// Function ID: 84080
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 3958]

// Module 10835 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
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
require("get ActivityIndicator").BackHandler;

export default ((Component) => {
  class BackButton {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_5(apply);
      tmp3 = outer1_4;
      if (outer1_9()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, combined, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.handleBack = () => {
        let flag = 0 !== tmp3Result.history.index;
        if (flag) {
          const history = tmp3Result.history;
          history.goBack();
          flag = true;
        }
        return flag;
      };
      return tmp3Result;
    }
  }
  callback2(BackButton, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const listener = outer1_7.addEventListener("hardwareBackPress", this.handleBack);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = outer1_7.removeEventListener("hardwareBackPress", this.handleBack);
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      return outer1_8(BackButton(outer1_1[8]).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  };
  items[2] = obj;
  return callback(BackButton, items);
})(require("result").Component);
