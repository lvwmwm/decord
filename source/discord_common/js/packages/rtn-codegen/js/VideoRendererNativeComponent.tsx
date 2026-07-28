// Module ID: 10542
// Function ID: 81547
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 10542 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDVideoRenderer", directEventTypes: { topSize: { registrationName: "onSize" }, topReady: { registrationName: "onReady" } } };
obj = { useSurfaceDirectRenderer: true, streamId: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSize: true, onReady: true }));
obj.validAttributes = obj;
const value = get.get("DCDVideoRenderer", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
