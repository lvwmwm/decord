// Module ID: 3305
// Function ID: 26069
// Dependencies: []

// Module 3305
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + ".";
  }
};
obj.era = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [null, null, null, null], abbreviated: ["r", "isArray", "Icon", "channel_id"], wide: ["r", "GOOGLE_GENAI_INTEGRATION_NAME", "r", "\u021A"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: ["r", "isArray", "surrogates", "top", "r", "isArray", "style", "top", "r", "isArray", "ks", ""], wide: [true, true, true, true, true, true, true, true, true, true, true, true] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-838860306, -1409285481, 1493172549, -2013265125, -989855295, -1275068117, 486539707], short: ["<string:19645696>", "<string:29078528>", "<string:37231872>", "<string:54252800>", "<string:1144934656>", "1. Quartal", "2. Quartal"], abbreviated: [false, false, false, false, false, false, null], wide: [null, null, null, null, false, false, false] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { unicodeVersion: "r", y: "isArray", isArray: "WireType", colors: "ref", construct: "unicodeVersion", y: "a", isArray: "isArray", id: "size" }, abbreviated: {}, wide: { unicodeVersion: "getProductFetch", y: "F+x38C", isArray: "getProductFetch", colors: "CREATOR_MONETIZATION_REQUEST_CREATED", construct: "ENTITLEMENTS_FOR_APPLICATION", y: "Array", isArray: "<string:3166896129>", id: "<string:2705522689>" } }, defaultWidth: "wide" });

export default obj;
export default exports.default;
