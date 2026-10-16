// Module ID: 4349
// Function ID: 4350
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4349 (formatRelative)
let closure_0 = { lastWeek: "'afgelopen' eeee 'om' p", yesterday: "'gisteren om' p", today: "'vandaag om' p", tomorrow: "'morgen om' p", nextWeek: "eeee 'om' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
