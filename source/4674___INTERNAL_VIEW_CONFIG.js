// Module ID: 4674
// Function ID: 4675
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [17, 106, 65]

// Module 4674 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNSScreenStack", directEventTypes: { topFinishTransitioning: { registrationName: "onFinishTransitioning" } }, validAttributes: null };
obj = { iosPreventReattachmentOfDismissedScreens: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onFinishTransitioning: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreenStack", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
