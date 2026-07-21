// Module ID: 3663
// Function ID: 27980
// Dependencies: []

// Module 3663
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const str = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return str.toString() + "\u65E5";
    } else if ("hour" === unit) {
      return str.toString() + "\u65F6";
    } else if ("minute" === unit) {
      return str.toString() + "\u5206";
    } else if ("second" === unit) {
      return str.toString() + "\u79D2";
    } else {
      return "\u7B2C " + str.toString();
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["r", "guild_members_size", "a", "5HZu07", "a", "dispatcher", "a", "5IEsGx", "a", "blossom", "a", "jumboable"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:277807107>", "<string:230293507>", "<string:230424579>", "<string:231079939>", "<string:230555651>", "<string:3186491395>", "<string:231276547>"], short: ["<string:277807107>", "<string:230293507>", "<string:230424579>", "<string:231079939>", "<string:230555651>", "<string:3186491395>", "<string:231276547>"], abbreviated: [null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
