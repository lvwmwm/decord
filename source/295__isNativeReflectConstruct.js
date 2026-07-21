// Module ID: 295
// Function ID: 4515
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 295 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createStackEntry(animated) {
  animated = animated.animated;
  const showHideTransition = animated.showHideTransition;
  let str = "fade";
  if (null != showHideTransition) {
    str = showHideTransition;
  }
  let obj = {};
  let tmp2 = null;
  if (null != animated.backgroundColor) {
    obj = { value: animated.backgroundColor, animated: tmp };
    tmp2 = obj;
  }
  obj.backgroundColor = tmp2;
  let tmp3 = null;
  if (null != animated.barStyle) {
    obj = { value: animated.barStyle, animated: tmp };
    tmp3 = obj;
  }
  obj.barStyle = tmp3;
  obj.translucent = animated.translucent;
  let tmp4 = null;
  if (null != animated.hidden) {
    const obj1 = { value: animated.hidden, animated: tmp, transition: str };
    tmp4 = obj1;
  }
  obj.hidden = tmp4;
  obj.networkActivityIndicatorVisible = animated.networkActivityIndicatorVisible;
  return obj;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (Component) => {
  class StatusBar {
    constructor() {
      self = this;
      tmp = closure_3(this, StatusBar);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(StatusBar);
      tmp3 = closure_5;
      if (closure_8()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      tmp3Result._stackEntry = null;
      return tmp3Result;
    }
  }
  const importDefault = StatusBar;
  callback2(StatusBar, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._stackEntry = StatusBar.pushStackEntry(this.props);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (null != this._stackEntry) {
        StatusBar.popStackEntry(tmp._stackEntry);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (null != this._stackEntry) {
        self._stackEntry = StatusBar.replaceStackEntry(self._stackEntry, self.props);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      return null;
    }
  };
  const items1 = [
    {
      key: "setHidden",
      value: function setHidden(value) {
        StatusBar._defaultProps.hidden.value = value;
        StatusBar(closure_1[6]).setHidden(value);
      }
    },
    {
      key: "setBarStyle",
      value: function setBarStyle(barStyle) {
        StatusBar._defaultProps.barStyle.value = barStyle;
        StatusBar(closure_1[6]).setStyle(barStyle);
      }
    },
    {
      key: "setNetworkActivityIndicatorVisible",
      value: function setNetworkActivityIndicatorVisible(arg0) {
        console.warn("`setNetworkActivityIndicatorVisible` is only available on iOS");
      }
    },
    {
      key: "setBackgroundColor",
      value: function setBackgroundColor(value, animated) {
        let flag = animated;
        if (!animated) {
          flag = false;
        }
        StatusBar._defaultProps.backgroundColor.value = value;
        const tmp = StatusBar(closure_1[8])(value);
        if (null != tmp) {
          StatusBar(closure_1[9])("number" === typeof tmp, "Unexpected color given for StatusBar.setBackgroundColor");
          StatusBar(closure_1[6]).setColor(tmp, flag);
          const obj = StatusBar(closure_1[6]);
        } else {
          const _console = console;
          const _String = String;
          const _HermesInternal = HermesInternal;
          console.warn("`StatusBar.setBackgroundColor`: Color " + String(value) + " parsed to null or undefined");
        }
      }
    },
    {
      key: "setTranslucent",
      value: function setTranslucent(translucent) {
        StatusBar._defaultProps.translucent = translucent;
        StatusBar(closure_1[6]).setTranslucent(translucent);
      }
    },
    {
      key: "pushStackEntry",
      value: function pushStackEntry(props) {
        const tmp = callback4(props);
        const _propsStack = StatusBar._propsStack;
        _propsStack.push(tmp);
        StatusBar._updatePropsStack();
        return tmp;
      }
    },
    {
      key: "popStackEntry",
      value: function popStackEntry(_stackEntry) {
        const _propsStack = StatusBar._propsStack;
        const index = _propsStack.indexOf(_stackEntry);
        if (-1 !== index) {
          const _propsStack1 = StatusBar._propsStack;
          _propsStack1.splice(index, 1);
        }
        StatusBar._updatePropsStack();
      }
    },
    {
      key: "replaceStackEntry",
      value: function replaceStackEntry(_stackEntry, props) {
        const tmp = callback4(props);
        const _propsStack = StatusBar._propsStack;
        const index = _propsStack.indexOf(_stackEntry);
        if (-1 !== index) {
          StatusBar._propsStack[index] = tmp;
        }
        StatusBar._updatePropsStack();
        return tmp;
      }
    }
  ];
  return callback(StatusBar, items, items1);
}(importAll(dependencyMap[5]).Component);
tmp2._propsStack = [];
const obj = {};
const DEFAULT_BACKGROUND_COLOR = importDefault(dependencyMap[6]).getConstants().DEFAULT_BACKGROUND_COLOR;
let str = "black";
if (null != DEFAULT_BACKGROUND_COLOR) {
  str = DEFAULT_BACKGROUND_COLOR;
}
obj.backgroundColor = str;
tmp2._defaultProps = createStackEntry(obj);
tmp2._updateImmediate = null;
tmp2._currentValues = null;
const importDefaultResult = importDefault(dependencyMap[6]);
tmp2.currentHeight = importDefault(dependencyMap[6]).getConstants().HEIGHT;
tmp2._updatePropsStack = () => {
  clearImmediate(tmp2._updateImmediate);
  tmp2._updateImmediate = setImmediate(() => {
    const _currentValues = closure_2._currentValues;
    const tmp = function mergePropsStack(_propsStack, _defaultProps) {
      return _propsStack.reduce((arg0, obj) => {
        for (const key10005 in arg1) {
          let tmp = key10005;
          if (null == arg1[key10005]) {
            continue;
          } else {
            arg0[key10005] = arg1[key10005];
            // continue
          }
          continue;
        }
        return arg0;
      }, Object.assign({}, _defaultProps));
    }(closure_2._propsStack, closure_2._defaultProps);
    callback(closure_1[6]).setStyle(tmp.barStyle.value);
    const tmp3 = callback(closure_1[8])(tmp.backgroundColor.value);
    if (null == tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("`StatusBar._updatePropsStack`: Color " + tmp.backgroundColor.value + " parsed to null or undefined");
    } else {
      callback(closure_1[9])("number" === typeof tmp3, "Unexpected color given in StatusBar._updatePropsStack");
      callback(closure_1[6]).setColor(tmp3, tmp.backgroundColor.animated);
      const obj2 = callback(closure_1[6]);
    }
    let tmp10 = _currentValues;
    if (_currentValues) {
      let value;
      if (null != _currentValues.hidden) {
        value = iter.value;
      }
      tmp10 = value === tmp.hidden.value;
    }
    if (!tmp10) {
      callback(closure_1[6]).setHidden(tmp.hidden.value);
      const obj3 = callback(closure_1[6]);
    }
    let tmp15 = _currentValues;
    if (_currentValues) {
      tmp15 = _currentValues.translucent === tmp.translucent;
    }
    if (tmp15) {
      tmp15 = !tmp.translucent;
    }
    if (!tmp15) {
      callback(closure_1[6]).setTranslucent(tmp.translucent);
      const obj4 = callback(closure_1[6]);
    }
    closure_2._currentValues = tmp;
  });
};

export default tmp2;
