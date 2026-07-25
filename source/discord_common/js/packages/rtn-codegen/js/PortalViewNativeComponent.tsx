// Module ID: 8059
// Function ID: 64154
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42, 2]

// Module 8059 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "DCDPortalView", directEventTypes: { topPortalViewLoaded: { registrationName: "onPortalViewLoaded" } } };
obj = { portal: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onPortalViewLoaded: true }));
obj.validAttributes = obj;
const value = get.get("DCDPortalView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/PortalViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
