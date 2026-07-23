// Module ID: 4561
// Function ID: 39956
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 1273, 4562, 4015, 4539, 4126, 1212, 4543, 4660, 4662, 3842, 1450, 4663, 2]

// Module 4561 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_5 from "jsxProd";
import getSystemLocale from "getSystemLocale";
import PressableBase from "PressableBase";
import getThemeMixColor from "getThemeMixColor";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getAlertButtonVariant(confirmColor) {
  if (require(1273) /* Button */.ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (require(1273) /* Button */.ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (require(1273) /* Button */.ButtonColors.GREY !== confirmColor) {
      if (require(1273) /* Button */.ButtonColors.LIGHTGREY !== confirmColor) {
        if (require(1273) /* Button */.ButtonColors.TRANSPARENT !== confirmColor) {
          if (require(1273) /* Button */.ButtonColors.WHITE === confirmColor) {
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
({ View: closure_10, ScrollView: closure_11 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let obj = {};
obj = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.alert = obj;
_createForOfIteratorHelperLoose = { marginBottom: 16, color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
obj.titleText = _createForOfIteratorHelperLoose;
obj.divider = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let obj2 = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
obj.body = { marginTop: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
obj.buttons = { marginTop: 24 };
obj.cancelButton = { marginTop: 8 };
obj.secondaryConfirm = { marginTop: 16, alignSelf: "center" };
let obj3 = { marginTop: 16, color: require("_createForOfIteratorHelperLoose").colors.TEXT_STRONG };
obj.gradient = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let closure_15 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj);
const tmp4 = ((PureComponent) => {
  class Alert {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_4(this, apply);
      items1 = [...items];
      obj = outer1_7(apply);
      tmp2 = outer1_6;
      if (outer1_17()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items1, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.titleRef = outer1_9.createRef();
      tmp2Result.state = { confirming: false };
      obj2 = outer1_2(outer1_3[11]);
      tmp2Result.renderContent = obj2.getParser();
      timeout = new Alert(outer1_3[12]).Timeout();
      tmp2Result.timeout = timeout;
      timeout1 = new Alert(outer1_3[12]).Timeout();
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
            outer1_0.setState({ confirming: false });
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
  callback2(Alert, PureComponent);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      if (null != this.titleRef.current) {
        const _setImmediate = setImmediate;
        setImmediate(() => {
          const focusTimeout = self.focusTimeout;
          focusTimeout.start(300, () => {
            let obj = Alert(outer3_3[13]);
            obj = { ref: outer1_0.titleRef };
            const result = obj.setAccessibilityFocus(obj);
          });
        });
      }
    }
  };
  let items = [obj, , , , , , , ];
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
      const tmp = outer1_15(this.context);
      const title = this.props.title;
      let tmp6Result = null;
      if (null != title) {
        tmp6Result = null;
        if ("" !== title) {
          let obj = {};
          obj = { ref: self.titleRef, accessible: true, accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: tmp.titleText };
          let renderContentResult = title;
          if ("string" === typeof title) {
            renderContentResult = self.renderContent(title);
          }
          obj.children = renderContentResult;
          const items = [outer1_12(Alert(outer1_3[14]).Text, obj), ];
          obj = { style: tmp.divider };
          items[1] = outer1_12(outer1_10, obj);
          obj.children = items;
          tmp6Result = outer1_13(outer1_10, obj);
          const tmp6 = outer1_13;
          const tmp7 = outer1_10;
          const tmp8 = outer1_12;
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
        obj.children = outer1_12(Alert(outer1_3[14]).Text, obj1);
        tmp5Result = tmp5(outer1_11, obj);
        const tmp6 = outer1_11;
      }
      const items = [tmp5Result, props.children];
      obj.children = items;
      return outer1_13(outer1_14, obj);
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
      const tmp = outer1_15(this.context);
      const props = this.props;
      ({ cancelText, confirmText } = props);
      if (undefined === confirmText) {
        const intl = Alert(outer1_3[15]).intl;
        confirmText = intl.string(Alert(outer1_3[15]).t.BddRzS);
      }
      ({ secondaryConfirmText, renderConfirmIcon, renderConfirmRightIcon, renderConfirmButton, isConfirmButtonDisabled } = props);
      let tmp16Result = null;
      if (!props.noDefaultButtons) {
        let tmp7;
        if (null != cancelText) {
          let obj = { style: tmp.cancelButton };
          obj = { variant: "secondary", onPress: self.handleCancel, text: cancelText };
          obj.children = outer1_12(Alert(outer1_3[16]).Button, obj);
          tmp7 = outer1_12(outer1_10, obj);
        }
        let tmp12;
        if (null != secondaryConfirmText) {
          obj = { accessibilityRole: "button", style: tmp.secondaryConfirm, onPress: self.handleSecondaryConfirm };
          const obj1 = { variant: "text-sm/semibold", color: "text-link", children: secondaryConfirmText };
          obj.children = outer1_12(Alert(outer1_3[14]).Text, obj1);
          tmp12 = outer1_12(Alert(outer1_3[17]).PressableOpacity, obj);
        }
        const obj2 = { style: tmp.buttons };
        let renderConfirmButtonResult;
        if (null != renderConfirmButton) {
          renderConfirmButtonResult = renderConfirmButton();
        }
        if (null == renderConfirmButtonResult) {
          const obj3 = { variant: outer1_18(tmp4), onPress: self.handleConfirm, text: confirmText, loading: tmp5, disabled: null != isConfirmButtonDisabled && isConfirmButtonDisabled };
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
          renderConfirmButtonResult = outer1_12(Alert(outer1_3[16]).Button, obj3);
          const tmp22 = outer1_12;
        }
        const items = [renderConfirmButtonResult, tmp7, tmp12];
        obj2.children = items;
        tmp16Result = outer1_13(outer1_10, obj2);
        const tmp16 = outer1_13;
        const tmp17 = outer1_10;
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
        tmp = outer1_12(outer1_10, obj);
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
      const tmp = outer1_15(this.context);
      const props = this.props;
      const width = props.width;
      let obj = {};
      ({ style, isLandscape, onClose } = props);
      obj = { absolute: true, componentStyles: tmp.gradient };
      const items = [outer1_12(outer1_1(outer1_3[18]), obj), ];
      obj = { onAccessibilityEscape: onClose, style: items1 };
      items1 = [tmp.alert, style, { width }];
      const items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
      obj.children = items2;
      items[1] = outer1_13(outer1_10, obj);
      obj.children = items;
      const tmp2 = outer1_13(outer1_14, obj);
      let tmp3 = tmp2;
      if (isLandscape) {
        const obj1 = {};
        const obj2 = { maxHeight: width };
        obj1.style = obj2;
        obj1.children = tmp2;
        tmp3 = outer1_12(outer1_11, obj1);
      }
      return tmp3;
    }
  };
  return callback(Alert, items);
})(importAllResult.PureComponent);
let closure_16 = tmp4;
tmp4.contextType = require("ManaContext").ThemeContext;
const obj4 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
tmp4.defaultProps = { confirmColor: require("Button").ButtonColors.BRAND, autoCloseOnConfirm: true };
const memoResult = importAllResult.memo((arg0) => {
  const size = importDefault(1450)();
  let obj = require(4663) /* getIsScreenLandscape */;
  const isScreenLandscape = obj.useIsScreenLandscape();
  obj = { width: Math.min(0.9 * Math.min(size.width, size.height), 400), contentHeight: 0.7 * size.height, isLandscape: isScreenLandscape };
  const merged = Object.assign(arg0);
  return callback3(closure_16, obj);
});
memoResult.Colors = require("Button").ButtonColors;
const obj5 = { confirmColor: require("Button").ButtonColors.BRAND, autoCloseOnConfirm: true };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export { getAlertButtonVariant };
