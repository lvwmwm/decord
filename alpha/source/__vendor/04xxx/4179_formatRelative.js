// Module ID: 4179
// Function ID: 4180
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4179 (formatRelative)
let closure_0 = { lastWeek: "'letzten' eeee 'um' p", yesterday: "'gestern um' p", today: "'heute um' p", tomorrow: "'morgen um' p", nextWeek: "eeee 'um' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
