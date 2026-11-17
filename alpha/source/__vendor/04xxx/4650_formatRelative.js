// Module ID: 4650
// Function ID: 4651
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4650 (formatRelative)
const f89714 = (arg0) => {
  let str = "'m\u00FAlt' ";
  const concat = "".concat;
  const tmp = _true[arg0.getUTCDay(arg0)];
  if (c0) {
    str = "";
  }
  const combined = concat(str, "'");
  return combined.concat(tmp, "' p'-kor'");
};
let closure_0 = ["vas\u00E1rnap", "h\u00E9tf\u0151n", "kedden", "szerd\u00E1n", "cs\u00FCt\u00F6rt\u00F6k\u00F6n", "p\u00E9nteken", "szombaton"];
const obj = { lastWeek: f89714, yesterday: "'tegnap' p'-kor'", today: "'ma' p'-kor'", tomorrow: "'holnap' p'-kor'", nextWeek: f89714, other: "P" };
let c0 = true;

export default function formatRelative(arg0, arg1) {
  let tmpResult = tmp;
  if (typeof obj[arg0] === "function") {
    tmpResult = tmp(arg1);
  }
  return tmpResult;
};
