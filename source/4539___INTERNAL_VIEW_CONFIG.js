// Module ID: 4539
// Function ID: 39835
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [27, 110, 42]

// Module 4539 (__INTERNAL_VIEW_CONFIG)
import { codegenNativeComponent } from "get ActivityIndicator";
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "RNSScreenStack", directEventTypes: { topFinishTransitioning: { registrationName: "onFinishTransitioning" } } };
obj.validAttributes = Object.assign({ iosPreventReattachmentOfDismissedScreens: true }, weakSet.ConditionallyIgnoredEventHandlers({ onFinishTransitioning: true }));

export default get.get("RNSScreenStack", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
