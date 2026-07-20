// Module ID: 10567
// Function ID: 82512
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 10567 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } } };
obj = {};
const _module = require(dependencyMap[0]);
const merged = Object.assign(_module.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
obj.validAttributes = obj;
const _module1 = require(dependencyMap[1]);
obj = {
  zoomTo(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "zoomTo", items);
  },
  unzoom(nodeFromPublicInstance) {
    const items = [arg1];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "unzoom", items);
  }
};
const value = _module1.get("DCDZoomLayoutAndroid", () => obj);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
