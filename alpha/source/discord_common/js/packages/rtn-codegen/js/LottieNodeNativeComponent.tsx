// Module ID: 7616
// Function ID: 7617
// Name: LottieNodeNativeComponent
// Dependencies: [65, 114, 2]

// Module 7616 (LottieNodeNativeComponent)
import renderElement from "renderElement" /* 114 */;
import module_65 from "module_65" /* 65 */;
import size from "module_2" /* 2 */;

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "NativeLottieNode", validAttributes: {} };
const value = module_65.get("NativeLottieNode", () => obj);
const result = size.fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/LottieNodeNativeComponent.tsx");

export default value;
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  setup(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    const items = [arg1, arg2, arg3, arg4, arg5, arg6, arg7];
    renderElement.dispatchCommand(arg0, "setup", items);
  }
};
