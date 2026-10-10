// Module ID: 4216
// Function ID: 4217
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4216 (formatRelative)
let closure_0 = { lastWeek: "'sidste' eeee 'kl.' p", yesterday: "'i g\u00E5r kl.' p", today: "'i dag kl.' p", tomorrow: "'i morgen kl.' p", nextWeek: "'p\u00E5' eeee 'kl.' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
