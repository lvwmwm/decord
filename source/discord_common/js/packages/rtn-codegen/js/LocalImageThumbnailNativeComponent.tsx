// Module ID: 13012
// Function ID: 100616
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 13012 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDLocalImageThumbnail", validAttributes: { localImageSource: true } };
const value = get.get("DCDLocalImageThumbnail", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
