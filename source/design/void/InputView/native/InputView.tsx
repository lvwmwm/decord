// Module ID: 13155
// Function ID: 101332
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 653, 33, 4130, 689, 4973, 1273, 4126, 1212, 5776, 3976, 11325, 477, 3842, 2]

// Module 13155 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import getSystemLocale from "getSystemLocale";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import BottomSheetTextInput from "BottomSheetTextInput";
import get_ActivityIndicator from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let Platform;
let closure_10;
let closure_11;
let closure_12;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["numberOfLines", "disableConstantNumberOfLines", "inputTextColor", "placeholder", "placeholderTextColor", "editable", "large", "accessibilityHint", "maxLength", "inActionSheet", "trailingButton", "clearButtonVisibility", "disabled", "style", "inputTextStyle", "onChangeText", "onFocus", "value"];
({ View: closure_10, Pressable: closure_11, TouchableWithoutFeedback: closure_12, Platform } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { disabled: { opacity: 0.5 }, topContainer: { minHeight: 16, alignItems: "center", flexDirection: "row", marginBottom: 5, flexWrap: "wrap" }, inputViewTitle: { marginRight: 5 } };
_createForOfIteratorHelperLoose = { fontSize: 10, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.inputViewError = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.inputBorder = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj2 = { fontSize: 16, paddingBottom: 0, paddingTop: 0, textAlignVertical: "top", flex: 1, color: require("result").DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
_createForOfIteratorHelperLoose.inputView = obj2;
_createForOfIteratorHelperLoose.inputViewBorder = { marginTop: 8, height: 2 };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.inputViewBorderActive = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.TRANSPARENT };
_createForOfIteratorHelperLoose.inputContainer = { flexDirection: "row", alignItems: "center", position: "relative" };
_createForOfIteratorHelperLoose.bottomContainer = { marginTop: 5 };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.TRANSPARENT };
_createForOfIteratorHelperLoose.charactersLength = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: require("result").DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
let obj4 = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: require("result").DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
_createForOfIteratorHelperLoose.closeIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.clearButton = { position: "absolute", right: 6 };
let obj5 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.required = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const obj7 = { NEVER: "never", WITH_CONTENT: "with-content", ALWAYS: "always" };
let tmp5 = ((PureComponent) => {
  class InputView {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_5(this, apply);
      items1 = [...items];
      obj = outer1_8(apply);
      tmp2 = outer1_7;
      if (outer1_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_8;
        constructResult = Reflect.construct(obj, items1, outer1_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      obj = { active: false, value: tmp2Result.props.value, valueProp: tmp2Result.props.value };
      tmp2Result.state = obj;
      tmp2Result._ref = undefined;
      tmp2Result.handleFocus = () => {
        const onFocus = tmp2Result.props.onFocus;
        if (null != onFocus) {
          onFocus();
        }
        tmp2Result.setState({ active: true });
      };
      tmp2Result.handleBlur = () => {
        tmp2Result.setState({ active: false });
      };
      tmp2Result.handleChangeText = (value) => {
        value.setState({ value }, () => {
          const onChangeText = value.props.onChangeText;
          if (null != onChangeText) {
            onChangeText(value);
          }
        });
      };
      tmp2Result.handleClear = () => {
        tmp2Result.handleChangeText("");
      };
      tmp2Result.handleEndEditing = () => {
        const onEnd = tmp2Result.props.onEnd;
        if (null != onEnd) {
          onEnd(tmp2Result.state.value);
        }
      };
      tmp2Result.handleSubmitEditing = () => {
        const onNext = tmp2Result.props.onNext;
        if (null != onNext) {
          onNext();
        }
      };
      tmp2Result.getText = () => tmp2Result.state.value;
      tmp2Result.isFocused = () => {
        const _ref = tmp2Result._ref;
        let isFocusedResult;
        if (null != _ref) {
          isFocusedResult = _ref.isFocused();
        }
        return null != isFocusedResult && isFocusedResult;
      };
      tmp2Result.focus = () => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          _ref.focus();
        }
      };
      tmp2Result.blur = () => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          _ref.blur();
        }
      };
      tmp2Result.setText = (text) => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          const obj = { text };
          _ref.setNativeProps(obj);
        }
      };
      tmp2Result.setRef = (_ref) => {
        closure_0._ref = _ref;
      };
      tmp2Result.measure = (arg0) => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          _ref.measure(arg0);
        }
      };
      tmp2Result.measureInWindow = (arg0) => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          _ref.measureInWindow(arg0);
        }
      };
      tmp2Result.measureLayout = (arg0, arg1, arg2) => {
        const _ref = tmp2Result._ref;
        if (null != _ref) {
          _ref.measureLayout(arg0, arg1, arg2);
        }
      };
      return tmp2Result;
    }
  }
  callback2(InputView, PureComponent);
  let obj = {
    key: "renderBorder",
    value() {
      const tmp = outer1_16(this.context);
      const props = this.props;
      let backgroundColor = props.borderColor;
      if (props.showBorder) {
        if (null == backgroundColor) {
          backgroundColor = tmp.inputBorder.backgroundColor;
        }
        let obj = {};
        const items = [tmp.inputViewBorder, , ];
        obj = { backgroundColor };
        items[1] = obj;
        let inputViewBorderActive = this.state.active;
        if (inputViewBorderActive) {
          inputViewBorderActive = tmp.inputViewBorderActive;
        }
        items[2] = inputViewBorderActive;
        obj.style = items;
        return outer1_14(outer1_10, obj);
      } else {
        return null;
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "renderTopContainer",
    value() {
      let error;
      let errorProps;
      let errorStyles;
      let helpText;
      let required;
      let showTopContainer;
      let title;
      const tmp = outer1_16(this.context);
      const props = this.props;
      ({ error, title, errorProps, helpText } = props);
      let tmp2 = null != error;
      ({ showTopContainer, errorStyles, required } = props);
      if (tmp2) {
        tmp2 = "" !== error;
      }
      let tmp3;
      if (tmp2) {
        let obj = {};
        const merged = Object.assign(errorProps);
        const items = [tmp.inputViewError, errorStyles];
        obj["style"] = items;
        const items1 = ["(", error, ")"];
        obj["children"] = items1;
        tmp3 = outer1_15(InputView(outer1_2[13]).LegacyText, obj);
      }
      let tmp10 = null != title;
      if (tmp10) {
        tmp10 = "" !== title;
      }
      let tmp12Result;
      if (tmp10) {
        obj = { variant: "heading-md/semibold" };
        let str8 = "text-default";
        if (null !== error) {
          str8 = "text-default";
          if ("" !== error) {
            str8 = "text-feedback-critical";
          }
        }
        obj.color = str8;
        const items2 = [tmp.inputViewTitle];
        obj.style = items2;
        obj.children = title;
        tmp12Result = outer1_14(InputView(outer1_2[14]).Text, obj);
        const tmp12 = outer1_14;
      }
      let tmp15 = null != helpText;
      if (tmp15) {
        tmp15 = "" !== helpText;
      }
      let tmp16;
      if (tmp15) {
        obj = { variant: "text-xs/medium", children: helpText };
        tmp16 = outer1_14(InputView(outer1_2[14]).Text, obj);
      }
      const obj1 = { style: tmp.topContainer };
      const items3 = [tmp12Result, tmp16, , ];
      let tmp22 = null == tmp3;
      if (tmp22) {
        tmp22 = required;
      }
      if (tmp22) {
        const obj2 = { style: tmp.required, children: "*" };
        tmp22 = outer1_14(InputView(outer1_2[13]).LegacyText, obj2);
      }
      items3[2] = tmp22;
      items3[3] = tmp3;
      obj1.children = items3;
      return outer1_15(outer1_10, obj1);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderBottomContainer",
    value() {
      const self = this;
      const tmp = outer1_16(this.context);
      const props = this.props;
      const maxLength = props.maxLength;
      let tmp2 = null;
      if (props.showCharactersRemaining) {
        tmp2 = null;
        if (null != maxLength) {
          let obj = { style: tmp.bottomContainer };
          obj = { accessible: true, style: tmp.charactersLength };
          const intl = InputView(outer1_2[15]).intl;
          obj = { remainingCharacters: maxLength - self.getText().length };
          obj.accessibilityLabel = intl.formatToPlainString(InputView(outer1_2[15]).t.fR1cof, obj);
          obj.children = maxLength - self.getText().length;
          obj.children = outer1_14(InputView(outer1_2[13]).LegacyText, obj);
          tmp2 = outer1_14(outer1_10, obj);
        }
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "renderTrailingButton",
    value() {
      let clearButtonAccessibilityLabel;
      let clearButtonVisibility;
      let trailingButton;
      const self = this;
      ({ trailingButton, clearButtonVisibility, clearButtonAccessibilityLabel } = this.props);
      if (null == trailingButton) {
        if (clearButtonVisibility === outer1_17.ALWAYS) {
          let obj = { hitSlop: 16, style: tmp.clearButton, onPress: self.handleClear, accessible: true, accessibilityRole: "button" };
          if (null == clearButtonAccessibilityLabel) {
            const intl = InputView(outer1_2[15]).intl;
            clearButtonAccessibilityLabel = intl.string(InputView(outer1_2[15]).t.VkKicb);
          }
          obj.accessibilityLabel = clearButtonAccessibilityLabel;
          obj = { size: "sm" };
          obj.children = outer1_14(InputView(outer1_2[16]).CircleXIcon, obj);
          let tmp4Result = outer1_14(outer1_11, obj);
          const tmp4 = outer1_14;
          const tmp5 = outer1_11;
        } else {
          tmp4Result = null;
          if (clearButtonVisibility === outer1_17.WITH_CONTENT) {
            tmp4Result = null;
          }
        }
        trailingButton = tmp4Result;
      }
      return trailingButton;
    }
  };
  items[4] = {
    key: "renderTextView",
    value() {
      let accessibilityHint;
      let clearButtonVisibility;
      let disableConstantNumberOfLines;
      let disabled;
      let editable;
      let inActionSheet;
      let inputTextColor;
      let inputTextStyle;
      let large;
      let maxLength;
      let numberOfLines;
      let onChangeText;
      let onFocus;
      let placeholder;
      let placeholderTextColor;
      let style;
      let trailingButton;
      let value;
      const self = this;
      const props = this.props;
      ({ numberOfLines, inputTextColor, placeholder, placeholderTextColor, large, maxLength, trailingButton, clearButtonVisibility, style, onChangeText, onFocus, value } = props);
      ({ disableConstantNumberOfLines, editable, accessibilityHint, inActionSheet, disabled, inputTextStyle } = props);
      const tmp2 = outer1_4(props, outer1_3);
      const items = [outer1_16(this.context).inputView, , , , ];
      let obj = {};
      let num = 21;
      if (disableConstantNumberOfLines) {
        if (large) {
          num = 30;
        }
        obj.maxHeight = num * numberOfLines;
        let tmp3 = obj;
      } else {
        let num2 = num;
        if (large) {
          num2 = 30;
        }
        obj.minHeight = num2 * numberOfLines;
        tmp3 = obj;
      }
      items[1] = tmp3;
      if (null != inputTextColor) {
        obj = { color: inputTextColor };
      } else {
        obj = {};
      }
      items[2] = obj;
      if (large) {
        const obj1 = { fontSize: 25, fontFamily: outer1_13.PRIMARY_SEMIBOLD };
        let obj2 = obj1;
      } else {
        obj2 = {};
      }
      items[3] = obj2;
      items[4] = inputTextStyle;
      if (null != placeholderTextColor) {
        let formatToPlainStringResult;
        if (null != maxLength) {
          const intl = InputView(outer1_2[15]).intl;
          const obj3 = { maxLength };
          formatToPlainStringResult = intl.formatToPlainString(InputView(outer1_2[15]).t["+DFxLc"], obj3);
        }
        const items1 = [formatToPlainStringResult, accessibilityHint];
        const _Boolean = Boolean;
        const found = items1.filter(Boolean);
        const joined = found.join(",");
        if (inActionSheet) {
          let TextInput = outer1_1(outer1_2[18]);
        } else {
          TextInput = InputView(outer1_2[13]).TextInput;
        }
        const obj4 = {};
        let obj5 = { disabled };
        obj4.accessibilityState = obj5;
        obj4.style = items;
        ({ setRef: obj9.ref, handleChangeText: obj9.onChangeText, handleFocus: obj9.onFocus, handleBlur: obj9.onBlur, handleEndEditing: obj9.onEndEditing, handleSubmitEditing: obj9.onSubmitEditing } = self);
        obj4.value = this.state.value;
        obj4.clearButtonMode = "never";
        let tmp21;
        if (null != placeholder) {
          tmp21 = placeholder;
        }
        obj4.placeholder = tmp21;
        obj4.placeholderTextColor = placeholderTextColor;
        obj4.editable = editable;
        obj4.maxLength = maxLength;
        obj4.accessibilityHint = joined;
        const merged = Object.assign(tmp2);
        return outer1_14(TextInput, obj4);
      } else {
        obj5 = InputView(outer1_2[17]);
        const unsafe_rawColors = outer1_1(outer1_2[11]).unsafe_rawColors;
        const isThemeDarkResult = obj5.isThemeDark(self.context.theme);
      }
    }
  };
  items[5] = {
    key: "render",
    value() {
      const self = this;
      const tmp = outer1_16(this.context);
      const props = this.props;
      const disabled = props.disabled;
      let obj = { accessible: false, onPress: this.focus };
      obj = {};
      const items = [props.style, ];
      let disabled2 = disabled;
      if (disabled) {
        disabled2 = tmp.disabled;
      }
      items[1] = disabled2;
      obj.style = items;
      let str = "auto";
      if (disabled) {
        str = "none";
      }
      obj.pointerEvents = str;
      const items1 = [self.renderTopContainer(), , , , ];
      obj = { style: items2 };
      items2 = [tmp.inputContainer, props.inputContainerStyle];
      const items3 = [self.renderTextView(), self.renderTrailingButton()];
      obj.children = items3;
      items1[1] = outer1_15(outer1_10, obj);
      const obj4 = InputView(outer1_2[19]);
      const tmp2 = outer1_14;
      const tmp3 = outer1_12;
      const tmp4 = outer1_15;
      const tmp5 = outer1_10;
      items1[2] = InputView(outer1_2[19]).isAndroid() && self.renderBorder();
      items1[3] = self.renderBottomContainer();
      const tmp6 = InputView(outer1_2[19]).isAndroid() && self.renderBorder();
      const obj5 = InputView(outer1_2[19]);
      items1[4] = !InputView(outer1_2[19]).isAndroid() && self.renderBorder();
      obj.children = items1;
      obj.children = tmp4(tmp5, obj);
      return tmp2(tmp3, obj);
    }
  };
  let items1 = [
    {
      key: "getDerivedStateFromProps",
      value(value, valueProp) {
        value = value.value;
        if (value !== valueProp.valueProp) {
          if (value !== valueProp.value) {
            const obj = { value, valueProp: value };
          }
          return { valueProp: value };
        }
      }
    }
  ];
  return callback(InputView, items, items1);
})(importAllResult.PureComponent);
tmp5.contextType = require("ManaContext").ThemeContext;
tmp5.defaultProps = { showBorder: true, value: "", returnKeyType: "next", disabled: false, autoFocus: false, multiline: false, numberOfLines: 1, showTopContainer: true, showCharactersRemaining: false, clearButtonVisibility: "never", inActionSheet: false };
const obj6 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let result = require("_defineProperties").fileFinishedImporting("design/void/InputView/native/InputView.tsx");

export default tmp5;
export const ClearButtonVisibility = obj7;
