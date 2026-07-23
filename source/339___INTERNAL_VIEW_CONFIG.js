// Module ID: 339
// Function ID: 4989
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [110, 42]

// Module 339 (__INTERNAL_VIEW_CONFIG)
import weakSet from "weakSet";
import get from "get";

const obj = { uiViewClassName: "RCTModalHostView", directEventTypes: { topRequestClose: { registrationName: "onRequestClose" }, topShow: { registrationName: "onShow" }, topDismiss: { registrationName: "onDismiss" }, topOrientationChange: { registrationName: "onOrientationChange" } } };
obj.validAttributes = Object.assign({ animationType: true, presentationStyle: true, transparent: true, statusBarTranslucent: true, navigationBarTranslucent: true, hardwareAccelerated: true, visible: true, animated: true, allowSwipeDismissal: true, supportedOrientations: true, identifier: true }, weakSet.ConditionallyIgnoredEventHandlers({ onRequestClose: true, onShow: true, onDismiss: true, onOrientationChange: true }));

export default get.get("RCTModalHostView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
