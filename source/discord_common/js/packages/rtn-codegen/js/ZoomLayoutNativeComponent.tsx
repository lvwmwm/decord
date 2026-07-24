// Module ID: 10613
// Function ID: 82801
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 117, 2]

// Module 10613 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } } };
obj = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
obj.validAttributes = obj;
obj = {
  zoomTo(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "zoomTo", items);
  },
  unzoom(nodeFromPublicInstance) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "unzoom", items);
  }
};
const value = get.get("DCDZoomLayoutAndroid", () => obj);
const result = require("renderElement").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
