// Module ID: 8401
// Function ID: 8402
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8401 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDSystemMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDSystemMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
