// Module ID: 5287
// Function ID: 45644
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 5284]

// Module 5287 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_10 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["style"];
({ StyleSheet: closure_11, View: closure_12 } = get_ActivityIndicator);
let tmp3 = ((Component) => {
  class TouchableHighlight {
    constructor(arg0) {
      self = this;
      tmp = outer1_5(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_8(apply);
      tmp2 = outer1_7;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.showUnderlay = () => {
        if (tmp2Result.hasPressHandler()) {
          let obj = {};
          obj = { opacity: tmp2Result.props.activeOpacity };
          obj.extraChildStyle = obj;
          obj = { backgroundColor: tmp2Result.props.underlayColor };
          obj.extraUnderlayStyle = obj;
          tmp2Result.setState(obj);
          if (null != tmp2Result.props.onShowUnderlay) {
            const props = tmp2Result.props;
            props.onShowUnderlay();
          }
        }
      };
      tmp2Result.hasPressHandler = () => {
        let onLongPress = tmp2Result.props.onPress;
        if (!onLongPress) {
          onLongPress = tmp2Result.props.onPressIn;
        }
        if (!onLongPress) {
          onLongPress = tmp2Result.props.onPressOut;
        }
        if (!onLongPress) {
          onLongPress = tmp2Result.props.onLongPress;
        }
        return onLongPress;
      };
      tmp2Result.hideUnderlay = () => {
        tmp2Result.setState({ extraChildStyle: null, extraUnderlayStyle: null });
        if (null != tmp2Result.props.onHideUnderlay) {
          const props = tmp2Result.props;
          props.onHideUnderlay();
        }
      };
      tmp2Result.onStateChange = (arg0, arg1) => {
        if (arg1 === TouchableHighlight(outer2_2[9]).TOUCHABLE_STATE.BEGAN) {
          tmp2Result.showUnderlay();
        } else {
          let tmp3 = arg1 !== TouchableHighlight(outer2_2[9]).TOUCHABLE_STATE.UNDETERMINED;
          if (tmp3) {
            tmp3 = arg1 !== TouchableHighlight(outer2_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
          }
          if (!tmp3) {
            tmp2Result.hideUnderlay();
          }
        }
      };
      tmp2Result.state = { extraChildStyle: null, extraUnderlayStyle: null };
      return tmp2Result;
    }
  }
  callback2(TouchableHighlight, Component);
  let obj = {
    key: "renderChildren",
    value: function renderChildren() {
      const self = this;
      if (this.props.children) {
        const Children = outer1_10.Children;
        const onlyResult = Children.only(self.props.children);
        const obj = { style: outer1_11.compose(onlyResult.props.style, self.state.extraChildStyle) };
        return outer1_10.cloneElement(onlyResult, obj);
      } else {
        return outer1_13(outer1_12, {});
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const obj = { style: items, onStateChange: self.onStateChange };
      items = [style, self.state.extraUnderlayStyle];
      const tmp = outer1_4(props, outer1_3);
      obj.children = self.renderChildren();
      return outer1_13(outer1_1(outer1_2[9]), Object.assign({}, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(TouchableHighlight, items);
})(require("result").Component);
tmp3.defaultProps = Object.assign({}, require("_isNativeReflectConstruct").defaultProps, { activeOpacity: 0.85, delayPressOut: 100, underlayColor: "black" });

export default tmp3;
