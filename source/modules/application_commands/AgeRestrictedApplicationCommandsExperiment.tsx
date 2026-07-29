// Module ID: 8027
// Function ID: 8028
// Name: getUnitId
// Dependencies: [1349, 2]

// Module 8027 (getUnitId)
const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = require("getUnitId")({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
