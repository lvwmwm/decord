// Module ID: 4704
// Function ID: 4705
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4704 (formatRelative)
let closure_0 = { lastWeek: "eeee 'trecut\u0103 la' p", yesterday: "'ieri la' p", today: "'ast\u0103zi la' p", tomorrow: "'m\u00E2ine la' p", nextWeek: "eeee 'viitoare la' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
