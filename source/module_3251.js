// Module ID: 3251
// Function ID: 25931
// Dependencies: []

// Module 3251
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = { narrow: ["<string:3459740754>", "<string:2857549921>", "<string:3914629274>", "<string:1337361324>", "<string:1637509105>", "<string:2378715535>", "<string:1834613585>", "<string:2022471564>", "<string:1972136844>", "<string:1988914316>", "<string:1770809484>", "<string:167137932>"], abbreviated: [], wide: ["<string:3841982466>", "<string:1073741826>", "<string:1912602626>", "Label", "ab", "intl/messages/international.messages.js", "honningmelon", "PC_SEAT_1", "EditGuildEventStepHeader", "../discord_common/js/packages/rtn-codegen/js/VisualEffectViewTargetAndroidNativeComponent.tsx", "london", "<string:37843456>"] };
const obj2 = { narrow: ["isArray", "r", "resolve", "Array", "isArray", "ix", "done"], short: [], abbreviated: [], wide: [] };
const obj4 = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  },
  era: obj.default({ values: { narrow: ["type", "filter"], abbreviated: ["type", "filter"], wide: [] }, defaultWidth: "wide" }),
  quarter: obj.default({
    values: { narrow: [null, null, null, null], abbreviated: ["r", "isArray", "Icon", "channel_id"], wide: ["a", "isArray", "accessibilityRole", 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013902970045546528] },
    defaultWidth: "wide",
    argumentCallback(arg0) {
      return arg0 - 1;
    }
  }),
  month: obj.default({ values: obj, defaultWidth: "wide", formattingValues: { narrow: obj.narrow, abbreviated: obj.abbreviated, wide: [] }, defaultFormattingWidth: "wide" }),
  day: obj.default({ values: obj2, defaultWidth: "wide", formattingValues: { narrow: obj2.narrow, short: obj2.short, abbreviated: obj2.abbreviated, wide: [] }, defaultFormattingWidth: "wide" }),
  dayPeriod: obj.default({ values: { narrow: { unicodeVersion: -19504608087382120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, y: 15188267080887226000000000000000000000000000000000000000000000000000000000000000000, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, abbreviated: { unicodeVersion: -19504608087382120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, y: 15188267080887226000000000000000000000000000000000000000000000000000000000000000000, isArray: true, colors: true, construct: true, y: true, isArray: true, id: true }, wide: {} }, defaultWidth: "wide" })
};

export default obj4;
export default exports.default;
