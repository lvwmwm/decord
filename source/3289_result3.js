// Module ID: 3289
// Function ID: 26028
// Name: result3
// Dependencies: [1929]

// Module 3289 (result3)
import buildLocalizeFn from "buildLocalizeFn";

if (!buildLocalizeFn) {
  let obj = { default: buildLocalizeFn };
} else {
  obj = buildLocalizeFn;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    const StringResult = String(unit);
    if ("minute" !== StringResult) {
      if ("second" !== StringResult) {
        if ("date" === StringResult) {
          return NumberResult + "\uC77C";
        } else {
          return NumberResult + "\uBC88\uC9F8";
        }
      }
    }
    return String(NumberResult);
  }
};
obj.era = obj.default({ values: { narrow: ["BC", "AD"], abbreviated: ["BC", "AD"], wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"] },
  defaultWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], abbreviated: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], wide: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"] }, defaultWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], wide: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, abbreviated: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" }, wide: { am: "\uC624\uC804", pm: "\uC624\uD6C4", midnight: "\uC790\uC815", noon: "\uC815\uC624", morning: "\uC544\uCE68", afternoon: "\uC624\uD6C4", evening: "\uC800\uB141", night: "\uBC24" } }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
