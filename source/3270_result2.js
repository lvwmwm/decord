// Module ID: 3270
// Function ID: 25978
// Name: result2
// Dependencies: []
// Exports: default

// Module 3270 (result2)
function week(arg0) {
  let closure_0 = arg0;
  return (arg0) => {
    let str = "'m\u00FAlt' ";
    if (table) {
      str = "";
    }
    const combined = "".concat(str, "'");
    return combined.concat(table[arg0.getUTCDay(arg0)], "' p'-kor'");
  };
}
let closure_0 = ["vas\u00E1rnap", "h\u00E9tf\u0151n", "kedden", "szerd\u00E1n", "cs\u00FCt\u00F6rt\u00F6k\u00F6n", "p\u00E9nteken", "szombaton"];
const obj = { lastWeek: week(false), yesterday: "'tegnap' p'-kor'", today: "'ma' p'-kor'", tomorrow: "'holnap' p'-kor'", nextWeek: week(true), other: "P" };

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if ("function" === typeof obj[arg0]) {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
export default exports.default;
