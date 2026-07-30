// Module ID: 10043
// Function ID: 10044
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 10043 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const value = setRuntimeConfigProvider.get("DCDChatList", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
