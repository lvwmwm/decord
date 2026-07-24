// Module ID: 11144
// Function ID: 86693
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117, 2]

// Module 11144 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } } };
obj = { textColor: true, editable: true, shouldShowCursor: true, placeholder: true, placeholderColor: true, markAsSpoilerTitle: true, keyboardAppearance: true, selectionColor: true, setNoExtractUI: true, keyboardType: true, maxHeight: true, verticalInset: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onChangeContentSize: true, onEndBlur: true, onBeginFocus: true, onSelectionOrTextChange: true, onTextFlushed: true, onPasteImage: true, onPasteCommand: true, onRequestSend: true, onTapAction: true }));
obj.validAttributes = obj;
obj = {
  backspace(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "backspace", []);
  },
  blur(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  openCustomKeyboard(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "openCustomKeyboard", []);
  },
  closeCustomKeyboard(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "closeCustomKeyboard", []);
  },
  openSystemKeyboard(nodeFromPublicInstance) {
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "openSystemKeyboard", []);
  },
  replaceRange(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "replaceRange", items);
  },
  setSelectedRange(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "setSelectedRange", items);
  },
  setText(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  flushText(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "flushText", items);
  },
  updateTextBlocks(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "updateTextBlocks", items);
  }
};
const value = get.get("DCDChatInput", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
