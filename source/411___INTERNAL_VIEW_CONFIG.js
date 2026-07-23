// Module ID: 411
// Function ID: 5824
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [31, 89, 38, 110, 42, 117]

// Module 411 (__INTERNAL_VIEW_CONFIG)
import "result";
import processColorElement from "processColorElement";
import weakSet from "weakSet";
import get from "get";

const require = arg1;
let obj = { uiViewClassName: "AndroidSwipeRefreshLayout", directEventTypes: { topRefresh: { registrationName: "onRefresh" } } };
obj = { enabled: true, colors: null, progressBackgroundColor: null, size: true, progressViewOffset: true, refreshing: true };
obj = {};
if ("default" in processColorElement) {
  processColorElement = processColorElement.default;
}
obj.process = processColorElement;
obj.colors = obj;
obj.progressBackgroundColor = { process: require("processColor").default };
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onRefresh: true }));

export default get.get("AndroidSwipeRefreshLayout", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  setNativeRefreshing(_nativeRef, refreshing) {
    const items = [refreshing];
    require(117) /* renderElement */.dispatchCommand(_nativeRef, "setNativeRefreshing", items);
  }
};
