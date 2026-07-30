// Module ID: 9288
// Function ID: 9289
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 9288 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDSystemMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDSystemMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
