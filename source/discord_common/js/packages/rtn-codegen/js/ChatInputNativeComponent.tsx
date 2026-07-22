// Module ID: 11107
// Function ID: 86454
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 11107 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } } };
obj = { FM0+HZ: "GAME_CLAIM_COACHMARK", GiftingBadgeExperiment: "StretchOutY", selectedIcon: "StretchOutY", k0Q31F: "StretchOutY", batchesToRender: "MARKETING_CAMPAIGN_ELIGIBILITY", contentInset: "scrollDistanceWithRespectToSnapPoints", disableLegacyGestureHandling: "%BigInt%", disableRecyclingOnFullCompute: "SET_GUILD_MEMBER", stickyHeaderFooter: "StretchOutY", getOwnPropertyNames: "StretchOutY", _i: "isXMLFile", systemPrefersCrossfadesChanged: "EMOJIS_EVERYWHERE" };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ -1032164889: 0.0000000000000000000000000000000000000000000000000000000000000000000000012271448387229323, -2112074014: 0.3, 1365278366: 0.00000000000000000000000000000000000000000000000000000000000004667253317632887, 1466096028: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008681444118859228, 28070317: -72460078556573560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -933242013: 0.00000000000000000000000000000000000000000000000000000000000004665176952123818, -1637844376: 0.000000000000000000000000000000000000001116599379101834, 1785447101: 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, 1618634666: 0.00000000000000000000000000000000000000000000000000000000000004133627896221472 }));
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
