// Module ID: 12504
// Function ID: 12505
// Name: chat_input/ChatInputNativeComponent
// Dependencies: [19, 4575, 21, 4756, 576, 1115, 4690, 4607, 4605, 1364, 12284, 12242, 2]

// Module 12504 (chat_input/ChatInputNativeComponent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ColorUtils from "ColorUtils" /* 4605 */;
import shared from "shared" /* 4607 */;
import useTheme from "useTheme" /* 4690 */;
import ChatInputNativeComponent from "ChatInputNativeComponent" /* 12242 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4575 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = { style: { flex: 1 }, textColor: { color: nativeDefault.colors.TEXT_DEFAULT }, placeholderColor: null };
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj.placeholderColor = { color: nativeDefault.colors.TEXT_MUTED };
let closure_5 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((markAsSpoilerTitle, ref) => {
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessible, accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = util.intl;
    markAsSpoilerTitle = intl.string(util.t["gsI+xC"]);
  }
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = closure_5();
  const theme = useTheme.useTheme();
  const isThemeDarkResult = shared.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let PRIMARY_500 = unsafe_rawColors.WHITE;
    let tmp9 = tmp8;
  } else {
    PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
    tmp9 = tmp8;
  }
  let num = 0.6;
  if (null != ClientThemesBackgroundStore.gradientPreset) {
    num = 0.8;
  }
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(PRIMARY_500, num);
  let tmp11;
  if (!tmp4Result.isAndroid()) {
    tmp11 = accessibilityLabel;
  }
  tmp4Result = PlatformUtils;
  let tmp12;
  if (!tmp4Result3.isAndroid()) {
    tmp12 = customKeyboard;
  }
  tmp4Result3 = PlatformUtils;
  let num2 = 2;
  if (isThemeDarkResult) {
    num2 = 1;
  }
  const tmp4Result4 = PlatformUtils;
  const tmp13 = tmp9(12284)(onMaxHeightChanged);
  return jsx(ChatInputNativeComponent.default, { accessible, accessibilityLabel: tmp11, children: tmp12, editable, keyboardAppearance: num2, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp9(12284)(onMaxHeightChanged), onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset });
});
forwardRefResult.displayName = "ChatInputNativeComponent";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
