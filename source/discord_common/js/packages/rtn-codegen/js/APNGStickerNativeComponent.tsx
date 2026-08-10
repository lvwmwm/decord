// Module ID: 9851
// Function ID: 9852
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 9851 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = setRuntimeConfigProvider.get("APNGStickerView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
