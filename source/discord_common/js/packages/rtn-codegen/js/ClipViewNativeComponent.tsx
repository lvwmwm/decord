// Module ID: 8344
// Function ID: 8345
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8344 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "ClipView", validAttributes: { cutouts: true } };
const value = setRuntimeConfigProvider.get("ClipView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ClipViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
