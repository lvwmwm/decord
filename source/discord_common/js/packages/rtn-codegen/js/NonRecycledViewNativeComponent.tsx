// Module ID: 12055
// Function ID: 12056
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 12055 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDNonRecycledView", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDNonRecycledView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NonRecycledViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
