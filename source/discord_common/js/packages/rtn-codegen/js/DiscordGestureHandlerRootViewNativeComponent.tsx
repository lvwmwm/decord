// Module ID: 13531
// Function ID: 104130
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 13531 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DiscordGestureHandlerRootView", validAttributes: {} };
const value = get.get("DiscordGestureHandlerRootView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
