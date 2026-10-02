// Module ID: 5897
// Function ID: 5898
// Name: FastImageNativeComponent
// Dependencies: [81, 106, 65, 2]

// Module 5897 (FastImageNativeComponent)
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDFastImageView", directEventTypes: { topLoadStart: { registrationName: "onLoadStart" }, topProgress: { registrationName: "onProgress" }, topError: { registrationName: "onError" }, topLoad: { registrationName: "onLoad" }, topLoadEnd: { registrationName: "onLoadEnd" } }, validAttributes: obj2 };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj2 = { source: { process: resolveAssetSource }, resizeMode: true, placeholder: true, enableAnimation: true, paused: true, manualPlayback: true, fade: true, usesSmallCache: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onLoadStart: true, onProgress: true, onError: true, onLoad: true, onLoadEnd: true }));
const value = module_65.get("DCDFastImageView", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
