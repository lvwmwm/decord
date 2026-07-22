// Module ID: 7523
// Function ID: 60227
// Name: styles
// Dependencies: []

// Module 7523 (styles)
let num = 0;
const _module = require(dependencyMap[0]);
const StyleSheet = _module.StyleSheet;
let obj = { stepNumber: { paddingTop: null, paddingHorizontal: null, alignItems: null }, sliderMainContainer: { "Null": false, "Null": false }, defaultSlideriOS: { height: 40 }, defaultSlider: {} };
obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
if ("ios" === _module.Platform.OS) {
  num = 10;
}
obj.top = num;
obj.stepsIndicator = obj;
obj.trackMarkContainer = { "Bool(true)": "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286", "Bool(true)": "premium_month_tier_0.2", "Bool(true)": "premium_year_tier_0", "Bool(true)": "premium_month_tier_1", "Bool(true)": "premium_year_tier_1", "Bool(true)": "premium_month_tier_2" };
obj.thumbImageContainer = { 0: 12, 0: "btn btn--primary", -9223372036854775808: null, 9223372036854775807: "submit", -9223372036854775808: "screenshot" };
obj.thumbImage = { "Null": 1, "Null": "100%", "Null": "center" };
obj.stepIndicatorElement = { "Bool(true)": null, <string:1465717255>: null };
obj.defaultIndicatorMarked = {};
obj.defaultIndicatorIdle = {};

export const styles = StyleSheet.create(obj);
