// Module ID: 3228
// Function ID: 25872
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3228 (formatDistance)
let closure_0 = { lessThanXSeconds: { standalone: {}, withPreposition: {} }, xSeconds: { standalone: { removeInternalFields: null, ga: null }, withPreposition: { removeInternalFields: null, ga: null } }, halfAMinute: { "Null": "Checkbox", "Null": null }, lessThanXMinutes: { standalone: {}, withPreposition: {} }, xMinutes: { standalone: {}, withPreposition: {} }, aboutXHours: { standalone: { removeInternalFields: "<string:1291846333>", ga: "<string:1627390317>" }, withPreposition: { removeInternalFields: "<string:1291846333>", ga: "<string:1627390317>" } }, xHours: { standalone: { removeInternalFields: true, ga: true }, withPreposition: { removeInternalFields: true, ga: true } }, xDays: { standalone: {}, withPreposition: {} }, aboutXWeeks: { standalone: {}, withPreposition: {} }, xWeeks: { standalone: { removeInternalFields: "r", ga: "SIGNED" }, withPreposition: { removeInternalFields: "r", ga: "SIGNED" } }, aboutXMonths: { standalone: { removeInternalFields: "r", ga: "NativeStackView" }, withPreposition: { removeInternalFields: 377564167843241300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, ga: 11634569424540728000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 } }, xMonths: { standalone: { removeInternalFields: null, ga: null }, withPreposition: {} }, aboutXYears: { standalone: { removeInternalFields: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000349484815600443, ga: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000340900745895733 }, withPreposition: { removeInternalFields: "reType", ga: "WRITE_CALL_LOG" } }, xYears: { standalone: { removeInternalFields: false, ga: false }, withPreposition: {} }, overXYears: { standalone: {}, withPreposition: {} }, almostXYears: { standalone: { removeInternalFields: null, ga: null }, withPreposition: { removeInternalFields: 1258356738, ga: 2101870594 } } };

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
