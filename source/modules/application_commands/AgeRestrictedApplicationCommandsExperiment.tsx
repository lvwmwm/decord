// Module ID: 8432
// Function ID: 8433
// Name: getUnitId
// Dependencies: [1469, 2]

// Module 8432 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1469 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
