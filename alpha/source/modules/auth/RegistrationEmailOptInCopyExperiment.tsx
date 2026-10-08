// Module ID: 16206
// Function ID: 16207
// Name: RegistrationEmailOptInCopyExperiment
// Dependencies: [1452, 2]

// Module 16206 (RegistrationEmailOptInCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "installation", name: "2026-09-registration-email-opt-in-copy", defaultConfig: { trackingCopy: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { trackingCopy: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/auth/RegistrationEmailOptInCopyExperiment.tsx");

export default apexExperiment;
