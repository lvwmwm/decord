// Module ID: 10837
// Function ID: 84105
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 3958, 3955]

// Module 10837 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";
import importDefaultResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = ["component", "to", "replace"];
const tmp3 = ((Component) => {
  class Link {
    constructor() {
      self = this;
      tmp = outer1_4(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_7(apply);
      tmp3 = outer1_6;
      if (outer1_10()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, combined, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.handlePress = (defaultPrevented, str) => {
        if (tmp3Result.props.onPress) {
          const props = tmp3Result.props;
          props.onPress(defaultPrevented);
        }
        if (!defaultPrevented.defaultPrevented) {
          const to = str.to;
          if (tmp3Result.props.replace) {
            const replaced = str.replace(to);
          } else {
            str.push(to);
          }
        }
      };
      return tmp3Result;
    }
  }
  callback2(Link, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        let closure_1;
        let replace;
        let to;
        const self = this;
        const props = this.props;
        ({ component: closure_1, to, replace } = props);
        let closure_2 = outer1_3(props, outer1_2);
        return outer1_9(Link(outer1_1[9]).__HistoryContext.Consumer, {
          children(arg0) {
            let closure_0 = arg0;
            return outer2_9(closure_1, Object.assign({}, closure_2, {
              onPress(arg0) {
                return closure_0.handlePress(arg0, closure_0);
              }
            }));
          }
        });
      }
    }
  ];
  return callback(Link, items);
})(require("result").Component);
tmp3.defaultProps = { component: require("get ActivityIndicator").TouchableHighlight, replace: false };
let obj = { onPress: require("emptyFunction").func, component: require("emptyFunction").elementType, replace: require("emptyFunction").bool };
let items = [require("emptyFunction").string, require("emptyFunction").object];
obj.to = require("emptyFunction").oneOfType(items);
tmp3.propTypes = obj;

export default tmp3;
