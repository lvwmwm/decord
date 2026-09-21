// Module ID: 9517
// Function ID: 9518
// Name: AgeRestrictedApplicationCommandsExperiment
// Dependencies: [1439, 2]

// Module 9517 (AgeRestrictedApplicationCommandsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
