// Module ID: 11386
// Function ID: 88519
// Name: ChatInputNativeComponent
// Dependencies: [57, 31, 27, 3942, 33, 4130, 689, 1212, 4066, 3976, 3974, 477, 11136, 11142, 11144, 2]

// Module 11386 (ChatInputNativeComponent)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "get ActivityIndicator";

const require = arg1;
let obj = { style: { flex: 1 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
obj.textColor = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj.placeholderColor = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
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
    const intl = _require(1212).intl;
    markAsSpoilerTitle = intl.string(_require(1212).t["gsI+xC"]);
  }
  _require = undefined;
  ({ setNoExtractUI, shouldShowCursor, onBeginFocus, onEndBlur, onChangeContentSize, onMaxHeightChanged, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, verticalInset } = markAsSpoilerTitle);
  const tmp3 = callback2();
  let obj = _require(4066);
  const theme = obj.useTheme();
  const isThemeDarkResult = _require(3976).isThemeDark(theme);
  const obj2 = _require(3976);
  const unsafe_rawColors = importDefault(689).unsafe_rawColors;
  let num2 = 0.6;
  if (null != gradientPreset.gradientPreset) {
    num2 = 0.8;
  }
  const obj3 = _require(3974);
  const tmp6 = isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
  const hexWithOpacityResult = _require(3974).hexWithOpacity(isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500, num2);
  let tmp8;
  if (!obj4.isAndroid()) {
    tmp8 = accessibilityLabel;
  }
  obj4 = _require(477);
  let tmp9;
  if (!obj5.isAndroid()) {
    tmp9 = customKeyboard;
  }
  obj5 = _require(477);
  let num3 = 2;
  if (isThemeDarkResult) {
    num3 = 1;
  }
  const obj6 = _require(477);
  const tmp10 = importDefault(11136)(onMaxHeightChanged);
  _require = _require(11142).useShouldUseFabricChatInput();
  obj = { accessibilityLabel: tmp8, children: tmp9, editable, keyboardAppearance: num3, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp10, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset };
  return jsx(callback(importAllResult.useState(() => {
    if (callback) {
      let _default = callback(outer1_2[14]).default;
    } else {
      _default = outer1_8;
    }
    return _default;
  }), 1)[0], { accessibilityLabel: tmp8, children: tmp9, editable, keyboardAppearance: num3, keyboardType: "default", markAsSpoilerTitle, maxHeight: tmp10, onBeginFocus, onEndBlur, onChangeContentSize, onSelectionOrTextChange, onTextFlushed, onPasteImage, onPasteCommand, onTapAction, onRequestSend, placeholder, placeholderColor: tmp3.placeholderColor.color, ref, selectionColor: hexWithOpacityResult, setNoExtractUI, shouldShowCursor, style: tmp3.style, textColor: tmp3.textColor.color, verticalInset });
});
if (set.isAndroid()) {
  let _default = require("__INTERNAL_VIEW_CONFIG").default;
} else {
  _default = require("get ActivityIndicator").requireNativeComponent("DCDChatInputLegacy");
}
forwardRefResult.displayName = "ChatInputNativeComponent";
const result = set.fileFinishedImporting("modules/chat_input/native/ChatInputNativeComponent.tsx");

export default forwardRefResult;
