// Module ID: 4547
// Function ID: 39827
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4547 (_isNativeReflectConstruct)
let Component;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
({ createRef: closure_10, Component } = arg1(dependencyMap[6]));
importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[6]);
({ processColor: closure_11, StyleSheet: closure_12, View: closure_13 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[8]));
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
const tmp6 = (Component) => {
  class LinearGradient {
    constructor() {
      self = this;
      tmp = closure_5(this, LinearGradient);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(LinearGradient);
      tmp4 = closure_7;
      if (closure_17()) {
        items1 = combined;
        if (!combined) {
          items1 = [];
        }
        tmp6 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp4Result = tmp4(self, constructResult);
      tmp4Result.gradientRef = closure_10();
      return tmp4Result;
    }
  }
  const global = LinearGradient;
  callback2(LinearGradient, Component);
  let obj = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const current = this.gradientRef.current;
      current.setNativeProps(arg0);
    }
  };
  const items = [obj, ];
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
      const tmp5 = closure_12.flatten(style) || {};
      const tmp7 = function validNumber(arg0) {
        return (arg0) => {
          let tmp = arg0;
          if ("number" !== typeof arg0) {
            tmp = arg0;
          }
          return tmp;
        };
      }(tmp5.borderRadius || 0);
      const items = [tmp7(tmp5.borderTopLeftRadius), tmp7(tmp5.borderTopLeftRadius), tmp7(tmp5.borderTopRightRadius), tmp7(tmp5.borderTopRightRadius), tmp7(tmp5.borderBottomRightRadius), tmp7(tmp5.borderBottomRightRadius), tmp7(tmp5.borderBottomLeftRadius), tmp7(tmp5.borderBottomLeftRadius)];
      let obj = { ref: this.gradientRef };
      obj = { style };
      obj = { style: { <string:2410165992>: "isArray", <string:1391293622>: "skuId", <string:3282027431>: "T", <string:3696331617>: "r", <string:1368088986>: "isArray" } };
      let mapped = colors;
      const tmp = callback2(props, closure_3);
      const tmp10 = closure_14;
      const tmp6 = tmp5.borderRadius || 0;
      const tmp8 = closure_15;
      const tmp9 = closure_13;
      if (!LinearGradient.RN$Bridgeless) {
        mapped = colors.map(closure_11);
      }
      obj.colors = mapped;
      obj.startPoint = callback6("start", start);
      obj.endPoint = callback6("end", end);
      let substr = null;
      if (locations) {
        substr = locations.slice(0, colors.length);
      }
      obj.locations = substr;
      obj.useAngle = useAngle;
      obj.angleCenter = callback6("angleCenter", angleCenter);
      obj.angle = angle;
      obj.borderRadii = items;
      const items1 = [tmp10(callback(closure_2[9]), obj), children];
      obj.children = items1;
      return tmp8(tmp9, Object.assign(obj, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(LinearGradient, items);
}(Component);
tmp6.defaultProps = { start: { "Null": "message", "Null": "PRIMARY_530" }, end: { "Null": 2, "Null": 9 } };

export default tmp6;
