// Module ID: 11340
// Function ID: 88181
// Name: ChatInputNativeComponent
// Dependencies: []

// Module 11340 (ChatInputNativeComponent)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj1 = arg1(dependencyMap[5]);
let obj = { style: { flex: 1 } };
obj = { color: importDefault(dependencyMap[6]).colors.TEXT_DEFAULT };
obj.textColor = obj;
obj1 = { color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
obj.placeholderColor = obj1;
let closure_7 = obj1.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((markAsSpoilerTitle, ref) => {
  let accessibilityLabel;
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
  let verticalInset;
  markAsSpoilerTitle = markAsSpoilerTitle.markAsSpoilerTitle;
  ({ accessibilityLabel, customKeyboard, placeholder, editable } = markAsSpoilerTitle);
  if (markAsSpoilerTitle === undefined) {
    const intl = callback(dependencyMap[7]).intl;
    markAsSpoilerTitle = intl.string(callback(dependencyMap[7]).t.gsI+xC);
  }
  let callback;
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = callback3();
  let obj = callback(dependencyMap[8]);
  const theme = obj.useTheme();
  const isThemeDarkResult = callback(dependencyMap[9]).isThemeDark(theme);
  const obj2 = callback(dependencyMap[9]);
  const unsafe_rawColors = importDefault(dependencyMap[6]).unsafe_rawColors;
  let num2 = 0.6;
  if (null != gradientPreset.gradientPreset) {
    num2 = 0.8;
  }
  const obj3 = callback(dependencyMap[10]);
  const tmp6 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
  const hexWithOpacityResult = callback(dependencyMap[10]).hexWithOpacity(isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500, num2);
  let tmp8;
  if (!obj4.isAndroid()) {
    tmp8 = accessibilityLabel;
  }
  const obj4 = callback(dependencyMap[11]);
  let tmp9;
  if (!obj5.isAndroid()) {
    tmp9 = customKeyboard;
  }
  const obj5 = callback(dependencyMap[11]);
  let num3 = 2;
  if (isThemeDarkResult) {
    num3 = 1;
  }
  const obj6 = callback(dependencyMap[11]);
  const tmp10 = importDefault(dependencyMap[12])(onMaxHeightChanged);
  callback = callback(dependencyMap[13]).useShouldUseFabricChatInput();
  obj = { accessibilityLabel: tmp8, children: tmp9, editable, keyboardAppearance: num3, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp10, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset };
  return jsx(callback2(importAllResult.useState(() => {
    if (callback) {
      let _default = callback(closure_2[14]).default;
    } else {
      _default = closure_8;
    }
    return _default;
  }), 1)[0], obj);
});
if (obj6.isAndroid()) {
  let _default = arg1(dependencyMap[14]).default;
} else {
  _default = arg1(dependencyMap[2]).requireNativeComponent("DCDChatInputLegacy");
}
forwardRefResult.displayName = "ChatInputNativeComponent";
const obj6 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
