// Module ID: 3657
// Function ID: 27960
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
obj.era = obj.default({ values: { narrow: [null, null], abbreviated: [], wide: [false, 49761536] }, defaultWidth: "wide" });
obj.quarter = obj.default({
  values: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [49559808, 49560064, 49560320, 1075728640] },
  defaultWidth: "wide",
  formattingValues: { narrow: [], abbreviated: ["d\u1EA5u", "d\u1EA5u g\u1EA1ch ch\u00E9o", "h\u1EE7y", "nh\u00E2n"], wide: [] },
  defaultFormattingWidth: "wide",
  argumentCallback(arg0) {
    return arg0 - 1;
  }
});
obj.month = obj.default({ values: { narrow: [], abbreviated: [], wide: ["GUILD_INTEGRATION_SETTINGS", "speechExpandRate", "GUILD_INTEGRATION_SETTINGS", "timeLabel", "GUILD_INTEGRATION_SETTINGS", "ALIGNMENT_MAP", "INTEGRATION_SETTINGS", "unit", "useBottomSheetInternal", "r", "<string:4175691779>", "<string:149028866>"] }, defaultWidth: "wide", formattingValues: { narrow: [null, null, null, null, null, null, null, null, null, null, null, null], abbreviated: [false, false, false, false, false, false, false, false, false, false, false, false], wide: [] }, defaultFormattingWidth: "wide" });
obj.day = obj.default({ values: { narrow: ["<string:2701132527>", "<string:1778386122>", "<string:1879048945>", "<string:2013266673>", "<string:3120562929>", "<string:3238003441>", "<string:1191183089>"], short: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"], abbreviated: [], wide: [] }, defaultWidth: "wide" });
obj.dayPeriod = obj.default({ values: { narrow: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null }, abbreviated: {}, wide: {} }, defaultWidth: "wide", formattingValues: { narrow: { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Null": null, "Null": null }, abbreviated: {}, wide: {} }, defaultFormattingWidth: "wide" });

export default obj;
export default exports.default;
