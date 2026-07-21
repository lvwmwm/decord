// Module ID: 7681
// Function ID: 61339
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 7681 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
const _module = require(dependencyMap[0]);
obj = {
  setup(nodeFromPublicInstance) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    require(dependencyMap[1]).dispatchCommand(nodeFromPublicInstance, "setup", items);
  }
};
const value = _module.get("NativeLottieNode", () => obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
