// Module ID: 9238
// Function ID: 72261
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9238 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({}));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
obj = {
  scrollToLocation(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "scrollToLocation", items);
  },
  scrollToTop(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "scrollToTop", items);
  }
};
const value = _module1.get("FastestList", () => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastestListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
