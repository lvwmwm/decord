// Module ID: 11294
// Function ID: 11295
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 11294 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const value = setRuntimeConfigProvider.get("DCDChatList", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
