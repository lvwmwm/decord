// Module ID: 10056
// Function ID: 77657
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 2]

// Module 10056 (__INTERNAL_VIEW_CONFIG)
import get from "get";

const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const value = get.get("DCDChatList", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
