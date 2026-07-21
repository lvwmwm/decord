// Module ID: 9368
// Function ID: 73070
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9368 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({}));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
obj = {
  refreshEmojis(current) {
    require(dependencyMap[2]).dispatchCommand(current, "refreshEmojis", []);
  },
  scrollingEnabled(current, arg1) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(current, "scrollingEnabled", items);
  },
  scrollToHeaderIndex(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "scrollToHeaderIndex", items);
  }
};
const value = _module1.get("EmojiPickerView", () => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
