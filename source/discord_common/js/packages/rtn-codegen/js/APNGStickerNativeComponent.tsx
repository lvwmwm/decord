// Module ID: 9617
// Function ID: 74905
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9617 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = get.get("APNGStickerView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
