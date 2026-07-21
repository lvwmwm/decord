// Module ID: 3332
// Function ID: 26139
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3332 (formatDistance)
let closure_0 = { lessThanXSeconds: { -9223372036854775808: "<string:4098359297>", 0: "<string:1392509715>" }, xSeconds: { -9223372036854775808: "<string:27582208>", 0: "<string:38447616>" }, halfAMinute: "en halv minut", lessThanXMinutes: { -9223372036854775808: null, 0: null }, xMinutes: {}, aboutXHours: { -9223372036854775808: "fm", 0: "em" }, xHours: {}, xDays: { -9223372036854775808: "<string:1736966147>", 0: "<string:536281091>" }, aboutXWeeks: { -9223372036854775808: true, 0: true }, xWeeks: { -9223372036854775808: "Array", 0: "DCDBackgroundTaskManager" }, aboutXMonths: {}, xMonths: { -9223372036854775808: null, 0: null }, aboutXYears: { -9223372036854775808: 1107297040, 0: 193429 }, xYears: { -9223372036854775808: "minuta", 0: "minut\u0119" }, overXYears: { -9223372036854775808: 1107297040, 0: 193402 }, almostXYears: { -9223372036854775808: false, 0: false } };
let closure_1 = ["CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", "INVALID_MESSAGE_SEND_USER", "Array", "toHslString", "a", "inviteAgeText", "da", "useSilenceErrorSMMViewNotFound", "align", "cellIndex", "initialTouchX", "a", "hermesStacks"];

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
