// Module ID: 9595
// Function ID: 9596
// Name: getUnitId
// Dependencies: [1368, 2]

// Module 9595 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
