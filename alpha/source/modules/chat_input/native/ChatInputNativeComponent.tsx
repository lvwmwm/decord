// Module ID: 12808
// Function ID: 12809
// Name: chat_input/ChatInputNativeComponent
// Dependencies: [19, 5038, 21, 5014, 575, 1113, 5253, 5021, 5011, 1375, 12809, 12813, 12796, 2]

// Module 12808 (chat_input/ChatInputNativeComponent)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import shared from "shared" /* 5021 */;
import useTheme from "useTheme" /* 5253 */;
import ChatInputNativeComponent2 from "ChatInputNativeComponent" /* 12796 */;
import MobileMarkdownFormatMenuExperiment from "MobileMarkdownFormatMenuExperiment" /* 12813 */;
import react from "react" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5038 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
class ChatInputNativeComponent {
  constructor(markAsSpoilerTitle) {
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
    let ref;
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
    let maxHeight = markAsSpoilerTitle.maxHeight;
    ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset, ref } = markAsSpoilerTitle);
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
    const tmp4Result4 = PlatformUtils;
    if (!tmp4Result4.isAndroid()) {
      tmp13 = customKeyboard;
    }
    PlatformUtils;
    let num2 = 2;
    if (isThemeDarkResult) {
      num2 = 1;
    }
    const tmp14 = tmp10(12809)(onMaxHeightChanged);
    const tmp4Result6 = MobileMarkdownFormatMenuExperiment;
    const isMobileMarkdownFormatMenuEnabled = tmp4Result6.useIsMobileMarkdownFormatMenuEnabled("ChatInputNativeComponent");
    const obj3 = { accessible, accessibilityLabel: tmp12, children: tmp13, editable, showFormatMenu: isMobileMarkdownFormatMenuEnabled, keyboardAppearance: num2, keyboardType: "default", markAsSpoilerTitle, maxHeight, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: color2, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style, textColor: color, verticalInset };
    const _default = ChatInputNativeComponent2.default;
    const tmp16 = jsx;
    if (maxHeight == null) {
      maxHeight = tmp14;
    }
    return tmp16(_default, obj3);
  }
}
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { style: { flex: 1 }, textColor: obj2, placeholderColor: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
const hasOwnProperty = createStyles(obj);
ChatInputNativeComponent.displayName = "ChatInputNativeComponent";
const result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default ChatInputNativeComponent;
