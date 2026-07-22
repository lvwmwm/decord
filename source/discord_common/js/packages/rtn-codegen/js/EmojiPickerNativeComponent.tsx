// Module ID: 9369
// Function ID: 73094
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9369 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } } };
obj = { <string:3014752232>: 65535, <string:58184620>: 18939904, <string:4273089877>: 287441443, <string:3731229132>: 1393, <string:60061214>: 1895895552, <string:3392175740>: 1, <string:2040162241>: 275906833 };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ "Null": 65535, "Null": 18939904, "Null": 287441443, "Null": 1393, "Null": 1895895552, "Null": 1, "Null": 275906833 }));
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
