// Module ID: 3311
// Function ID: 26080
// Dependencies: []

// Module 3311
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return String(arg0);
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: [true, true, true, true], wide: ["a", "positionValue", "ReactNativeBridgeEventPlugin", null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["<string:1447493633>", "<string:2483028362>", "<string:1174405971>", "<string:2499805819>", "<string:3858760531>", "<string:2533360289>", "<string:1308623699>", "<string:1358954919>", "<string:811729201>", "<string:4288696587>", "<string:506474339>", "<string:42105154>"], abbreviated: [], wide: ["dismissOAuthModal", "breadcrumbType", "APP_EXTRA_COMPONENTS_NEVER_FREEZE", "GUILD_TOP_READ_CHANNELS", null, null, null, "m", "j", "j", "a", "s"] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: [], wide: [true, true, true, "y", "constrainedWidth", "USER_VERIFIED_TOAST_KEY", "itemMeasurements", "y", "Constants", "y", "CHANNEL_LIST_SUBTITLE_TEXT_STYLE", "y"] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [], short: [null, null, null, null, null, null, null], abbreviated: [null, null, null, null, null, null, null], wide: [269585, 44281415, 22130176, 54523648, 48505856, 43663360, 42855424] }, defaultWidth: "wide", formattingValues: { narrow: [], short: [null, null, null, null, null, null, null], abbreviated: [null, null, null, null, null, null, null], wide: [269585, 44281415, 22130176, 54523648, 48505856, 43663360, 42855424] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "isArray", "Bool(false)": "accessibilityRole", "Bool(false)": "s", "Bool(false)": "r", "Bool(false)": "construct", "Bool(false)": "resolve", "Null": "isArray", "Null": "isArray" }, abbreviated: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null }, wide: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null } }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": "r", "Bool(false)": "a_18", "Bool(false)": "Array", "Bool(false)": "_playSound", "Bool(false)": true, "Bool(false)": "<string:2629322250>", "Null": "<string:4153933826>", "Null": "<string:4020305921>" }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
