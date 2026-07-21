// Module ID: 11106
// Function ID: 86429
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 11106 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({}));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
obj = {
  backspace(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "backspace", []);
  },
  blur(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  openCustomKeyboard(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "openCustomKeyboard", []);
  },
  closeCustomKeyboard(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "closeCustomKeyboard", []);
  },
  openSystemKeyboard(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "openSystemKeyboard", []);
  },
  replaceRange(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "replaceRange", items);
  },
  setSelectedRange(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "setSelectedRange", items);
  },
  setText(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  flushText(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "flushText", items);
  },
  updateTextBlocks(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "updateTextBlocks", items);
  }
};
const value = _module1.get("DCDChatInput", () => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
