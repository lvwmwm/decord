// Module ID: 4224
// Function ID: 4225
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4224 (formatRelative)
let closure_0 = { lastWeek: "'letzten' eeee 'um' p", yesterday: "'gestern um' p", today: "'heute um' p", tomorrow: "'morgen um' p", nextWeek: "eeee 'um' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
