// Module ID: 3228
// Function ID: 25872
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3228 (formatDistance)
let closure_0 = { lessThanXSeconds: { standalone: { "Bool(false)": "<string:3944498370>", "Bool(false)": "<string:3944480770>" }, withPreposition: { "Bool(false)": "<string:3944498370>", "Bool(false)": "<string:3944480770>" } }, xSeconds: { standalone: { "Bool(false)": "isArray", "Bool(false)": "then" }, withPreposition: { "Bool(false)": "isArray", "Bool(false)": "then" } }, halfAMinute: { y: null, isArray: null }, lessThanXMinutes: { standalone: {}, withPreposition: {} }, xMinutes: { standalone: {}, withPreposition: {} }, aboutXHours: { standalone: { "Bool(false)": null, "Bool(false)": null }, withPreposition: { "Bool(false)": null, "Bool(false)": null } }, xHours: { standalone: {}, withPreposition: {} }, xDays: { standalone: { "Bool(false)": "%Math%", "Bool(false)": "nFzpM5" }, withPreposition: {} }, aboutXWeeks: { standalone: { "Bool(false)": null, "Bool(false)": null }, withPreposition: { "Bool(false)": null, "Bool(false)": null } }, xWeeks: { standalone: { "Bool(false)": null, "Bool(false)": null }, withPreposition: { "Bool(false)": null, "Bool(false)": null } }, aboutXMonths: { standalone: { "Bool(false)": null, "Bool(false)": null }, withPreposition: {} }, xMonths: { standalone: { "Bool(false)": true, "Bool(false)": true }, withPreposition: {} }, aboutXYears: { standalone: { "Bool(false)": "vormittags", "Bool(false)": "nachmittags" }, withPreposition: {} }, xYears: { standalone: { "Bool(false)": 783876098, "Bool(false)": 1494876161 }, withPreposition: { "Bool(false)": null, "Bool(false)": null } }, overXYears: { standalone: {}, withPreposition: { "Bool(false)": true, "Bool(false)": true } }, almostXYears: { standalone: {}, withPreposition: {} } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if (null != addSuffix) {
    if (addSuffix.addSuffix) {
      let standalone = closure_0[arg0].withPreposition;
    }
    if ("string" === typeof standalone) {
      let tmp5 = standalone;
      if (null != addSuffix) {
        tmp5 = standalone;
        if (addSuffix.addSuffix) {
          if (!addSuffix.comparison) {
            let text = `vor ${standalone}`;
          }
          text = `in ${standalone}`;
        }
      }
      return tmp5;
    } else if (1 === arg1) {
      let one = standalone.one;
    } else {
      const _String = String;
      one = standalone.other.replace("{{count}}", String(arg1));
      const str2 = standalone.other;
    }
  }
  standalone = closure_0[arg0].standalone;
};
export default exports.default;
