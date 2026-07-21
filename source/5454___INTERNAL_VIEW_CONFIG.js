// Module ID: 5454
// Function ID: 46601
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 5454 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: { topAnimationFinish: { phasedRegistrationNames: { display: false, alignItems: false } }, topAnimationFailure: { phasedRegistrationNames: { display: "<string:36199745>", alignItems: "<string:4048638208>" } }, topAnimationLoaded: { phasedRegistrationNames: { display: 1, alignItems: 1916193105 } } } };
const _module = require(dependencyMap[0]);
obj.validAttributes = Object.assign({}, _module.ConditionallyIgnoredEventHandlers({}));
const _module1 = require(dependencyMap[1]);
obj = {
  play(nodeFromPublicInstance) {
    const items = [arg1, arg2];
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "play", items);
  },
  reset(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "reset", []);
  },
  pause(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "pause", []);
  },
  resume(nodeFromPublicInstance) {
    require(dependencyMap[2]).dispatchCommand(nodeFromPublicInstance, "resume", []);
  }
};

export default _module1.get("LottieAnimationView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
