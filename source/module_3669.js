// Module ID: 3669
// Function ID: 27994
// Dependencies: []

// Module 3669
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    const NumberResult = Number(arg0);
    if (null != unit) {
      unit = unit.unit;
    }
    if ("date" === unit) {
      return NumberResult + "\u65E5";
    } else if ("hour" === unit) {
      return NumberResult + "\u6642";
    } else if ("minute" === unit) {
      return NumberResult + "\u5206";
    } else if ("second" === unit) {
      return NumberResult + "\u79D2";
    } else {
      return "\u7B2C " + NumberResult;
    }
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: [51237888, 51238400, 51238912, 51239424], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["r", "guild_members_size", "a", "5HZu07", "a", "dispatcher", "a", "5IEsGx", "a", "blossom", "a", "jumboable"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:277807107>", "<string:230293507>", "<string:230424579>", "<string:231079939>", "<string:230555651>", "<string:3186491395>", "<string:231276547>"], short: ["<string:277807107>", "<string:230293507>", "<string:230424579>", "<string:231079939>", "<string:230555651>", "<string:3186491395>", "<string:231276547>"], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { unicodeVersion: "<string:261685249>", y: "<string:1222049793>", isArray: "<string:3679518722>", colors: "NSFW_CHANNEL_AGREE_CTA", construct: "isArray", y: "isArray", isArray: "<string:1359085568>", id: "<string:1986544834>" }, wide: { unicodeVersion: "<string:261685249>", y: "<string:1222049793>", isArray: "<string:3679518722>", colors: "NSFW_CHANNEL_AGREE_CTA", construct: "isArray", y: "isArray", isArray: "<string:1359085568>", id: "<string:1986544834>" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { unicodeVersion: "<string:261685249>", y: "<string:1222049793>", isArray: "<string:3679518722>", colors: "NSFW_CHANNEL_AGREE_CTA", construct: "isArray", y: "isArray", isArray: "<string:1359085568>", id: "<string:1986544834>" }, wide: { unicodeVersion: "<string:261685249>", y: "<string:1222049793>", isArray: "<string:3679518722>", colors: "NSFW_CHANNEL_AGREE_CTA", construct: "isArray", y: "isArray", isArray: "<string:1359085568>", id: "<string:1986544834>" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
