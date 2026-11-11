// Module ID: 4619
// Function ID: 4620
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4619 (formatRelative)
let closure_0 = { lastWeek: "'forrige' eeee 'kl.' p", yesterday: "'i g\u00E5r kl.' p", today: "'i dag kl.' p", tomorrow: "'i morgen kl.' p", nextWeek: "EEEE 'kl.' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
