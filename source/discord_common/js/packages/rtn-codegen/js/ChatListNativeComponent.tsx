// Module ID: 10047
// Function ID: 10048
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 10047 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const value = setRuntimeConfigProvider.get("DCDChatList", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
