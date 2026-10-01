// Module ID: 5300
// Function ID: 5301
// Name: Alert
// Dependencies: [19, 17, 21, 4836, 576, 1177, 4540, 5301, 2040, 5275, 4832, 1115, 5281, 5435, 5437, 1479, 5438, 2]
// Exports: getAlertButtonVariant

// Module 5300 (Alert)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import Timers from "Timers" /* 2040 */;
import native2 from "native" /* 4540 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import CustomMarkupAll from "CustomMarkup" /* 5301 */;
import Pressables from "Pressables" /* 5435 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: hasOwnProperty, ScrollView: metroRequire, StyleSheet } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { alert: obj2, titleText: obj3, divider: obj4, body: obj5, buttons: { marginTop: 24 }, cancelButton: { marginTop: 8 }, secondaryConfirm: { marginTop: 16, alignSelf: "center" }, gradient: obj6 };
obj2 = { borderRadius: nativeDefault.radii.sm, padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { marginBottom: 16, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { marginTop: 16, color: nativeDefault.colors.TEXT_STRONG };
obj6 = { borderRadius: nativeDefault.radii.sm };
const authStore = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Alert extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.titleRef = react.createRef();
    applyArgumentsResult.state = { confirming: false };
    const obj = CustomMarkupAll;
    applyArgumentsResult.renderContent = obj.getParser();
    let timeout = new Timers.Timeout();
    applyArgumentsResult.timeout = timeout;
    const timeout1 = new Timers.Timeout();
    applyArgumentsResult.focusTimeout = timeout1;
    applyArgumentsResult.handleConfirm = function handleConfirm() {
      let autoCloseOnConfirm;
      let onClose;
      let onConfirm;
      let state;
      if (!applyArgumentsResult.state.confirming) {
        ({ onClose, onConfirm, autoCloseOnConfirm } = applyArgumentsResult.props);
        obj.setState({ confirming: true });
        const timeout = obj.timeout;
        timeout.start(500, () => {
          state.setState({ confirming: false });
        });
        if (autoCloseOnConfirm) {
          if (onClose != null) {
            onClose();
          }
        }
        if (onConfirm != null) {
          onConfirm();
        }
      }
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      let onCancel;
      let onClose;
      ({ onClose, onCancel } = applyArgumentsResult.props);
      if (onCancel != null) {
        onCancel();
      }
      if (onClose != null) {
        onClose();
      }
    };
    applyArgumentsResult.handleSecondaryConfirm = function handleSecondaryConfirm() {
      let onClose;
      let onConfirmSecondary;
      ({ onClose, onConfirmSecondary } = applyArgumentsResult.props);
      if (onClose != null) {
        onClose();
      }
      if (onConfirmSecondary != null) {
        onConfirmSecondary();
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    if (null != this.titleRef.current) {
      const _setImmediate = setImmediate;
      setImmediate(() => {
        let titleRef;
        const focusTimeout = self.focusTimeout;
        focusTimeout.start(300, () => {
          const obj = self(dependencyMap[9]);
          const obj2 = { ref: titleRef.titleRef };
          const result = obj.setAccessibilityFocus(obj2);
        });
      });
    }
  }
  componentWillUnmount() {
    const timeout = this.timeout;
    timeout.stop();
    const focusTimeout = this.focusTimeout;
    focusTimeout.stop();
  }
  componentDidUpdate() {
    const self = this;
    const confirming = this.props.confirming;
    if (null != confirming) {
      const timeout = self.timeout;
      timeout.stop();
      const obj = { confirming };
      self.setState(obj);
    }
  }
  renderHeader() {
    let items;
    let renderContentResult;
    const self = this;
    const tmp = closure_10(this.context);
    const title = this.props.title;
    let tmp3Result = null;
    if (null != title) {
      tmp3Result = null;
      if ("" !== title) {
        const obj2 = { ref: self.titleRef, accessible: true, accessibilityRole: "header", variant: "heading-md/extrabold", color: "text-default", style: tmp.titleText, children: renderContentResult };
        renderContentResult = title;
        const Text = Text_Text.Text;
        const tmp3 = metroImportAll;
        if (typeof title === "string") {
          renderContentResult = self.renderContent(title);
        }
        const obj = { children: items };
        items = [metroImportDefault(Text, obj2), ];
        const obj3 = { style: tmp.divider };
        items[1] = metroImportDefault(hasOwnProperty, obj3);
        tmp3Result = tmp3(tmp4, obj);
      }
    }
    return tmp3Result;
  }
  renderBody() {
    let Text;
    let items;
    let obj2;
    let obj3;
    let renderContentResult;
    const self = this;
    const props = this.props;
    const body = props.body;
    let tmp5Result = null;
    const children = props.children;
    const tmp2 = metroImportAll;
    const tmp3 = React4;
    if (null != body) {
      const obj = { style: obj2, children: metroImportDefault(Text, obj3) };
      obj3 = { variant: "text-md/normal", style: tmp.body, children: renderContentResult };
      renderContentResult = body;
      obj2 = { maxHeight: self.props.contentHeight };
      Text = Text_Text.Text;
      const tmp6 = metroRequire;
      if (typeof body === "string") {
        renderContentResult = self.renderContent(body);
      }
      tmp5Result = tmp5(tmp6, obj);
    }
    const obj4 = { children: items };
    items = [tmp5Result, children];
    return tmp2(tmp3, obj4);
  }
  renderButtons() {
    let cancelText;
    let confirmColor;
    let confirmText;
    let isConfirmButtonDisabled;
    let items;
    let obj2;
    let obj4;
    let renderConfirmButton;
    let renderConfirmIcon;
    let renderConfirmIconResult;
    let renderConfirmRightIcon;
    let secondaryConfirmText;
    let str2;
    const self = this;
    const tmp = closure_10(this.context);
    const props = this.props;
    ({ cancelText, confirmText } = props);
    if (undefined === confirmText) {
      const intl = intl2.intl;
      confirmText = intl.string(intl2.t.BddRzS);
    }
    ({ confirmColor, secondaryConfirmText, renderConfirmIcon, renderConfirmRightIcon, renderConfirmButton, isConfirmButtonDisabled } = props);
    let tmp15Result = null;
    if (!props.noDefaultButtons) {
      let tmp6;
      if (null != cancelText) {
        const obj = { style: tmp.cancelButton, children: metroImportDefault(components_Button_Button.Button, obj2) };
        obj2 = { variant: "secondary", onPress: self.handleCancel, text: cancelText };
        tmp6 = metroImportDefault(hasOwnProperty, obj);
      }
      let tmp11;
      if (null != secondaryConfirmText) {
        const obj3 = { accessibilityRole: "button", style: tmp.secondaryConfirm, onPress: self.handleSecondaryConfirm, children: metroImportDefault(Text_Text.Text, obj4) };
        const PressableOpacity = Pressables.PressableOpacity;
        obj4 = { variant: "text-sm/semibold", color: "text-link", children: secondaryConfirmText };
        tmp11 = metroImportDefault(PressableOpacity, obj3);
      }
      let renderConfirmButtonResult;
      const obj5 = { style: tmp.buttons, children: items };
      const tmp15 = metroImportAll;
      const tmp16 = hasOwnProperty;
      if (renderConfirmButton != null) {
        renderConfirmButtonResult = renderConfirmButton();
      }
      if (renderConfirmButtonResult == null) {
        const Button = components_Button_Button.Button;
        let str = "active";
        const tmp20 = metroImportDefault;
        if (native.ButtonColors.GREEN !== confirmColor) {
          str = "destructive";
          if (native.ButtonColors.RED !== confirmColor) {
            str = "secondary";
            if (native.ButtonColors.GREY !== confirmColor) {
              str = "secondary";
              if (native.ButtonColors.LIGHTGREY !== confirmColor) {
                str = "secondary";
                if (native.ButtonColors.TRANSPARENT !== confirmColor) {
                  str = "primary";
                  if (native.ButtonColors.WHITE === confirmColor) {
                    str = "primary-overlay";
                  }
                }
              }
            }
          }
        }
        const obj6 = { variant: str, onPress: self.handleConfirm, text: confirmText, loading: tmp4, disabled: isConfirmButtonDisabled, icon: renderConfirmIconResult, iconPosition: str2 };
        if (isConfirmButtonDisabled == null) {
          isConfirmButtonDisabled = false;
        }
        renderConfirmIconResult = undefined;
        if (renderConfirmIcon != null) {
          renderConfirmIconResult = renderConfirmIcon();
        }
        if (renderConfirmIconResult == null) {
          let result;
          if (renderConfirmRightIcon != null) {
            result = renderConfirmRightIcon();
          }
          renderConfirmIconResult = result;
        }
        str2 = "start";
        if (null == renderConfirmIcon) {
          let str3;
          if (null != renderConfirmRightIcon) {
            str3 = "end";
          }
          str2 = str3;
        }
        renderConfirmButtonResult = tmp20(Button, obj6);
      }
      items = [renderConfirmButtonResult, tmp6, tmp11];
      tmp15Result = tmp15(tmp16, obj5);
    }
    return tmp15Result;
  }
  renderFooter() {
    const footer = this.props.footer;
    let tmp = null;
    if (null != footer) {
      const obj = { children: footer };
      tmp = metroImportDefault(hasOwnProperty, obj);
    }
    return tmp;
  }
  render() {
    let isLandscape;
    let items;
    let items1;
    let items2;
    let obj5;
    let onClose;
    let style;
    const tmp = closure_10(this.context);
    const props = this.props;
    const width = props.width;
    const obj = { children: items };
    ({ style, isLandscape, onClose } = props);
    items = [, ];
    const obj2 = { absolute: true, componentStyles: tmp.gradient };
    items[0] = metroImportDefault(ThemedGradientDefault, obj2);
    const obj3 = { onAccessibilityEscape: onClose, style: items1, children: items2 };
    items1 = [tmp.alert, style, { width }];
    items2 = [this.renderHeader(), this.renderBody(), this.renderButtons(), this.renderFooter()];
    items[1] = metroImportAll(hasOwnProperty, obj3);
    const tmp3 = metroImportAll(React4, obj);
    let tmp2Result = tmp3;
    const tmp2 = metroImportDefault;
    if (isLandscape) {
      const obj4 = { style: obj5, children: tmp3 };
      obj5 = { maxHeight: width };
      tmp2Result = tmp2(metroRequire, obj4);
    }
    return tmp2Result;
  }
}
const prototype = Alert.prototype;
Alert.contextType = native2.ThemeContext;
Alert.defaultProps = { confirmColor: native.ButtonColors.BRAND, autoCloseOnConfirm: true };
({ confirmColor: native.ButtonColors.BRAND, autoCloseOnConfirm: true });
const memoResult = react.memo((arg0) => {
  size = useWindowDimensionsDefault();
  const obj = useIsScreenLandscape;
  const isScreenLandscape = obj.useIsScreenLandscape();
  const obj2 = { width: Math.min(0.9 * Math.min(size.width, size.height), 400), contentHeight: 0.7 * size.height, isLandscape: isScreenLandscape };
  const merged = Object.assign(arg0);
  return metroImportDefault(Alert, obj2);
});
memoResult.Colors = native.ButtonColors;
let size = size_mod;
let result = size.fileFinishedImporting("components_native/common/Alert.tsx");

export default memoResult;
export const getAlertButtonVariant = function getAlertButtonVariant(confirmColor) {
  if (native.ButtonColors.GREEN === confirmColor) {
    return "active";
  } else if (native.ButtonColors.RED === confirmColor) {
    return "destructive";
  } else {
    if (native.ButtonColors.GREY !== confirmColor) {
      if (native.ButtonColors.LIGHTGREY !== confirmColor) {
        if (native.ButtonColors.TRANSPARENT !== confirmColor) {
          if (native.ButtonColors.WHITE === confirmColor) {
            return "primary-overlay";
          } else {
            return "primary";
          }
        }
      }
    }
    return "secondary";
  }
};
