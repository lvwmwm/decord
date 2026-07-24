// Module ID: 9332
// Function ID: 72826
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9332 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDAutoModerationSystemMessageView", validAttributes: { row: true } };
const value = get.get("DCDAutoModerationSystemMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/AutoModerationSystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
