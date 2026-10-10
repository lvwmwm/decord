// Module ID: 8018
// Function ID: 8019
// Name: LottieNodeNativeComponent
// Dependencies: [65, 114, 2]

// Module 8018 (LottieNodeNativeComponent)
import renderElement from "renderElement" /* 114 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
const obj2 = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    const obj = renderElement;
    obj.dispatchCommand(arg0, "setup", items);
  }
};
const value = module_65.get("NativeLottieNode", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj2;
