// Module ID: 3329
// Function ID: 26130
// Dependencies: []

// Module 3329
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    let str = "-\u0435";
    if ("date" !== unit) {
      if ("week" !== unit) {
        if ("minute" !== unit) {
          let str4 = "-\u0439";
        }
        str = str4;
      }
      str4 = "-\u044F";
    }
    return Number(arg0) + str;
  }
};
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [false, false, false, false], abbreviated: [], wide: ["<string:80396544>", "<string:80395520>", "<string:80394752>", "<string:59660032>"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [true, true, true, true, true, true, true, true, true, true, true, true] }, defaultWidth: "wide", formattingValues: { narrow: [], abbreviated: ["r", "f\u00F6re Kristus", "efter Kristus", "esnemek", "iyi geceler", "iyi uykular", "\u015Fekerleme", "tatl\u0131 r\u00FCyalar", "uyku", "uykulu", "uyumak", "yatak"], wide: [false, false, false, false, false, false, false, false, false, false, false, false] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [null, null, null, null, null, null, null], short: [null, null, null, null, null, null, null], abbreviated: [], wide: ["on", "to", "fr", "l\u00F6", "s\u00F6n", "m\u00E5n", "tis"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { <string:13107200>: true, <string:13303808>: true, <string:13369344>: true, <string:13631488>: true, <string:13893632>: true, <string:14024704>: true, <string:14286848>: true, <string:14548992>: true }, abbreviated: { <string:13107200>: true, <string:13303808>: true, <string:13369344>: true, <string:13631488>: true, <string:13893632>: true, <string:14024704>: true, <string:14286848>: true, <string:14548992>: true }, wide: { <string:13107200>: "showAllButtonUnderline", <string:13303808>: "domInteractive", <string:13369344>: "GIFT_INTENT_ACTION_BUTTON_CLICKED", <string:13631488>: "1i+hMi", <string:13893632>: "Array", <string:14024704>: "1i+hMi", <string:14286848>: "Array", <string:14548992>: "MESSAGES_HEADER_PADDING_BOTTOM" } }, defaultWidth: "any", formattingValues: { narrow: { <string:13107200>: "'i' EEEE's kl.' p", <string:13303808>: "'ig\u00E5r kl.' p", <string:13369344>: "'idag kl.' p", <string:13631488>: "'imorgon kl.' p", <string:13893632>: "EEEE 'kl.' p", <string:14024704>: "P", <string:14286848>: 0, <string:14548992>: 0 }, abbreviated: { <string:13107200>: "'i' EEEE's kl.' p", <string:13303808>: "'ig\u00E5r kl.' p", <string:13369344>: "'idag kl.' p", <string:13631488>: "'imorgon kl.' p", <string:13893632>: "EEEE 'kl.' p", <string:14024704>: "P", <string:14286848>: 0, <string:14548992>: 0 }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
