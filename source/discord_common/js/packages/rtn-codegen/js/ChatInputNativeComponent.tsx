// Module ID: 11106
// Function ID: 86441
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 11106 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } } };
obj = { flexDirection: 0.000000000000000000000000000000000000000000000000000000000000000000000035450019099207514, justifyContent: 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, alignItems: 0.00000000000000000000000000000000000000000000000000000000000004133626244465608, overflow: 7020283123010096000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, width: 0.00000000000000000000000000000000000000000000000000000000000004667261458271609, height: 0.000000000000000000000000000000000000000000000000000000000000000000000001218025044729782, marginRight: 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, borderRadius: 0.00000000000000000000000000000000000000000000000000000000000004667261426588725, resizeMode: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008566096291392292, 1011962599: 0.6, -860462179: "BounceOutLeft", 986473376: null };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ a: "computeFrecency", k: "uniqueDwelledCount", variant: "uniqueDwelledCount", style: "uniqueDwelledCount", children: "partnerId", 474931905: "GuildEventDescription", 1618910850: "AggregateError", 1658429521: "generateIdFn", -1521374121: 73294138347815640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }));
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
