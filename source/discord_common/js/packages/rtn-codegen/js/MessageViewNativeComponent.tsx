// Module ID: 10068
// Function ID: 10069
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 10068 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
