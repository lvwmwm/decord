// Module ID: 14100
// Function ID: 14101
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 14100 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDLocalImageThumbnail", validAttributes: { localImageSource: true } };
const value = setRuntimeConfigProvider.get("DCDLocalImageThumbnail", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
