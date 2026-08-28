// Module ID: 4188
// Function ID: 4189
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 4188 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "ReanimatedView", validAttributes: { hasEnteringAnimation: true } };
const value = setRuntimeConfigProvider.get("ReanimatedView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ReanimatedViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
