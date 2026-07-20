// Module ID: 5058
// Function ID: 43156
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5058 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const Platform = arg1(dependencyMap[6]).Platform;
importAll(dependencyMap[7]);
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (Component) => {
  class TouchableNativeFeedback {
    constructor() {
      self = this;
      tmp = closure_4(this, TouchableNativeFeedback);
      obj = closure_7(TouchableNativeFeedback);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = TouchableNativeFeedback;
  callback2(TouchableNativeFeedback, Component);
  let obj = {
    key: "getExtraButtonProps",
    value: function getExtraButtonProps() {
      const obj = {};
      let rippleRadius = this.props.background;
      if (!rippleRadius) {
        obj.foreground = this.props.useForeground;
        return obj;
      } else {
        if ("RippleAndroid" === rippleRadius.type) {
          ({ borderless: obj.borderless, color: obj.rippleColor } = rippleRadius);
        } else if ("ThemeAttrAndroid" === rippleRadius.type) {
          obj.borderless = "selectableItemBackgroundBorderless" === rippleRadius.attribute;
        }
        rippleRadius = rippleRadius.rippleRadius;
        obj.rippleRadius = rippleRadius;
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let style = props.style;
      if (undefined === style) {
        style = {};
      }
      const obj = { style };
      const tmp = callback(props, closure_2);
      obj.extraButtonProps = self.getExtraButtonProps();
      return callback4(TouchableNativeFeedback(closure_1[9]), Object.assign({}, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(TouchableNativeFeedback, items);
}(arg1(dependencyMap[7]).Component);
tmp3.defaultProps = Object.assign({}, importDefault(dependencyMap[9]).defaultProps, { useForeground: true, extraButtonProps: { rippleColor: null } });
tmp3.SelectableBackground = (rippleRadius) => {
  const obj = { 9223372036854775807: 4, 9223372036854775807: 4, rippleRadius };
  return obj;
};
tmp3.SelectableBackgroundBorderless = (rippleRadius) => {
  const obj = { 9223372036854775807: "rgba(0, 0, 0, 0.75)", 9223372036854775807: "none", rippleRadius };
  return obj;
};
tmp3.Ripple = (color, borderless, rippleRadius) => ({ type: "RippleAndroid", color, borderless, rippleRadius });
tmp3.canUseNativeForeground = () => Platform.Version >= 23;

export default tmp3;
