// Module ID: 7776
// Function ID: 61672
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [42, 117, 2]

// Module 7776 (__INTERNAL_VIEW_CONFIG)
import get from "get";

let obj = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
obj = {
  setup(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    require(117) /* renderElement */.dispatchCommand(nodeFromPublicInstance, "setup", items);
  }
};
const value = get.get("NativeLottieNode", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
