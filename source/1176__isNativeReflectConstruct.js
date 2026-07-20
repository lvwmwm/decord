// Module ID: 1176
// Function ID: 13379
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1176 (_isNativeReflectConstruct)
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

export const FeedbackButton = (Component) => {
  class FeedbackButton {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, FeedbackButton);
      items = [];
      items[0] = Component;
      obj = closure_5(FeedbackButton);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = FeedbackButton(closure_1[7]);
      result = obj2.lazyLoadFeedbackIntegration();
      return tmp2Result;
    }
  }
  const arg1 = FeedbackButton;
  callback2(FeedbackButton, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const FeedbackButton = this;
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
      const self = this;
      let obj = FeedbackButton(closure_1[8]);
      const theme = obj.getTheme();
      const merged = Object.assign(Object.assign({}, FeedbackButton(closure_1[9]).defaultButtonConfiguration), this.props);
      obj = {};
      let obj2 = FeedbackButton(closure_1[10]);
      const styles = this.props.styles;
      let triggerButton;
      const merged1 = Object.assign({}, obj2.defaultButtonStyles(theme).triggerButton);
      if (null !== styles) {
        if (undefined !== styles) {
          triggerButton = styles.triggerButton;
        }
      }
      obj.triggerButton = Object.assign(merged1, triggerButton);
      let obj3 = FeedbackButton(closure_1[10]);
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
      const merged3 = Object.assign({}, FeedbackButton(closure_1[10]).defaultButtonStyles(theme).triggerIcon);
      if (null !== styles3) {
        if (undefined !== styles3) {
          triggerIcon = styles3.triggerIcon;
        }
      }
      obj.triggerIcon = Object.assign(merged3, triggerIcon);
      obj = { style: obj.triggerButton, onPress: FeedbackButton(closure_1[11]).showFeedbackWidget, accessibilityLabel: merged.triggerAriaLabel };
      const obj1 = {};
      obj2 = { uri: FeedbackButton(closure_1[12]).feedbackIcon };
      obj1.source = obj2;
      obj1.style = obj.triggerIcon;
      const element = <closure_9 {......obj1} />;
      obj3 = { style: obj.triggerText, testID: "sentry-feedback-button" };
      return <closure_11 {......obj}>{element}<closure_10 {......obj3}>{merged.triggerLabel}</closure_10></closure_11>;
    }
  };
  items[2] = obj;
  return callback(FeedbackButton, items);
}(importAllResult.Component);
