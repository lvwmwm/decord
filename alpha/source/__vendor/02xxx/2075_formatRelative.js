// Module ID: 2075
// Function ID: 2076
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 2075 (formatRelative)
let closure_0 = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
