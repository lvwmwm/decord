// Module ID: 14210
// Function ID: 14211
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 14210 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DiscordGestureHandlerRootView", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DiscordGestureHandlerRootView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
