// Module ID: 11733
// Function ID: 11734
// Name: chat_input/ChatInputNativeComponent
// Dependencies: [19, 4653, 21, 4836, 576, 1115, 4767, 4685, 4683, 1364, 11513, 11471, 2]

// Module 11733 (chat_input/ChatInputNativeComponent)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import shared from "shared" /* 4685 */;
import useTheme from "useTheme" /* 4767 */;
import ChatInputNativeComponent from "ChatInputNativeComponent" /* 11471 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4653 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let markAsSpoilerTitle;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { style: { flex: 1 }, textColor: obj2, placeholderColor: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles(obj);
const forwardRefResult = react.forwardRef((markAsSpoilerTitle, ref) => {
  let PRIMARY_500;
  let accessibilityLabel;
  let accessible;
  let customKeyboard;
  let editable;
  let onBeginFocus;
  let onChangeContentSize;
  let onEndBlur;
  let onMaxHeightChanged;
  let onPasteCommand;
  let onPasteImage;
  let onRequestSend;
  let onSelectionOrTextChange;
  let onTapAction;
  let onTextFlushed;
  let placeholder;
  let setNoExtractUI;
  let shouldShowCursor;
  let tmp10;
  let verticalInset;
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = intl2.intl;
    markAsSpoilerTitle = intl.string(intl2.t["gsI+xC"]);
  }
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = closure_5();
  const style = tmp3.style;
  const color = tmp3.textColor.color;
  const color2 = tmp3.placeholderColor.color;
  const obj = useTheme;
  const theme = obj.useTheme();
  const obj2 = shared;
  const isThemeDarkResult = obj2.isThemeDark(theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    PRIMARY_500 = unsafe_rawColors.WHITE;
    tmp10 = tmp9;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp10 = tmp9;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  let tmp12;
  const hexWithOpacityResult = hexWithOpacity(PRIMARY_500, num);
  const tmp4Result = PlatformUtils;
  if (!tmp4Result.isAndroid()) {
    tmp12 = accessibilityLabel;
  }
  let tmp13;
  const tmp4Result3 = PlatformUtils;
  if (!tmp4Result3.isAndroid()) {
    tmp13 = customKeyboard;
  }
  PlatformUtils;
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  return jsx(ChatInputNativeComponent.default, { accessible, accessibilityLabel: tmp12, children: tmp13, editable, keyboardAppearance: num2, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp10(11513)(onMaxHeightChanged), onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: color2, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style, textColor: color, verticalInset });
});
forwardRefResult.displayName = "ChatInputNativeComponent";
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
