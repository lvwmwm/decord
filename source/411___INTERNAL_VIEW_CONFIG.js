// Module ID: 411
// Function ID: 5824
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 411 (__INTERNAL_VIEW_CONFIG)
importAll(dependencyMap[0]);
let obj = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } } };
obj = {};
obj = {};
const tmp3 = arg1(dependencyMap[1]);
let _default = tmp3;
if ("default" in tmp3) {
  _default = tmp3.default;
}
obj.process = _default;
obj.colors = obj;
obj.progressBackgroundColor = { process: arg1(dependencyMap[2]).default };
const obj1 = { process: arg1(dependencyMap[2]).default };
obj.validAttributes = Object.assign(obj, arg1(dependencyMap[3]).ConditionallyIgnoredEventHandlers({ onRefresh: true }));
const obj5 = arg1(dependencyMap[3]);

export default arg1(dependencyMap[4]).get("AndroidSwipeRefreshLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    refreshing(dependencyMap[5]).dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};
