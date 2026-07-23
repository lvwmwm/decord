// Module ID: 9245
// Function ID: 72302
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117, 2]

// Module 9245 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } } };
obj = { insetStart: true, insetEnd: true, horizontal: true, keyboardDismissOnDrag: true, placeholderConfig: true, renderAhead: true, scrollEventThrottle: true, sectionsVersioned: true, showsHorizontalScrollIndicator: true, showsVerticalScrollIndicator: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLayout: true, onScroll: true, onScrollBeginDrag: true, onScrollEndDrag: true, onVisibleItemsChanged: true, onUnexpectedItemSize: true }));
obj.validAttributes = obj;
obj = {
  scrollToLocation(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "scrollToLocation", items);
  },
  scrollToTop(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "scrollToTop", items);
  }
};
const value = get.get("FastestList", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
