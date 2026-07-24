// Module ID: 1180
// Function ID: 13407
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1173, 977, 1174, 1175, 1177, 1178, 1179]
// Exports: getCapturedScreenshot

// Module 1180 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import _callSuper from "_callSuper";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ Appearance: closure_8, Image: closure_9, Text: closure_10, TouchableOpacity: closure_11 } = get_ActivityIndicator);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _callSuper = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
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
      outer2_0(outer2_1[7]).hideScreenshotButton();
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => outer3_13(undefined, undefined, undefined, function*() {
        const NATIVE = outer5_0(outer5_1[8]).NATIVE;
        const arr = yield NATIVE.captureScreenshot();
        let str = "ErrorCapturingScreenshot";
        if (arr) {
          str = "ErrorCapturingScreenshot";
          if (arr.length > 0) {
            str = arr[0];
          }
        }
        const outer5_12 = str;
        outer5_0(outer5_1[7]).showFeedbackWidget();
      }), 100);
    }
  });
}

export function getCapturedScreenshot() {
  let c12;
  return c12;
}
export const ScreenshotButton = ((Component) => {
  class ScreenshotButton {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, ScreenshotButton);
      items = [];
      items[0] = Component;
      obj = outer1_5(ScreenshotButton);
      tmp2 = outer1_4;
      if (outer1_15()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = ScreenshotButton(outer1_1[9]);
      result = obj2.lazyLoadFeedbackIntegration();
      return tmp2Result;
    }
  }
  callback2(ScreenshotButton, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._themeListener = outer1_8.addChangeListener(() => {
        self.forceUpdate();
      });
    }
  };
  let items = [obj, , ];
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
      let obj = ScreenshotButton(outer1_1[10]);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, ScreenshotButton(outer1_1[11]).defaultScreenshotButtonConfiguration), this.props);
      obj = {};
      let obj2 = ScreenshotButton(outer1_1[12]);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj2.defaultScreenshotButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      obj.triggerButton = Object.assign(merged1, triggerButton);
      let obj3 = ScreenshotButton(outer1_1[12]);
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
      const merged3 = Object.assign({}, ScreenshotButton(outer1_1[12]).defaultScreenshotButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj.triggerIcon = Object.assign(merged3, triggerIcon);
      obj = { style: obj.triggerButton, onPress: outer1_14, accessibilityLabel: merged.triggerAriaLabel };
      const obj1 = {};
      obj2 = { uri: ScreenshotButton(outer1_1[13]).screenshotIcon };
      ({ createElement, createElement: createElement2 } = outer1_7);
      obj1.source = obj2;
      obj1.style = obj.triggerIcon;
      const element2 = createElement2(outer1_9, obj1);
      obj3 = { style: obj.triggerText, testID: "sentry-feedback-screenshot-button" };
      return <outer1_11 style={obj.triggerButton} onPress={outer1_14} accessibilityLabel={merged.triggerAriaLabel}>{element2}<outer1_10 style={obj.triggerText} testID="sentry-feedback-screenshot-button">{merged.triggerLabel}</outer1_10></outer1_11>;
    }
  };
  items[2] = obj;
  return callback(ScreenshotButton, items);
})(importAllResult.Component);
