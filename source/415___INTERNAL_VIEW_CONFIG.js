// Module ID: 415
// Function ID: 5835
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: []

// Module 415 (__INTERNAL_VIEW_CONFIG)
importAll(dependencyMap[0]);
let obj = { uiViewClassName: "AndroidSwitch", bubblingEventTypes: { topChange: { phasedRegistrationNames: { display: 0, alignItems: "red" } } } };
obj = {};
obj = { process: arg1(dependencyMap[1]).default };
obj.thumbColor = obj;
obj.trackColorForFalse = { process: arg1(dependencyMap[1]).default };
const obj1 = { process: arg1(dependencyMap[1]).default };
obj.trackColorForTrue = { process: arg1(dependencyMap[1]).default };
const obj2 = { process: arg1(dependencyMap[1]).default };
obj.thumbTintColor = { process: arg1(dependencyMap[1]).default };
const obj3 = { process: arg1(dependencyMap[1]).default };
obj.trackTintColor = { process: arg1(dependencyMap[1]).default };
const obj4 = { process: arg1(dependencyMap[1]).default };
obj.validAttributes = Object.assign(obj, arg1(dependencyMap[2]).ConditionallyIgnoredEventHandlers({ onChange: true }));
const obj8 = arg1(dependencyMap[2]);

export default arg1(dependencyMap[3]).get("AndroidSwitch", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    arg1(dependencyMap[4]).dispatchCommand(current, "setNativeValue", items);
  }
};
