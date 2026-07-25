// Module ID: 9224
// Function ID: 72313
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9224 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDSystemMessageView", validAttributes: { row: true } };
const value = get.get("DCDSystemMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
