// Module ID: 12980
// Function ID: 98798
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12980 (_isNativeReflectConstruct)
let Platform;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ View: closure_10, Pressable: closure_11, TouchableWithoutFeedback: closure_12, Platform } = arg1(dependencyMap[7]));
const Fonts = arg1(dependencyMap[8]).Fonts;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { disabled: { opacity: 0.5 }, topContainer: {}, inputViewTitle: { marginRight: 5 } };
obj = { fontSize: 10, color: importDefault(dependencyMap[11]).unsafe_rawColors.RED_400 };
obj.inputViewError = obj;
const tmp4 = arg1(dependencyMap[9]);
obj.inputBorder = { backgroundColor: importDefault(dependencyMap[11]).colors.TEXT_MUTED };
const obj2 = { indicatorSpace: false, indicatorSize: false, pageIndictor: false, width: false, paddingTop: false, color: arg1(dependencyMap[12]).DARK_PRIMARY_100_LIGHT_PRIMARY_500 };
obj.inputView = obj2;
obj.inputViewBorder = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[11]).colors.TEXT_MUTED };
obj.inputViewBorderActive = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.TRANSPARENT };
obj.inputContainer = { y: null, processOptOut: "99274532ad7fe616c031212e677b32e8", setNotificationCenterActive: "ThreadLockIcon" };
obj.bottomContainer = { marginTop: 5 };
const obj3 = { backgroundColor: importDefault(dependencyMap[11]).unsafe_rawColors.TRANSPARENT };
obj.charactersLength = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: arg1(dependencyMap[12]).DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
const obj4 = { alignSelf: "flex-end", fontFamily: Fonts.CODE_BOLD, color: arg1(dependencyMap[12]).DARK_PRIMARY_400_LIGHT_PRIMARY_300 };
obj.closeIcon = { tintColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.clearButton = {};
const obj5 = { tintColor: importDefault(dependencyMap[11]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.required = { color: importDefault(dependencyMap[11]).unsafe_rawColors.RED_400 };
let closure_16 = obj.createLegacyClassComponentStyles(obj);
const obj7 = { NEVER: "never", WITH_CONTENT: "with-content", ALWAYS: "always" };
const tmp5 = (PureComponent) => {
  class InputView {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, InputView);
      items1 = [...items];
      obj = closure_8(InputView);
      tmp2 = closure_7;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      InputView = tmp2Result;
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
          const onChangeText = arg0.props.onChangeText;
          if (null != onChangeText) {
            onChangeText(arg0);
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
        tmp2Result._ref = _ref;
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
  const arg1 = InputView;
  callback2(InputView, PureComponent);
  let obj = {
    key: "renderBorder",
    value() {
      const tmp = callback7(this.context);
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
        return closure_14(closure_10, obj);
      } else {
        return null;
      }
    }
  };
  const items = [obj, , , , , ];
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
      const tmp = callback7(this.context);
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
        const items1 = [null, error, ")"];
        obj["children"] = items1;
        tmp3 = callback6(InputView(closure_2[13]).LegacyText, obj);
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
        tmp12Result = callback5(InputView(closure_2[14]).Text, obj);
        const tmp12 = callback5;
      }
      let tmp15 = null != helpText;
      if (tmp15) {
        tmp15 = "" !== helpText;
      }
      let tmp16;
      if (tmp15) {
        obj = { variant: "text-xs/medium", children: helpText };
        tmp16 = callback5(InputView(closure_2[14]).Text, obj);
      }
      const obj1 = { style: tmp.topContainer };
      const items3 = [tmp12Result, tmp16, , ];
      let tmp22 = null == tmp3;
      if (tmp22) {
        tmp22 = required;
      }
      if (tmp22) {
        const obj2 = { style: tmp.required, children: "*" };
        tmp22 = callback5(InputView(closure_2[13]).LegacyText, obj2);
      }
      items3[2] = tmp22;
      items3[3] = tmp3;
      obj1.children = items3;
      return callback6(closure_10, obj1);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderBottomContainer",
    value() {
      const self = this;
      const tmp = callback7(this.context);
      const props = this.props;
      const maxLength = props.maxLength;
      let tmp2 = null;
      if (props.showCharactersRemaining) {
        tmp2 = null;
        if (null != maxLength) {
          let obj = { style: tmp.bottomContainer };
          obj = { accessible: true, style: tmp.charactersLength };
          const intl = InputView(closure_2[15]).intl;
          obj = { remainingCharacters: maxLength - self.getText().length };
          obj.accessibilityLabel = intl.formatToPlainString(InputView(closure_2[15]).t.fR1cof, obj);
          obj.children = maxLength - self.getText().length;
          obj.children = callback5(InputView(closure_2[13]).LegacyText, obj);
          tmp2 = callback5(closure_10, obj);
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
        if (clearButtonVisibility === constants2.ALWAYS) {
          let obj = { premiumType: "al", onPress: self.handleClear, style: tmp.clearButton, claimableRewards: "isArrayBuffer", isSelected: "BGYkaH" };
          if (null == clearButtonAccessibilityLabel) {
            const intl = InputView(closure_2[15]).intl;
            clearButtonAccessibilityLabel = intl.string(InputView(closure_2[15]).t.VkKicb);
          }
          obj.accessibilityLabel = clearButtonAccessibilityLabel;
          obj = { size: "sm" };
          obj.children = callback5(InputView(closure_2[16]).CircleXIcon, obj);
          let tmp4Result = callback5(closure_11, obj);
          const tmp4 = callback5;
          const tmp5 = closure_11;
        } else {
          tmp4Result = null;
          if (clearButtonVisibility === constants2.WITH_CONTENT) {
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
      const tmp2 = callback2(props, closure_3);
      const items = [callback7(this.context).inputView, , , , ];
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
        const obj1 = { fontSize: 25, fontFamily: constants.PRIMARY_SEMIBOLD };
        let obj2 = obj1;
      } else {
        obj2 = {};
      }
      items[3] = obj2;
      items[4] = inputTextStyle;
      if (null != placeholderTextColor) {
        let formatToPlainStringResult;
        if (null != maxLength) {
          const intl = InputView(closure_2[15]).intl;
          const obj3 = { maxLength };
          formatToPlainStringResult = intl.formatToPlainString(InputView(closure_2[15]).t.+DFxLc, obj3);
        }
        const items1 = [formatToPlainStringResult, accessibilityHint];
        const _Boolean = Boolean;
        const found = items1.filter(Boolean);
        const joined = found.join(",");
        if (inActionSheet) {
          let TextInput = callback(closure_2[18]);
        } else {
          TextInput = InputView(closure_2[13]).TextInput;
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
        return closure_14(TextInput, obj4);
      } else {
        obj5 = InputView(closure_2[17]);
        const unsafe_rawColors = callback(closure_2[11]).unsafe_rawColors;
        const isThemeDarkResult = obj5.isThemeDark(self.context.theme);
      }
    }
  };
  items[5] = {
    key: "render",
    value() {
      const self = this;
      const tmp = callback7(this.context);
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
      const items2 = [tmp.inputContainer, props.inputContainerStyle];
      const items3 = [self.renderTextView(), self.renderTrailingButton()];
      obj.children = items3;
      items1[1] = callback6(closure_10, obj);
      const obj4 = InputView(closure_2[19]);
      const tmp2 = closure_14;
      const tmp3 = closure_12;
      const tmp4 = callback6;
      const tmp5 = closure_10;
      items1[2] = InputView(closure_2[19]).isAndroid() && self.renderBorder();
      items1[3] = self.renderBottomContainer();
      const tmp6 = InputView(closure_2[19]).isAndroid() && self.renderBorder();
      const obj5 = InputView(closure_2[19]);
      items1[4] = !InputView(closure_2[19]).isAndroid() && self.renderBorder();
      obj.children = items1;
      obj.children = tmp4(tmp5, obj);
      return tmp2(tmp3, obj);
    }
  };
  const items1 = [
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
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[20]).ThemeContext;
tmp5.defaultProps = {};
const obj6 = { color: importDefault(dependencyMap[11]).unsafe_rawColors.RED_400 };
const result = arg1(dependencyMap[21]).fileFinishedImporting("design/void/InputView/native/InputView.tsx");

export default tmp5;
export const ClearButtonVisibility = obj7;
