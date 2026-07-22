// Module ID: 3284
// Function ID: 26017
// Name: formatDistance
// Dependencies: []
// Exports: default

// Module 3284 (formatDistance)
let closure_0 = { lessThanXSeconds: { removeInternalFields: false, ga: false }, xSeconds: {}, halfAMinute: "30\uCD08", lessThanXMinutes: { removeInternalFields: null, ga: null }, xMinutes: {}, aboutXHours: { removeInternalFields: false, ga: false }, xHours: { removeInternalFields: true, ga: 1610613502 }, xDays: { removeInternalFields: "_channelId", ga: "MAX_FAVORITE_GIFS_SIZE" }, aboutXWeeks: { removeInternalFields: "<string:3952803843>", ga: "<string:1300627458>" }, xWeeks: { removeInternalFields: null, ga: null }, aboutXMonths: {}, xMonths: { removeInternalFields: true, ga: true }, aboutXYears: { removeInternalFields: false, ga: false }, xYears: { removeInternalFields: null, ga: null }, overXYears: { removeInternalFields: "isArray", ga: "Path" }, almostXYears: { removeInternalFields: null, ga: null } };

export default function formatDistance(arg0, arg1, addSuffix) {
  if ("string" === typeof closure_0[arg0]) {
    let tmp4 = tmp;
    if (null != addSuffix) {
      tmp4 = tmp;
      if (addSuffix.addSuffix) {
        if (!addSuffix.comparison) {
          let text = `${tmp} 전`;
        }
        text = `${tmp} 후`;
      }
    }
    return tmp4;
  } else if (1 === arg1) {
    let one = tmp.one;
  } else {
    one = tmp.other.replace("{{count}}", arg1.toString());
    const str = tmp.other;
  }
};
export default exports.default;
