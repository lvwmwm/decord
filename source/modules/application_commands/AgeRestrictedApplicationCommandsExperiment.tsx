// Module ID: 9407
// Function ID: 9408
// Name: getUnitId
// Dependencies: [1434, 2]

// Module 9407 (getUnitId)
import getUnitIdDefault from "getUnitId" /* 1434 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
