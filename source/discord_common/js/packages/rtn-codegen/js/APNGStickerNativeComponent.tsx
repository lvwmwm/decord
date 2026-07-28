// Module ID: 9615
// Function ID: 74836
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 9615 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "APNGStickerView", validAttributes: { url: true } };
const value = get.get("APNGStickerView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/APNGStickerNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
