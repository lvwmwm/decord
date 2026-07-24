// Module ID: 4555
// Function ID: 39924
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 4556]

// Module 4555 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import closure_5 from "result";
import getActivityIndicator from "get ActivityIndicator";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Component;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["children", "colors", "end", "locations", "useAngle", "angleCenter", "angle", "start", "style"];
({ createRef: closure_10, Component } = result);
({ processColor: closure_11, StyleSheet: closure_12, View: closure_13 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
function convertPoint(arg0, arg1) {
  let tmp = arg1;
  if (Array.isArray(arg1)) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.warn("LinearGradient '" + arg0 + "' property should be an object with fields 'x' and 'y', Array type is deprecated.");
    const obj = { x: arg1[0], y: arg1[1] };
    tmp = obj;
  }
  return tmp;
}
let tmp6 = ((Component) => {
  class LinearGradient {
    constructor() {
      self = this;
      tmp = outer1_5(this, LinearGradient);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_8(LinearGradient);
      tmp4 = outer1_7;
      if (outer1_17()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      tmp4Result.gradientRef = outer1_10();
      return tmp4Result;
    }
  }
  callback2(LinearGradient, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const current = this.gradientRef.current;
      current.setNativeProps(arg0);
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      let angle;
      let angleCenter;
      let children;
      let colors;
      let end;
      let locations;
      let start;
      let style;
      let useAngle;
      const props = this.props;
      ({ colors, locations, style } = props);
      ({ children, end, useAngle, angleCenter, angle, start } = props);
      let tmp2 = colors;
      if (colors) {
        tmp2 = locations;
      }
      if (tmp2) {
        tmp2 = colors.length !== locations.length;
      }
      if (tmp2) {
        const _console = console;
        console.warn("LinearGradient colors and locations props should be arrays of the same length");
      }
      const tmp5 = outer1_12.flatten(style) || {};
      const tmp7 = (function validNumber(arg0) {
        let closure_0 = arg0;
        return (arg0) => {
          let tmp = arg0;
          if ("number" !== typeof arg0) {
            tmp = closure_0;
          }
          return tmp;
        };
      })(tmp5.borderRadius || 0);
      const items = [tmp7(tmp5.borderTopLeftRadius), tmp7(tmp5.borderTopLeftRadius), tmp7(tmp5.borderTopRightRadius), tmp7(tmp5.borderTopRightRadius), tmp7(tmp5.borderBottomRightRadius), tmp7(tmp5.borderBottomRightRadius), tmp7(tmp5.borderBottomLeftRadius), tmp7(tmp5.borderBottomLeftRadius)];
      let obj = { ref: this.gradientRef };
      obj = { style };
      obj = { style: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 } };
      let mapped = colors;
      let tmp = outer1_4(props, outer1_3);
      const tmp10 = outer1_14;
      const tmp6 = tmp5.borderRadius || 0;
      const tmp8 = outer1_15;
      const tmp9 = outer1_13;
      if (!LinearGradient.RN$Bridgeless) {
        mapped = colors.map(outer1_11);
      }
      obj.colors = mapped;
      obj.startPoint = outer1_16("start", start);
      obj.endPoint = outer1_16("end", end);
      let substr = null;
      if (locations) {
        substr = locations.slice(0, colors.length);
      }
      obj.locations = substr;
      obj.useAngle = useAngle;
      obj.angleCenter = outer1_16("angleCenter", angleCenter);
      obj.angle = angle;
      obj.borderRadii = items;
      const items1 = [tmp10(outer1_1(outer1_2[9]), obj), children];
      obj.children = items1;
      return tmp8(tmp9, Object.assign(obj, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(LinearGradient, items);
})(Component);
tmp6.defaultProps = { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } };

export default tmp6;
