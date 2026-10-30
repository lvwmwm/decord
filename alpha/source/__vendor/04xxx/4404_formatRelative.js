// Module ID: 4404
// Function ID: 4405
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4404 (formatRelative)
let closure_0 = { lastWeek: "eeee 'trecut\u0103 la' p", yesterday: "'ieri la' p", today: "'ast\u0103zi la' p", tomorrow: "'m\u00E2ine la' p", nextWeek: "eeee 'viitoare la' p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
