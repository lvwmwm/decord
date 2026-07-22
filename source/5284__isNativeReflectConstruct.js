// Module ID: 5284
// Function ID: 45620
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5284 (_isNativeReflectConstruct)
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
let closure_10 = importAll(dependencyMap[6]);
({ StyleSheet: closure_11, View: closure_12 } = arg1(dependencyMap[7]));
const jsx = arg1(dependencyMap[8]).jsx;
const tmp3 = (Component) => {
  class TouchableHighlight {
    constructor(arg0) {
      self = this;
      tmp = closure_5(this, TouchableHighlight);
      items = [];
      items[0] = Component;
      obj = closure_8(TouchableHighlight);
      tmp2 = closure_7;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      TouchableHighlight = tmp2Result;
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
        tmp2Result.setState({ marginVertical: "o", borderRadius: "o" });
        if (null != tmp2Result.props.onHideUnderlay) {
          const props = tmp2Result.props;
          props.onHideUnderlay();
        }
      };
      tmp2Result.onStateChange = (arg0, arg1) => {
        if (arg1 === tmp2Result(closure_2[9]).TOUCHABLE_STATE.BEGAN) {
          tmp2Result.showUnderlay();
        } else {
          let tmp3 = arg1 !== tmp2Result(closure_2[9]).TOUCHABLE_STATE.UNDETERMINED;
          if (tmp3) {
            tmp3 = arg1 !== tmp2Result(closure_2[9]).TOUCHABLE_STATE.MOVED_OUTSIDE;
          }
          if (!tmp3) {
            tmp2Result.hideUnderlay();
          }
        }
      };
      tmp2Result.state = { marginVertical: "o", borderRadius: "o" };
      return tmp2Result;
    }
  }
  const arg1 = TouchableHighlight;
  callback2(TouchableHighlight, Component);
  let obj = {
    key: "renderChildren",
    value: function renderChildren() {
      const self = this;
      if (this.props.children) {
        const Children = React.Children;
        const onlyResult = Children.only(self.props.children);
        const obj = { style: closure_11.compose(onlyResult.props.style, self.state.extraChildStyle) };
        return React.cloneElement(onlyResult, obj);
      } else {
        return callback5(closure_12, {});
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
      const obj = { style: items, onStateChange: self.onStateChange };
      const items = [style, self.state.extraUnderlayStyle];
      const tmp = callback2(props, closure_3);
      obj.children = self.renderChildren();
      return callback5(callback(closure_2[9]), Object.assign({}, tmp, obj));
    }
  };
  items[1] = obj;
  return callback(TouchableHighlight, items);
}(arg1(dependencyMap[6]).Component);
tmp3.defaultProps = Object.assign({}, importDefault(dependencyMap[9]).defaultProps, { marginRight: true, borderRadius: true, height: true });

export default tmp3;
