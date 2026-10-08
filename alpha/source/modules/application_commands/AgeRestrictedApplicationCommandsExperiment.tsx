// Module ID: 9762
// Function ID: 9763
// Name: AgeRestrictedApplicationCommandsExperiment
// Dependencies: [1453, 2]

// Module 9762 (AgeRestrictedApplicationCommandsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
