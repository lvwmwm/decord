// Module ID: 1180
// Function ID: 13401
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: getCapturedScreenshot

// Module 1180 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ Appearance: closure_8, Image: closure_9, Text: closure_10, TouchableOpacity: closure_11 } = arg1(dependencyMap[6]));
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
function takeScreenshot() {
  return fn(undefined, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      callback(closure_1[7]).hideScreenshotButton();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(undefined, undefined, undefined, function*() {
        const NATIVE = callback(closure_1[8]).NATIVE;
        const arr = yield NATIVE.captureScreenshot();
        let str = "ErrorCapturingScreenshot";
        if (arr) {
          str = "ErrorCapturingScreenshot";
          if (arr.length > 0) {
            str = arr[0];
          }
        }
        callback(closure_1[7]).showFeedbackWidget();
      }), 100);
    }
  });
}

export function getCapturedScreenshot() {
  let closure_12;
  return closure_12;
}
export const ScreenshotButton = (Component) => {
  class ScreenshotButton {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ScreenshotButton);
      items = [];
      items[0] = Component;
      obj = closure_5(ScreenshotButton);
      tmp2 = closure_4;
      if (closure_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = ScreenshotButton(closure_1[9]);
      result = obj2.lazyLoadFeedbackIntegration();
      return tmp2Result;
    }
  }
  const arg1 = ScreenshotButton;
  callback2(ScreenshotButton, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const ScreenshotButton = this;
      this._themeListener = closure_8.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._themeListener) {
        const _themeListener = this._themeListener;
        _themeListener.remove();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value: function render() {
      let createElement;
      let createElement2;
      const self = this;
      let obj = ScreenshotButton(closure_1[10]);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, ScreenshotButton(closure_1[11]).defaultScreenshotButtonConfiguration), this.props);
      obj = {};
      let obj2 = ScreenshotButton(closure_1[12]);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj2.defaultScreenshotButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      obj.triggerButton = Object.assign(merged1, triggerButton);
      let obj3 = ScreenshotButton(closure_1[12]);
      const styles2 = self.props.styles;
      let triggerText;
      const merged2 = Object.assign({}, obj3.defaultScreenshotButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      obj.triggerText = Object.assign(merged2, triggerText);
      const styles3 = self.props.styles;
      let triggerIcon;
      const merged3 = Object.assign({}, ScreenshotButton(closure_1[12]).defaultScreenshotButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj.triggerIcon = Object.assign(merged3, triggerIcon);
      obj = { style: obj.triggerButton, onPress: closure_14, accessibilityLabel: merged.triggerAriaLabel };
      const obj1 = {};
      obj2 = { uri: ScreenshotButton(closure_1[13]).screenshotIcon };
      ({ createElement, createElement: createElement2 } = React);
      obj1.source = obj2;
      obj1.style = obj.triggerIcon;
      const element2 = createElement2(closure_9, obj1);
      obj3 = { style: obj.triggerText, testID: "sentry-feedback-screenshot-button" };
      return <closure_11 {......obj}>{element2}<closure_10 {......obj3}>{merged.triggerLabel}</closure_10></closure_11>;
    }
  };
  items[2] = obj;
  return callback(ScreenshotButton, items);
}(importAllResult.Component);
