// Module ID: 4147
// Function ID: 4148
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 4147 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "ReanimatedView", validAttributes: { hasEnteringAnimation: true } };
const value = setRuntimeConfigProvider.get("ReanimatedView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
