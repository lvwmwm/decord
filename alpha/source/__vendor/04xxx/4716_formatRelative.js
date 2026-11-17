// Module ID: 4716
// Function ID: 4717
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4716 (formatRelative)
let closure_0 = { lastWeek: "'i' EEEE's kl.' p", yesterday: "'ig\u00E5r kl.' p", today: "'idag kl.' p", tomorrow: "'imorgon kl.' p", nextWeek: "EEEE 'kl.' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
