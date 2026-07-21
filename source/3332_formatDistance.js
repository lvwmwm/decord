// Module ID: 3332
// Function ID: 26144
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3332 (formatDistance)
let closure_0 = { lessThanXSeconds: { "Bool(false)": false, "Bool(false)": false }, xSeconds: {}, halfAMinute: "en halv minut", lessThanXMinutes: {}, xMinutes: {}, aboutXHours: { "Bool(false)": "<string:1627390418>", "Bool(false)": "<string:3489661344>" }, xHours: { "Bool(false)": "<string:51133952>", "Bool(false)": "<string:21361408>" }, xDays: {}, aboutXWeeks: { "Bool(false)": false, "Bool(false)": false }, xWeeks: { "Bool(false)": null, "Bool(false)": null }, aboutXMonths: {}, xMonths: { "Bool(false)": null, "Bool(false)": null }, aboutXYears: { "Bool(false)": "a", "Bool(false)": "isArray" }, xYears: {}, overXYears: { "Bool(false)": 283246594, "Bool(false)": -79560701 }, almostXYears: { "Bool(false)": 283312130, "Bool(false)": -532545533 } };
let closure_1 = ["SOLID", "APPROVED", "Array", "useDeleteSubscriptionListing", "a", "handleSend", "defaultLocale", "GuildBadgeFire", "GuildEntityDao", "_parser", "microphoneUnit", "a", "hasConnectedOnce"];

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
