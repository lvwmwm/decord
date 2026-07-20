// Module ID: 4553
// Function ID: 39860
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4553 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getAlertButtonVariant(confirmColor) {
  if (arg1(dependencyMap[10]).ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (arg1(dependencyMap[10]).ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (arg1(dependencyMap[10]).ButtonColors.GREY !== confirmColor) {
      if (arg1(dependencyMap[10]).ButtonColors.LIGHTGREY !== confirmColor) {
        if (arg1(dependencyMap[10]).ButtonColors.TRANSPARENT !== confirmColor) {
          if (arg1(dependencyMap[10]).ButtonColors.WHITE === confirmColor) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[6]);
({ View: closure_10, ScrollView: closure_11 } = tmp2);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[7]));
let obj1 = arg1(dependencyMap[8]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.sm, padding: 16, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.alert = obj;
obj1 = { marginBottom: 16, color: importDefault(dependencyMap[9]).colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.titleText = obj1;
const tmp3 = arg1(dependencyMap[7]);
obj.divider = { height: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
const obj2 = { height: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE };
obj.body = { marginTop: 16, color: importDefault(dependencyMap[9]).colors.TEXT_STRONG };
obj.buttons = { marginTop: 24 };
obj.cancelButton = { marginTop: 8 };
obj.secondaryConfirm = { "Null": "center", "Null": "center" };
const obj3 = { marginTop: 16, color: importDefault(dependencyMap[9]).colors.TEXT_STRONG };
obj.gradient = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
let closure_15 = obj1.createLegacyClassComponentStyles(obj);
const tmp4 = (PureComponent) => {
  class Alert {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, Alert);
      items1 = [...items];
      obj = closure_7(Alert);
      tmp2 = closure_6;
      if (closure_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      Alert = tmp2Result;
      tmp2Result.titleRef = closure_9.createRef();
      tmp2Result.state = { confirming: false };
      obj2 = closure_2(closure_3[11]);
      tmp2Result.renderContent = obj2.getParser();
      timeout = new Alert(closure_3[12]).Timeout();
      tmp2Result.timeout = timeout;
      timeout1 = new Alert(closure_3[12]).Timeout();
      tmp2Result.focusTimeout = timeout1;
      tmp2Result.handleConfirm = () => {
        let onClose;
        let onConfirm;
        if (!tmp2Result.state.confirming) {
          const props = tmp2Result.props;
          ({ onClose, onConfirm } = props);
          const obj = { confirming: true };
          tmp2Result.setState(obj);
          const timeout = tmp2Result.timeout;
          timeout.start(500, () => {
            state.setState({ confirming: false });
          });
          if (props.autoCloseOnConfirm) {
            if (null != onClose) {
              onClose();
            }
          }
          if (null != onConfirm) {
            onConfirm();
          }
        }
      };
      tmp2Result.handleCancel = () => {
        let onCancel;
        let onClose;
        ({ onClose, onCancel } = tmp2Result.props);
        if (null != onCancel) {
          onCancel();
        }
        if (null != onClose) {
          onClose();
        }
      };
      tmp2Result.handleSecondaryConfirm = () => {
        let onClose;
        let onConfirmSecondary;
        ({ onClose, onConfirmSecondary } = tmp2Result.props);
        if (null != onClose) {
          onClose();
        }
        if (null != onConfirmSecondary) {
          onConfirmSecondary();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = Alert;
  callback2(Alert, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const Alert = this;
      if (null != this.titleRef.current) {
        const _setImmediate = setImmediate;
        setImmediate(() => {
          const focusTimeout = self.focusTimeout;
          focusTimeout.start(300, () => {
            let obj = lib(closure_3[13]);
            obj = { ref: lib.titleRef };
            const result = obj.setAccessibilityFocus(obj);
          });
        });
      }
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      const timeout = this.timeout;
      timeout.stop();
      const focusTimeout = this.focusTimeout;
      focusTimeout.stop();
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value() {
      const self = this;
      const confirming = this.props.confirming;
      if (null != confirming) {
        const timeout = self.timeout;
        timeout.stop();
        const obj = { confirming };
        self.setState(obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderHeader",
    value() {
      const self = this;
      const tmp = callback7(this.context);
      const title = this.props.title;
      let tmp6Result = null;
      if (null != title) {
        tmp6Result = null;
        if ("" !== title) {
          let obj = {};
          obj = { "Null": 0.5, "Null": 15, "Null": 200, "Null": true, "Null": "/assets/images", ref: self.titleRef, style: tmp.titleText };
          let renderContentResult = title;
          if ("string" === typeof title) {
            renderContentResult = self.renderContent(title);
          }
          obj.children = renderContentResult;
          const items = [callback5(Alert(closure_3[14]).Text, obj), ];
          obj = { style: tmp.divider };
          items[1] = callback5(closure_10, obj);
          obj.children = items;
          tmp6Result = closure_13(closure_10, obj);
          const tmp6 = closure_13;
          const tmp7 = closure_10;
          const tmp8 = callback5;
        }
      }
      return tmp6Result;
    }
  };
  items[4] = {
    key: "renderBody",
    value() {
      const self = this;
      const props = this.props;
      const body = props.body;
      let obj = {};
      let tmp5Result = null;
      if (null != body) {
        obj = {};
        obj = { maxHeight: self.props.contentHeight };
        obj.style = obj;
        const obj1 = { variant: "text-md/normal", style: tmp.body };
        let renderContentResult = body;
        if ("string" === typeof body) {
          renderContentResult = self.renderContent(body);
        }
        obj1.children = renderContentResult;
        obj.children = closure_12(Alert(closure_3[14]).Text, obj1);
        tmp5Result = tmp5(closure_11, obj);
        const tmp6 = closure_11;
      }
      const items = [tmp5Result, props.children];
      obj.children = items;
      return closure_13(closure_14, obj);
    }
  };
  items[5] = {
    key: "renderButtons",
    value() {
      let cancelText;
      let confirmText;
      let isConfirmButtonDisabled;
      let renderConfirmButton;
      let renderConfirmIcon;
      let renderConfirmRightIcon;
      let secondaryConfirmText;
      const self = this;
      const tmp = callback7(this.context);
      const props = this.props;
      ({ cancelText, confirmText } = props);
      if (undefined === confirmText) {
        const intl = Alert(closure_3[15]).intl;
        confirmText = intl.string(Alert(closure_3[15]).t.BddRzS);
      }
      ({ secondaryConfirmText, renderConfirmIcon, renderConfirmRightIcon, renderConfirmButton, isConfirmButtonDisabled } = props);
      let tmp16Result = null;
      if (!props.noDefaultButtons) {
        let tmp7;
        if (null != cancelText) {
          let obj = { style: tmp.cancelButton };
          obj = { variant: "secondary", onPress: self.handleCancel, text: cancelText };
          obj.children = callback5(Alert(closure_3[16]).Button, obj);
          tmp7 = callback5(closure_10, obj);
        }
        let tmp12;
        if (null != secondaryConfirmText) {
          obj = { accessibilityRole: "button", style: tmp.secondaryConfirm, onPress: self.handleSecondaryConfirm };
          const obj1 = { INTEGRATION_CREATE: false, ConstraintReasonCode: false, children: secondaryConfirmText };
          obj.children = callback5(Alert(closure_3[14]).Text, obj1);
          tmp12 = callback5(Alert(closure_3[17]).PressableOpacity, obj);
        }
        const obj2 = { style: tmp.buttons };
        let renderConfirmButtonResult;
        if (null != renderConfirmButton) {
          renderConfirmButtonResult = renderConfirmButton();
        }
        if (null == renderConfirmButtonResult) {
          const obj3 = { variant: callback9(tmp4), onPress: self.handleConfirm, text: confirmText, loading: tmp5, disabled: null != isConfirmButtonDisabled && isConfirmButtonDisabled };
          let renderConfirmIconResult;
          if (null != renderConfirmIcon) {
            renderConfirmIconResult = renderConfirmIcon();
          }
          if (null == renderConfirmIconResult) {
            let result;
            if (null != renderConfirmRightIcon) {
              result = renderConfirmRightIcon();
            }
            renderConfirmIconResult = result;
          }
          let tmp21;
          if (null != renderConfirmIconResult) {
            tmp21 = renderConfirmIconResult;
          }
          obj3.icon = tmp21;
          let str3 = "start";
          if (null == renderConfirmIcon) {
            let str4;
            if (null != renderConfirmRightIcon) {
              str4 = "end";
            }
            str3 = str4;
          }
          obj3.iconPosition = str3;
          renderConfirmButtonResult = callback5(Alert(closure_3[16]).Button, obj3);
          const tmp22 = callback5;
        }
        const items = [renderConfirmButtonResult, tmp7, tmp12];
        obj2.children = items;
        tmp16Result = closure_13(closure_10, obj2);
        const tmp16 = closure_13;
        const tmp17 = closure_10;
      }
      return tmp16Result;
    }
  };
  items[6] = {
    key: "renderFooter",
    value() {
      const footer = this.props.footer;
      let tmp = null;
      if (null != footer) {
        const obj = { children: footer };
        tmp = callback5(closure_10, obj);
      }
      return tmp;
    }
  };
  items[7] = {
    key: "render",
    value() {
      let isLandscape;
      let onClose;
      let style;
      const tmp = callback7(this.context);
      const props = this.props;
      const width = props.width;
      let obj = {};
      ({ style, isLandscape, onClose } = props);
      obj = { absolute: true, componentStyles: tmp.gradient };
      const items = [callback5(callback(closure_3[18]), obj), ];
      obj = { onAccessibilityEscape: onClose, style: items1 };
      const items1 = [tmp.alert, style, { width }];
      const items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
      obj.children = items2;
      items[1] = callback6(closure_10, obj);
      obj.children = items;
      const tmp2 = callback6(closure_14, obj);
      let tmp3 = tmp2;
      if (isLandscape) {
        const obj1 = {};
        const obj2 = { maxHeight: width };
        obj1.style = obj2;
        obj1.children = tmp2;
        tmp3 = callback5(closure_11, obj1);
      }
      return tmp3;
    }
  };
  return callback(Alert, items);
}(importAllResult.PureComponent);
tmp4.contextType = arg1(dependencyMap[19]).ThemeContext;
const obj4 = { borderRadius: importDefault(dependencyMap[9]).radii.sm };
tmp4.defaultProps = { confirmColor: arg1(dependencyMap[10]).ButtonColors.BRAND, autoCloseOnConfirm: true };
const memoResult = importAllResult.memo((arg0) => {
  const size = importDefault(dependencyMap[20])();
  let obj = arg1(dependencyMap[21]);
  const isScreenLandscape = obj.useIsScreenLandscape();
  obj = { width: Math.min(0.9 * Math.min(size.width, size.height), 400), contentHeight: 0.7 * size.height, isLandscape: isScreenLandscape };
  const merged = Object.assign(arg0);
  return callback3(tmp4, obj);
});
memoResult.Colors = arg1(dependencyMap[10]).ButtonColors;
const obj5 = { confirmColor: arg1(dependencyMap[10]).ButtonColors.BRAND, autoCloseOnConfirm: true };
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export { getAlertButtonVariant };
