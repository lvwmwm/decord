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
let closure_0 = ["vermoeid", "zzz", null, null, null, null, null];
const obj = { "Bool(false)": "default", "Bool(false)": true, "Bool(false)": "/assets/.cache/intl/ZGVzaWdu", "Bool(false)": null, "Bool(false)": "8beeab08e2769cae66355c52184af7f2", "Bool(false)": "vi.messages.8beeab08e2769cae66355c52184af7f2.compiled.messages", lastWeek: week(false), nextWeek: week(true) };

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
