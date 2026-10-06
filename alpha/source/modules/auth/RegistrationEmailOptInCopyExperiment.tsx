// Module ID: 15946
// Function ID: 15947
// Name: RegistrationEmailOptInCopyExperiment
// Dependencies: [1440, 2]

// Module 15946 (RegistrationEmailOptInCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "installation", name: "2026-09-registration-email-opt-in-copy", defaultConfig: { trackingCopy: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { trackingCopy: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/auth/RegistrationEmailOptInCopyExperiment.tsx");

export default apexExperiment;
