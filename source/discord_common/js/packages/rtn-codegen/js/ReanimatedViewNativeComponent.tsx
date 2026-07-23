// Module ID: 3993
// Function ID: 33123
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 3993 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "ReanimatedView", validAttributes: { hasEnteringAnimation: true } };
const value = get.get("ReanimatedView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
