// Module ID: 13629
// Function ID: 13630
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 13629 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DiscordGestureHandlerRootView", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DiscordGestureHandlerRootView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
