// Module ID: 8106
// Function ID: 8107
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8106 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "ClipView", validAttributes: { cutouts: true } };
const value = setRuntimeConfigProvider.get("ClipView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
