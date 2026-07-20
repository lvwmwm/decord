// Module ID: 5061
// Function ID: 43192
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5061 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
({ Animated: closure_10, Easing: closure_11, StyleSheet: closure_12, View: closure_13 } = arg1(dependencyMap[6]));
importAll(dependencyMap[7]);
const jsx = arg1(dependencyMap[8]).jsx;
const tmp4 = (Component) => {
  class TouchableOpacity {
    constructor() {
      self = this;
      tmp = closure_5(this, TouchableOpacity);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(TouchableOpacity);
      tmp4 = closure_7;
      if (closure_15()) {
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
      TouchableOpacity = tmp4Result;
      tmp4Result.getChildStyleOpacityWithDefault = () => {
        const tmp = closure_12.flatten(tmp4Result.props.style) || {};
        let num = 1;
        if (null != tmp.opacity) {
          const opacity = tmp.opacity;
          num = opacity.valueOf();
        }
        return num;
      };
      value = new closure_10.Value(tmp4Result.getChildStyleOpacityWithDefault());
      tmp4Result.opacity = value;
      tmp4Result.setOpacityTo = (toValue, duration) => {
        const useNativeAnimations = tmp4Result.props.useNativeAnimations;
        const obj = { toValue, duration, easing: closure_11.inOut(closure_11.quad), useNativeDriver: tmp2 };
        const tmp2 = null == useNativeAnimations || useNativeAnimations;
        closure_10.timing(tmp4Result.opacity, { toValue, duration, easing: closure_11.inOut(closure_11.quad), useNativeDriver: tmp2 }).start();
      };
      tmp4Result.onStateChange = (arg0, arg1) => {
        if (arg1 === tmp4Result(closure_2[9]).TOUCHABLE_STATE.BEGAN) {
          tmp4Result.setOpacityTo(tmp4Result.props.activeOpacity, 0);
        } else {
          let tmp3 = arg1 !== tmp4Result(closure_2[9]).TOUCHABLE_STATE.UNDETERMINED;
          if (tmp3) {
            tmp3 = arg1 !== tmp4Result(closure_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
          }
          if (!tmp3) {
            tmp4Result.setOpacityTo(tmp4Result.getChildStyleOpacityWithDefault(), 150);
          }
        }
      };
      return tmp4Result;
    }
  }
  const arg1 = TouchableOpacity;
  callback2(TouchableOpacity, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const self = this;
        const props = this.props;
        let style = props.style;
        if (undefined === style) {
          style = {};
        }
        const obj = { style: items, onStateChange: self.onStateChange };
        const items = [style, { opacity: self.opacity }];
        const tmp = callback2(props, closure_3);
        const tmp2 = callback5;
        if (self.props.children) {
          let children = self.props.children;
        } else {
          children = callback5(closure_13, {});
        }
        obj.children = children;
        return tmp2(callback(closure_2[9]), Object.assign({}, tmp, obj));
      }
    }
  ];
  return callback(TouchableOpacity, items);
}(arg1(dependencyMap[7]).Component);
tmp4.defaultProps = Object.assign({}, importDefault(dependencyMap[9]).defaultProps, { activeOpacity: 0.2 });

export default tmp4;
