// Module ID: 5453
// Function ID: 46617
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 5453 (__INTERNAL_VIEW_CONFIG)
let obj = { uiViewClassName: "LottieAnimationView", bubblingEventTypes: { topAnimationFinish: { phasedRegistrationNames: { onPress: false, start: false } }, topAnimationFailure: { phasedRegistrationNames: { onPress: true, start: true } }, topAnimationLoaded: { phasedRegistrationNames: { onPress: "Array", start: "<string:1916186449>" } } } };
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
