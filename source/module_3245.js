// Module ID: 3245
// Function ID: 25904
// Dependencies: []

// Module 3245
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "\u00BA";
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [null, null] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["s\u00E1", "dom", "lun", "mar"], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return Number(arg0) - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["<string:211025921>", "<string:211156995>", "<string:668205059>", "<string:913113089>", "<string:2306080769>", "<string:2311913473>", "<string:3276603394>", "<string:3695968258>", "<string:1426063694>", "<string:3271557605>", "<string:1761608168>", "<string:637534578>"], wide: ["<string:154140673>", "<string:4245159939>", "<string:668270594>", "<string:913178625>", "<string:2306146305>", "<string:2311979009>", "<string:2301689858>", "<string:3008495618>", "<string:1627485697>", "<string:34754859>", "<string:508701537>", "<string:1375877890>"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [false, false, false, false, false, false, false], short: [], abbreviated: [null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": "last_dismissed_at_ms", "Bool(false)": "scalar", "Bool(false)": 4, "Bool(false)": "#2196F3", "Bool(false)": 2, "Bool(false)": null, "Null": null, "Null": false }, abbreviated: { "Bool(false)": "_bodyText", "Bool(false)": "er", "Bool(false)": "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "Bool(false)": "NATIVE_SCREENSHARE_PICKER", "Bool(false)": "r", "Bool(false)": "AUTO_MODERATION_RULE_CREATE", "Null": "r", "Null": "%AsyncFunctionPrototype%" }, wide: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
