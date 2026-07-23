// Module ID: 10807
// Function ID: 83899
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 15, 17, 18, 31, 27, 33, 3958]

// Module 10807 (_isNativeReflectConstruct)
import _inherits from "_inherits";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import closure_7 from "_inherits";
import { Linking } from "get ActivityIndicator";
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
const re10 = /.*?:\/\//g;

export default ((Component) => {
  class DeepLinking {
    constructor() {
      self = this;
      tmp = outer1_3(this, DeepLinking);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_6(DeepLinking);
      tmp3 = outer1_5;
      if (outer1_11()) {
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
      tmp3Result.handleChange = (url) => {
        tmp3Result.push(url.url);
      };
      return tmp3Result;
    }
  }
  callback3(DeepLinking, Component);
  let obj = {
    key: "push",
    value: function push(str) {
      const history = this.history;
      history.push(str.replace(outer1_10, ""));
    }
  };
  let items = [obj, , , ];
  obj = { key: "componentDidMount" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function componentDidMount() {
    return callback(...arguments);
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const removed = outer1_8.removeEventListener("url", this.handleChange);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      return outer1_9(callback(DeepLinking[9]).__HistoryContext.Consumer, {
        children(history) {
          self.history = history;
          return self.props.children || null;
        }
      });
    }
  };
  return callback2(DeepLinking, items);
})(require("result").Component);
