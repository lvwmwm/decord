// Module ID: 8637
// Function ID: 8638
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8637 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDAutoModerationSystemMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDAutoModerationSystemMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
