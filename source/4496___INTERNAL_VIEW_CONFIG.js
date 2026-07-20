// Module ID: 4496
// Function ID: 39612
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 4496 (__INTERNAL_VIEW_CONFIG)
const codegenNativeComponent = require(dependencyMap[0]).codegenNativeComponent;
const obj = { uiViewClassName: "RNSScreenStack", directEventTypes: { topFinishTransitioning: { registrationName: "onFinishTransitioning" } } };
const _module = require(dependencyMap[1]);
obj.validAttributes = Object.assign({ iosPreventReattachmentOfDismissedScreens: true }, _module.ConditionallyIgnoredEventHandlers({ onFinishTransitioning: true }));
const _module1 = require(dependencyMap[2]);

export default _module1.get("RNSScreenStack", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
