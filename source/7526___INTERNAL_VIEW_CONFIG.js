// Module ID: 7526
// Function ID: 60258
// Name: __INTERNAL_VIEW_CONFIG
// Dependencies: [7524, 444, 90, 38, 110, 42]

// Module 7526 (__INTERNAL_VIEW_CONFIG)
import module_7524 from "module_7524";
import codegenNativeComponent from "codegenNativeComponent";
import weakSet from "weakSet";
import get from "get";

let obj = { uiViewClassName: "RNCSlider", bubblingEventTypes: { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topRNCSliderValueChange: { phasedRegistrationNames: { captured: "onRNCSliderValueChangeCapture", bubbled: "onRNCSliderValueChange" } } }, directEventTypes: { topRNCSliderSlidingStart: { registrationName: "onRNCSliderSlidingStart" }, topRNCSliderSlidingComplete: { registrationName: "onRNCSliderSlidingComplete" } } };
obj = { accessibilityUnits: true, accessibilityIncrements: true, disabled: true, inverted: true, vertical: true, tapToSeek: true, maximumTrackImage: null, maximumTrackTintColor: null, maximumValue: true };
obj = { process: require("getSourceCodeScriptURL") };
obj.maximumTrackImage = obj;
obj.maximumTrackTintColor = { process: require("processColor").default };
const obj1 = { process: require("processColor").default };
obj.minimumTrackImage = { process: require("getSourceCodeScriptURL") };
const obj2 = { process: require("getSourceCodeScriptURL") };
obj.minimumTrackTintColor = { process: require("processColor").default };
obj.minimumValue = true;
obj.step = true;
obj.testID = true;
const obj3 = { process: require("processColor").default };
obj.thumbImage = { process: require("getSourceCodeScriptURL") };
const obj4 = { process: require("getSourceCodeScriptURL") };
obj.thumbTintColor = { process: require("processColor").default };
const obj5 = { process: require("processColor").default };
obj.trackImage = { process: require("getSourceCodeScriptURL") };
obj.value = true;
obj.lowerLimit = true;
obj.upperLimit = true;
obj.validAttributes = Object.assign(obj, weakSet.ConditionallyIgnoredEventHandlers({ onChange: true, onRNCSliderSlidingStart: true, onRNCSliderSlidingComplete: true, onRNCSliderValueChange: true }));

export const __INTERNAL_VIEW_CONFIG = obj;
export default get.get("RNCSlider", () => obj);
