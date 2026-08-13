// Module ID: 10679
// Function ID: 10680
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [106, 65, 2]

// Module 10679 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } }, validAttributes: null };
obj = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("DCDVideoRenderer", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
