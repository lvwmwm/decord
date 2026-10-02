// Module ID: 4000
// Function ID: 4001
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4000 (formatRelative)
let closure_0 = { lastWeek: "'\uC9C0\uB09C' eeee p", yesterday: "'\uC5B4\uC81C' p", today: "'\uC624\uB298' p", tomorrow: "'\uB0B4\uC77C' p", nextWeek: "'\uB2E4\uC74C' eeee p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
