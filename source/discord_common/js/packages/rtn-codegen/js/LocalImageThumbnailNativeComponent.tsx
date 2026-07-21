// Module ID: 12889
// Function ID: 98405
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 12889 (__INTERNAL_VIEW_CONFIG)
const obj = { uiViewClassName: "DCDLocalImageThumbnail", validAttributes: { localImageSource: true } };
const _module = require(dependencyMap[0]);
const value = _module.get("DCDLocalImageThumbnail", () => obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LocalImageThumbnailNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
