// Module ID: 8269
// Function ID: 8270
// Name: APNGDecorationNativeComponent
// Dependencies: [106, 65, 114, 2]

// Module 8269 (APNGDecorationNativeComponent)
import renderElement from "renderElement" /* 114 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "APNGDecorationView", directEventTypes: { topLoad: { registrationName: "onLoad" } }, validAttributes: obj2 };
obj2 = { url: true, autoplay: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onLoad: true }));
const obj3 = {
  play(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "play", []);
  },
  pause(arg0) {
    const obj = renderElement;
    obj.dispatchCommand(arg0, "pause", []);
  },
  seek(arg0, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "seek", items);
  }
};
const value = module_65.get("APNGDecorationView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGDecorationNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;
