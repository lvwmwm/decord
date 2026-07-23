// Module ID: 1176
// Function ID: 13384
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 1174, 1175, 1177, 1178, 1173, 1179]

// Module 1176 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import lazyLoadFeedbackIntegration from "lazyLoadFeedbackIntegration";
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

export const FeedbackButton = ((Component) => {
  class FeedbackButton {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, FeedbackButton);
      items = [];
      items[0] = Component;
      obj = outer1_5(FeedbackButton);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = FeedbackButton(outer1_1[7]);
      result = obj2.lazyLoadFeedbackIntegration();
      return tmp2Result;
    }
  }
  callback2(FeedbackButton, Component);
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
      const self = this;
      let obj = FeedbackButton(outer1_1[8]);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, FeedbackButton(outer1_1[9]).defaultButtonConfiguration), this.props);
      obj = {};
      let obj2 = FeedbackButton(outer1_1[10]);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj2.defaultButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      obj.triggerButton = Object.assign(merged1, triggerButton);
      let obj3 = FeedbackButton(outer1_1[10]);
      const styles2 = self.props.styles;
      let triggerText;
      const merged2 = Object.assign({}, obj3.defaultButtonStyles(theme).triggerText);
      if (null !== styles2) {
        if (undefined !== styles2) {
          triggerText = styles2.triggerText;
        }
      }
      obj.triggerText = Object.assign(merged2, triggerText);
      const styles3 = self.props.styles;
      let triggerIcon;
      const merged3 = Object.assign({}, FeedbackButton(outer1_1[10]).defaultButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj.triggerIcon = Object.assign(merged3, triggerIcon);
      obj = { style: obj.triggerButton, onPress: FeedbackButton(outer1_1[11]).showFeedbackWidget, accessibilityLabel: merged.triggerAriaLabel };
      const obj1 = {};
      obj2 = { uri: FeedbackButton(outer1_1[12]).feedbackIcon };
      obj1.source = obj2;
      obj1.style = obj.triggerIcon;
      const element = <outer1_9 />;
      obj3 = { style: obj.triggerText, testID: "sentry-feedback-button" };
      return <outer1_11 style={obj.triggerButton} onPress={FeedbackButton(outer1_1[11]).showFeedbackWidget} accessibilityLabel={merged.triggerAriaLabel}>{element}<outer1_10 style={obj.triggerText} testID="sentry-feedback-button">{merged.triggerLabel}</outer1_10></outer1_11>;
    }
  };
  items[2] = obj;
  return callback(FeedbackButton, items);
})(importAllResult.Component);
