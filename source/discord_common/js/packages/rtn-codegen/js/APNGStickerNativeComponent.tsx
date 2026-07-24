// Module ID: 9653
// Function ID: 75116
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9653 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = get.get("APNGStickerView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
