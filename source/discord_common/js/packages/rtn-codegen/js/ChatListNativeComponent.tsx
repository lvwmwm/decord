// Module ID: 10009
// Function ID: 77381
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 10009 (__INTERNAL_VIEW_CONFIG)
const obj = { uiViewClassName: "DCDChatList", validAttributes: { floatingChatInputEnabled: true } };
const _module = require(dependencyMap[0]);
const value = _module.get("DCDChatList", () => obj);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
