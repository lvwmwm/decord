// Module ID: 7520
// Function ID: 60201
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 7520 (__INTERNAL_VIEW_CONFIG)
const _module = require(dependencyMap[0]);
_module(require(dependencyMap[1]));
let obj = { uiViewClassName: "RNCSlider", bubblingEventTypes: { topChange: { phasedRegistrationNames: { display: 0, alignItems: "red" } }, topRNCSliderValueChange: { phasedRegistrationNames: {} } }, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } } };
obj = {};
obj = { process: require(dependencyMap[2]) };
obj.maximumTrackImage = obj;
obj.maximumTrackTintColor = { process: require(dependencyMap[3]).default };
const obj1 = { process: require(dependencyMap[3]).default };
obj.minimumTrackImage = { process: require(dependencyMap[2]) };
const obj2 = { process: require(dependencyMap[2]) };
obj.minimumTrackTintColor = { process: require(dependencyMap[3]).default };
obj.minimumValue = true;
obj.step = true;
obj.testID = true;
const obj3 = { process: require(dependencyMap[3]).default };
obj.thumbImage = { process: require(dependencyMap[2]) };
const obj4 = { process: require(dependencyMap[2]) };
obj.thumbTintColor = { process: require(dependencyMap[3]).default };
const obj5 = { process: require(dependencyMap[3]).default };
obj.trackImage = { process: require(dependencyMap[2]) };
obj.value = true;
obj.lowerLimit = true;
obj.upperLimit = true;
const _module1 = require(dependencyMap[4]);
obj.validAttributes = Object.assign(obj, _module1.ConditionallyIgnoredEventHandlers({}));
const _module2 = require(dependencyMap[5]);

export const __INTERNAL_VIEW_CONFIG = obj;
export default _module2.get("RNCSlider", () => obj);
