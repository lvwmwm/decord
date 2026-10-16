// Module ID: 4301
// Function ID: 4302
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4301 (formatRelative)
let closure_0 = { lastWeek: "'viime' eeee 'klo' p", yesterday: "'eilen klo' p", today: "'t\u00E4n\u00E4\u00E4n klo' p", tomorrow: "'huomenna klo' p", nextWeek: "'ensi' eeee 'klo' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
