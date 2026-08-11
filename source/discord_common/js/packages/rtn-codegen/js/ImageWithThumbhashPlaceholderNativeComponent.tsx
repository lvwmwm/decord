// Module ID: 9344
// Function ID: 9345
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 9344 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDImageWithThumbhashPlaceholderView", validAttributes: { uri: true, placeholder: true, placeholderVersion: true, alt: true } };
const value = setRuntimeConfigProvider.get("DCDImageWithThumbhashPlaceholderView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ImageWithThumbhashPlaceholderNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
