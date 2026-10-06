// Module ID: 9152
// Function ID: 9153
// Name: ZoomLayoutNativeComponent
// Dependencies: [106, 65, 114, 2]

// Module 9152 (ZoomLayoutNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDZoomLayoutAndroid", directEventTypes: { topZoomChanged: { registrationName: "onZoomChanged" } }, validAttributes: obj2 };
obj2 = { gestureEnabled: true, minimumZoomScale: true, maximumZoomScale: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onZoomChanged: true }));
const obj3 = {
  zoomTo(arg0, arg1, arg2, arg3, arg4) {
    const items = [arg1, arg2, arg3, arg4];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "zoomTo", items);
  },
  unzoom(arg0, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "unzoom", items);
  }
};
const value = module_65.get("DCDZoomLayoutAndroid", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ZoomLayoutNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;
