// Module ID: 9546
// Function ID: 9547
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 9546 (getUnitId)
const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
