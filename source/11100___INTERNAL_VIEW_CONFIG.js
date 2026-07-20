// Module ID: 11100
// Function ID: 86406
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 11100 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDChatInput", directEventTypes: { topChangeContentSize: { registrationName: "onChangeContentSize" }, topEndBlur: { registrationName: "onEndBlur" }, topBeginFocus: { registrationName: "onBeginFocus" }, topSelectionOrTextChange: { registrationName: "onSelectionOrTextChange" }, topTextFlushed: { registrationName: "onTextFlushed" }, topPasteImage: { registrationName: "onPasteImage" }, topPasteCommand: { registrationName: "onPasteCommand" }, topRequestSend: { registrationName: "onRequestSend" }, topTapAction: { registrationName: "onTapAction" } } };
obj = { cardMarginRight: 553648128, mediaType: 570565377, includeBase64: 356625, quality: 17956864, videoQuality: 369, saveToPhotos: 1912672512, skipProcessing: 16, floatingCloseIcon: 5, userAgeRange: -1374408415, linked_user_ids: -193273529, canPostPolls: 1895907411, onHeightChange: 1 };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ reminder_ribbon: -19421278612802764, onNavigationStateChange: 0.00000000000000000000000000000000000000000000000000000000000004667261458271609, GameDepthTier9SmallBadge: 0.000000000000000000000000000000000000000000000000000000000000000000000001215228005639001, Google: 241979899612687240000000000000000000000000000000000000000000000000000000000000000000, ContentInventoryFeedKey: 0.00000000000000000000000000000000000000000000000000000000000004667261426588801, updateNativeMute: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008658659363906192, secondsInMonth: 0.6, pending_buf_size: "BounceOut", PrivacyShieldBannerSpotIllustration: null }));
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
