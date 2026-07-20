// Module ID: 3669
// Function ID: 27989
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
  values: { narrow: [false, false, false, false], abbreviated: [51205376, 51205888, 51206400, 51206912], wide: [] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928", "\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4", "\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091C", "\u092B\u093C"], abbreviated: [-1073741298, 1107296568, 199764, 79040, 42764100, 35350272, 58188288, 42833152, 1154240768, 147644, 147643, 147642], wide: [] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:268436237>", "<string:989856528>", "<string:1023410957>", "<string:1191183117>", "<string:1056965389>", null, null], short: ["<string:268436237>", "<string:989856528>", "<string:1023410957>", "<string:1191183117>", "<string:1056965389>", null, null], abbreviated: [], wide: [null, null, null, null, null, null, null] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: {}, abbreviated: { <string:13107200>: "isArray", <string:13303808>: "construct", <string:13369344>: "keys", <string:13631488>: "isArray", <string:13893632>: "isArray", <string:14024704>: "isArray", <string:14286848>: "accessibilityRole", <string:14548992>: "ti" }, wide: { <string:13107200>: "isArray", <string:13303808>: "construct", <string:13369344>: "keys", <string:13631488>: "isArray", <string:13893632>: "isArray", <string:14024704>: "isArray", <string:14286848>: "accessibilityRole", <string:14548992>: "ti" } }, defaultWidth: "wide", formattingValues: { narrow: {}, abbreviated: { <string:13107200>: "isArray", <string:13303808>: "construct", <string:13369344>: "keys", <string:13631488>: "isArray", <string:13893632>: "isArray", <string:14024704>: "isArray", <string:14286848>: "accessibilityRole", <string:14548992>: "ti" }, wide: { <string:13107200>: "isArray", <string:13303808>: "construct", <string:13369344>: "keys", <string:13631488>: "isArray", <string:13893632>: "isArray", <string:14024704>: "isArray", <string:14286848>: "accessibilityRole", <string:14548992>: "ti" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
