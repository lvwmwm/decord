// Module ID: 3293
// Function ID: 26036
// Dependencies: []

// Module 3293
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, arg1) {
    return Number(arg0) + "-oji";
  }
};
obj.era = obj.default({ values: { narrow: [false, false], abbreviated: [false, false], wide: [true, true] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["a", "isArray", "Date", "bind"], wide: [null, null, null, null] },
  defaultWidth: "wide",
  formattingValues: { narrow: [], abbreviated: [], wide: [null, null, null, null] },
  defaultFormattingWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["snapToOffsets", "_discountAmount", "EMOJI_EVERYWHERE_INLINE_UPSELL", "theme", "endAudioRecording", "fontVariantLigatures", "headMetaSocial", "button", "amazon", "CaEER6", "getCurrentUserActiveStream", "dress"], abbreviated: ["v.C.", "n.C.", "voor Christus", "na Christus", "bocejo", "cansada", "cansado", "com sono", "entediada", "entediado", "rosto bocejando", "sono"], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: ["snapToOffsets", "_discountAmount", "EMOJI_EVERYWHERE_INLINE_UPSELL", "theme", "endAudioRecording", "fontVariantLigatures", "headMetaSocial", "button", "amazon", "CaEER6", "getCurrentUserActiveStream", "dress"], abbreviated: ["v.C.", "n.C.", "voor Christus", "na Christus", "bocejo", "cansada", "cansado", "com sono", "entediada", "entediado", "rosto bocejando", "sono"], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-2100035582, -2097807358, 1630863362, 670040068, -2102525950, -2102394878, -2097741822], short: [], abbreviated: [-2102525950, -2102394878, -2097741822, -1844183038, -2097676284, -1844117502, -1844051964], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [-2100035582, -2097807358, 1630863362, 670040068, -2102525950, -2102394878, -2097741822], short: [], abbreviated: [-2102525950, -2102394878, -2097741822, -1844183038, -2097676284, -1844117502, -1844051964], wide: [] }, defaultFormattingWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null }, abbreviated: { "Bool(false)": "'afgelopen' eeee 'om' p", "Bool(false)": "'gisteren om' p", "Bool(false)": "'vandaag om' p", "Bool(false)": "'morgen om' p", "Bool(false)": "eeee 'om' p", "Bool(false)": "P", "Null": "before", "Null": null }, wide: { "Bool(false)": "'afgelopen' eeee 'om' p", "Bool(false)": "'gisteren om' p", "Bool(false)": "'vandaag om' p", "Bool(false)": "'morgen om' p", "Bool(false)": "eeee 'om' p", "Bool(false)": "P", "Null": "before", "Null": null } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
