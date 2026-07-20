// Module ID: 7518
// Function ID: 60192
// Name: styles
// Dependencies: []

// Module 7518 (styles)
let num = 0;
const _module = require(dependencyMap[0]);
const StyleSheet = _module.StyleSheet;
let obj = { stepNumber: { "Null": 1124073834, ../shared/constants: 297149, ../shared/focus-intercept: 134142 }, sliderMainContainer: {}, defaultSlideriOS: { height: 40 }, defaultSlider: {} };
obj = {};
if ("ios" === _module.Platform.OS) {
  num = 10;
}
obj.top = num;
obj.stepsIndicator = obj;
obj.trackMarkContainer = {};
obj.thumbImageContainer = {};
obj.thumbImage = {};
obj.stepIndicatorElement = {};
obj.defaultIndicatorMarked = {};
obj.defaultIndicatorIdle = {};

export const styles = StyleSheet.create(obj);
