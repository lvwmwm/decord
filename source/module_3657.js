// Module ID: 3657
// Function ID: 27965
// Dependencies: []

// Module 3657
const _module = require(dependencyMap[0]);
if (!_module) {
  let obj = { default: _module };
} else {
  obj = _module;
}
obj = {
  ordinalNumber(arg0, unit) {
    const NumberResult = Number(arg0);
    unit = undefined;
    if (null != unit) {
      unit = unit.unit;
    }
    if ("quarter" === unit) {
      if (1 === NumberResult) {
        return "I";
      } else if (2 === NumberResult) {
        return "II";
      } else if (3 === NumberResult) {
        return "III";
      } else if (4 === NumberResult) {
        return "IV";
      }
    } else if ("day" === unit) {
      if (1 === NumberResult) {
        return "th\u1EE9 2";
      } else if (2 === NumberResult) {
        return "th\u1EE9 3";
      } else if (3 === NumberResult) {
        return "th\u1EE9 4";
      } else if (4 === NumberResult) {
        return "th\u1EE9 5";
      } else if (5 === NumberResult) {
        return "th\u1EE9 6";
      } else if (6 === NumberResult) {
        return "th\u1EE9 7";
      } else if (7 === NumberResult) {
        return "ch\u1EE7 nh\u1EADt";
      }
    } else if ("week" === unit) {
      let str5 = "th\u1EE9 nh\u1EA5t";
      if (1 !== NumberResult) {
        str5 = `thứ ${tmp}`;
      }
      return str5;
    } else if ("dayOfYear" === unit) {
      let str4 = "\u0111\u1EA7u ti\u00EAn";
      if (1 !== NumberResult) {
        str4 = `thứ ${tmp}`;
      }
      return str4;
    }
    return String(NumberResult);
  }
};
obj.era = obj.default({ values: { narrow: [49753856, 49769216], abbreviated: [null, null], wide: [] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: [false, false, false, false] },
  defaultWidth: "wide",
  formattingValues: { narrow: [], abbreviated: ["imageContainerExpiring", "locke", "imageContainerExpiring", "UNKNOWN_PLATFORM"], wide: [] },
  defaultFormattingWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: [] }, defaultWidth: "wide", formattingValues: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [], wide: ["<string:3939172355>", "<string:3946446851>", "<string:4119920643>", "<string:3994419203>", "<string:4038656003>", "<string:3943956483>", "<string:4033019907>", "<string:3988258819>", "<string:4068868099>", "<string:3938975747>", "<string:3939106819>", "<string:3091660803>"] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: [-2708888485493532000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -5001020187896507000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -113356545097415580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -563491501563904.3, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000018050461103061454, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000458106845395955, 10394583583703998000000000000000000], short: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { Text: true, body: true, PX_8: true, y: true, isArray: true, accessibilityRole: true, useStateFromStores: true, lj: true }, abbreviated: { Text: "zzzz a h:mm:ss", body: "z a h:mm:ss", PX_8: "a h:mm:ss", y: "a h:mm", isArray: null, accessibilityRole: "'\u6628\u5929' p", useStateFromStores: "'\u4ECA\u5929' p", lj: "'\u660E\u5929' p" }, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { Text: true, body: true, PX_8: true, y: true, isArray: true, accessibilityRole: true, useStateFromStores: true, lj: true }, abbreviated: { Text: "zzzz a h:mm:ss", body: "z a h:mm:ss", PX_8: "a h:mm:ss", y: "a h:mm", isArray: null, accessibilityRole: "'\u6628\u5929' p", useStateFromStores: "'\u4ECA\u5929' p", lj: "'\u660E\u5929' p" }, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
