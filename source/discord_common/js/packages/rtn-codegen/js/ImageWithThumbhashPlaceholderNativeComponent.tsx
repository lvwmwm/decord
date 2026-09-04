// Module ID: 8686
// Function ID: 8687
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8686 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDImageWithThumbhashPlaceholderView", validAttributes: { uri: true, placeholder: true, placeholderVersion: true, alt: true } };
const value = setRuntimeConfigProvider.get("DCDImageWithThumbhashPlaceholderView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ImageWithThumbhashPlaceholderNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
