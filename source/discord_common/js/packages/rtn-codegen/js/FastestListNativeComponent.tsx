// Module ID: 9237
// Function ID: 72237
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 9237 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "FastestList", directEventTypes: { topLayout: { registrationName: "onLayout" }, topScroll: { registrationName: "onScroll" }, topScrollBeginDrag: { registrationName: "onScrollBeginDrag" }, topScrollEndDrag: { registrationName: "onScrollEndDrag" }, topVisibleItemsChanged: { registrationName: "onVisibleItemsChanged" }, topUnexpectedItemSize: { registrationName: "onUnexpectedItemSize" } } };
obj = { location: null, accessible: null, next: null, spriteIndex: null, opacity: null, PX_8: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001153953053535477, tintColor: 0.00000000000000000000000000000000000000000000004689095813645179, width: -44890842246276977000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, height: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002407817175865411, marginVertical: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001006140661564316 };
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ <string:1150495611>: "y", <string:3029535646>: "onPlayerStateChange", <string:1386382508>: "r", <string:3056333555>: "inactiveDotElement", <string:806923091>: "handleActivityJoin", <string:1687195285>: "japan" }));
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
