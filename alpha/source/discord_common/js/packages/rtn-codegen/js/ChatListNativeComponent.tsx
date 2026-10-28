// Module ID: 12916
// Function ID: 12917
// Name: ChatListNativeComponent
// Dependencies: [106, 65, 2]

// Module 12916 (ChatListNativeComponent)
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "DCDChatList", directEventTypes: { topContentPaintStateChange: { registrationName: "onContentPaintStateChange" } }, validAttributes: obj2 };
obj2 = { floatingChatInputEnabled: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onContentPaintStateChange: true }));
const value = module_65.get("DCDChatList", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
