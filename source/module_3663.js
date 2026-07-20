// Module ID: 3663
// Function ID: 27975
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
  values: { narrow: [false, false, false, false], abbreviated: [], wide: [null, null, null, null] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928", "\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4", "\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091C", "\u092B\u093C"], abbreviated: [-1073741298, 1107296568, 199764, 79040, 42764100, 35350272, 58188288, 42833152, 1154240768, 147644, 147643, 147642], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:268436237>", "<string:989856528>", "<string:1023410957>", "<string:1191183117>", "<string:1056965389>", null, null], short: ["<string:268436237>", "<string:989856528>", "<string:1023410957>", "<string:1191183117>", "<string:1056965389>", null, null], abbreviated: [null, null, null, null, null, null, null], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { <string:13107200>: "\u0967 \u092E\u0939\u0940\u0928\u093E", <string:13303808>: "{{count}} \u092E\u0939\u0940\u0928\u0947", <string:13369344>: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", <string:13631488>: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", <string:13893632>: "\u0967 \u0935\u0930\u094D\u0937", <string:14024704>: "{{count}} \u0935\u0930\u094D\u0937", <string:14286848>: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", <string:14548992>: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" }, wide: { <string:13107200>: "\u0967 \u092E\u0939\u0940\u0928\u093E", <string:13303808>: "{{count}} \u092E\u0939\u0940\u0928\u0947", <string:13369344>: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", <string:13631488>: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", <string:13893632>: "\u0967 \u0935\u0930\u094D\u0937", <string:14024704>: "{{count}} \u0935\u0930\u094D\u0937", <string:14286848>: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", <string:14548992>: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { <string:13107200>: "\u0967 \u092E\u0939\u0940\u0928\u093E", <string:13303808>: "{{count}} \u092E\u0939\u0940\u0928\u0947", <string:13369344>: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", <string:13631488>: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", <string:13893632>: "\u0967 \u0935\u0930\u094D\u0937", <string:14024704>: "{{count}} \u0935\u0930\u094D\u0937", <string:14286848>: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", <string:14548992>: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" }, wide: { <string:13107200>: "\u0967 \u092E\u0939\u0940\u0928\u093E", <string:13303808>: "{{count}} \u092E\u0939\u0940\u0928\u0947", <string:13369344>: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937", <string:13631488>: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937", <string:13893632>: "\u0967 \u0935\u0930\u094D\u0937", <string:14024704>: "{{count}} \u0935\u0930\u094D\u0937", <string:14286848>: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915", <string:14548992>: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
