// Module ID: 13432
// Function ID: 13433
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 13432 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDLocalImageThumbnail", validAttributes: { localImageSource: true } };
const value = setRuntimeConfigProvider.get("DCDLocalImageThumbnail", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
