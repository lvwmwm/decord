// Module ID: 3268
// Function ID: 25973
// Name: week
// Dependencies: []
// Exports: default

// Module 3268 (week)
function week(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let str = "'m\u00FAlt' ";
    if (arg0) {
      str = "";
    }
    const combined = "".concat(str, "'");
    return combined.concat(arg0[arg0.getUTCDay(arg0)], "' p'-kor'");
  };
}
let closure_0 = [];
const obj = { areIntervalsOverlapping: "ip", clamp: "r", closestIndexTo: "isArray", closestTo: "accessible", compareAsc: "then", compareDesc: "key", lastWeek: week(false), nextWeek: week(true) };

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
