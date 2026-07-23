// Module ID: 409
// Function ID: 5812
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 410]

// Module 409 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
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
let closure_3 = ["tintColor", "titleColor", "title"];

export default ((Component) => {
  class RefreshControl {
    constructor() {
      self = this;
      tmp = outer1_5(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_8(apply);
      tmp3 = outer1_7;
      if (outer1_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, combined, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result._lastNativeRefreshing = false;
      tmp3Result._onRefresh = () => {
        tmp3Result._lastNativeRefreshing = true;
        if (tmp3Result.props.onRefresh) {
          const props = tmp3Result.props;
          props.onRefresh();
        }
        tmp3Result.forceUpdate();
      };
      tmp3Result._setNativeRef = (_nativeRef) => {
        closure_0._nativeRef = _nativeRef;
      };
      return tmp3Result;
    }
  }
  callback2(RefreshControl, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._lastNativeRefreshing = this.props.refreshing;
    }
  };
  let items = [obj, , ];
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(refreshing) {
      const self = this;
      if (this.props.refreshing !== refreshing.refreshing) {
        self._lastNativeRefreshing = self.props.refreshing;
      } else {
        if (tmp) {
          const Commands = RefreshControl(outer1_2[8]).Commands;
          Commands.setNativeRefreshing(self._nativeRef, self.props.refreshing);
          self._lastNativeRefreshing = self.props.refreshing;
        }
        tmp = self.props.refreshing !== self._lastNativeRefreshing && self._nativeRef;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let tintColor;
      let title;
      let titleColor;
      const props = this.props;
      ({ tintColor, titleColor, title } = props);
      const obj = { ref: this._setNativeRef, onRefresh: this._onRefresh };
      const tmp = outer1_4(props, outer1_3);
      return outer1_10(outer1_1(outer1_2[8]), Object.assign({}, tmp, obj));
    }
  };
  items[2] = obj;
  return callback(RefreshControl, items);
})(require("result").Component);
