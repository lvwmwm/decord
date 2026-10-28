// Module ID: 4372
// Function ID: 4373
// Name: formatRelative
// Dependencies: []
// Exports: default

// Module 4372 (formatRelative)
let closure_0 = { lastWeek: "'Pra\u0117jus\u012F' eeee p", yesterday: "'Vakar' p", today: "'\u0160iandien' p", tomorrow: "'Rytoj' p", nextWeek: "eeee p", other: "P" };

export default function formatRelative(arg0, arg1, arg2, arg3) {
  return closure_0[arg0];
};
