// Module ID: 3332
// Function ID: 26144
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3332 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: null, ga: null }, xSeconds: { removeInternalFields: null, ga: null }, halfAMinute: "en halv minut", lessThanXMinutes: {}, xMinutes: { removeInternalFields: false, ga: false }, aboutXHours: { removeInternalFields: "<string:1683095553>", ga: "<string:1174601479>" }, xHours: { removeInternalFields: true, ga: true }, xDays: { removeInternalFields: 1799028739, ga: null }, aboutXWeeks: { removeInternalFields: null, ga: null }, xWeeks: { removeInternalFields: 27596614, ga: 30527488 }, aboutXMonths: {}, xMonths: {}, aboutXYears: { removeInternalFields: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", ga: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35" }, xYears: { removeInternalFields: "a", ga: "isArray" }, overXYears: { removeInternalFields: "1 \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35", ga: "{{count}} \u0E27\u0E34\u0E19\u0E32\u0E17\u0E35" }, almostXYears: { removeInternalFields: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 1 \u0E19\u0E32\u0E17\u0E35", ga: "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32 {{count}} \u0E19\u0E32\u0E17\u0E35" } };
let closure_1 = ["EXPRESSION_PICKER_EXPRESSION_FOCUS", "DISMISS_CONFIRMATION_PROMPT", "Array", "imageSelectionRow", "a", "isSocialLayerSDKAuthorization", "horiz", "LayoutAnimationConfig", "tintTransparency", "CUSTOM_THEME_SHARE_PREVIEWED", "installTurboModule", "a", "hasContentLength"];

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp8 = tmp;
    if (null != addSuffix) {
      tmp8 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} sedan`;
        }
        text = `om ${tmp}`;
      }
    }
    return tmp8;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    if (addSuffix) {
      if (addSuffix.onlyNumeric) {
        const _String2 = String;
        one = tmp.other.replace("{{count}}", String(arg1));
        const str3 = tmp.other;
      }
    }
    if (arg1 < 13) {
      let StringResult = closure_1[arg1];
    } else {
      const _String = String;
      StringResult = String(arg1);
    }
    one = tmp.other.replace("{{count}}", StringResult);
    const str = tmp.other;
  }
};
export default exports.default;
