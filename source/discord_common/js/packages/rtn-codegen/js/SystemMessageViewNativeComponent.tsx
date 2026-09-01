// Module ID: 8782
// Function ID: 8783
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [65, 2]

// Module 8782 (__INTERNAL_VIEW_CONFIG)
import set from "set" /* 2 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "DCDSystemMessageView", validAttributes: { row: true } };
const value = setRuntimeConfigProvider.get("DCDSystemMessageView", () => obj);
const result = set.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SystemMessageViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
