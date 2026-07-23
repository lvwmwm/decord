// Module ID: 415
// Function ID: 5835
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [31, 38, 110, 42, 117]

// Module 415 (__INTERNAL_VIEW_CONFIG)
import "result";
import weakSet from "weakSet";
import get from "get";

const require = arg1;
let obj = { uiViewClassName: "AndroidSwitch", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } } } };
obj = { disabled: true, enabled: true, thumbColor: null, trackColorForFalse: null, trackColorForTrue: null, value: true, on: true };
obj = { process: require("processColor").default };
obj.thumbColor = obj;
obj.trackColorForFalse = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.trackColorForTrue = { process: require("processColor").default };
const obj2 = { process: require("processColor").default };
obj.thumbTintColor = { process: require("processColor").default };
const obj3 = { process: require("processColor").default };
obj.trackTintColor = { process: require("processColor").default };
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true }));

export default get.get("AndroidSwitch", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = {
  setNativeValue(current, arg1) {
    const items = [arg1];
    require(117) /* renderElement */.dispatchCommand(current, "setNativeValue", items);
  }
};
