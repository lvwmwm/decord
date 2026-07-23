// Module ID: 9294
// Function ID: 72613
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9294 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDMessageView", validAttributes: { row: true } };
const value = get.get("DCDMessageView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/MessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
