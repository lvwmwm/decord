// Module ID: 7963
// Function ID: 63029
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 7963 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "ClipView", validAttributes: { cutouts: true } };
const value = get.get("ClipView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
