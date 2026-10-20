// Module ID: 10124
// Function ID: 10125
// Name: AgeRestrictedApplicationCommandsExperiment
// Dependencies: [1456, 2]

// Module 10124 (AgeRestrictedApplicationCommandsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1456 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-05-age-restricted-application-commands", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/application_commands/AgeRestrictedApplicationCommandsExperiment.tsx");

export default tmp2;
