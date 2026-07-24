// Module ID: 9412
// Function ID: 73344
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117, 2]

// Module 9412 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "EmojiPickerView", directEventTypes: { topStickyHeaderRender: { registrationName: "onStickyHeaderRender" }, topPressEmoji: { registrationName: "onPressEmoji" }, topLongPressEmoji: { registrationName: "onLongPressEmoji" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topShowNitroUpsell: { registrationName: "onShowNitroUpsell" } } };
obj = { config: true, paddingTop: true, paddingBottom: true, useTier0UpsellContent: true, emojiData: true, emojiMargin: true, emojiSize: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onStickyHeaderRender: true, onPressEmoji: true, onLongPressEmoji: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onShowNitroUpsell: true }));
obj.validAttributes = obj;
obj = {
  refreshEmojis(current) {
    require(117) /* renderElement */.dispatchCommand(current, "refreshEmojis", []);
  },
  scrollingEnabled(current, arg1) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(current, "scrollingEnabled", items);
  },
  scrollToHeaderIndex(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "scrollToHeaderIndex", items);
  }
};
const value = get.get("EmojiPickerView", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/EmojiPickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
