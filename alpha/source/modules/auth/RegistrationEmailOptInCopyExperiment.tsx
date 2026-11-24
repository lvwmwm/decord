// Module ID: 17530
// Function ID: 17531
// Name: RegistrationEmailOptInCopyExperiment
// Dependencies: [1450, 2]

// Module 17530 (RegistrationEmailOptInCopyExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "installation", name: "2026-09-registration-email-opt-in-copy", defaultConfig: { trackingCopy: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { trackingCopy: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/auth/RegistrationEmailOptInCopyExperiment.tsx");

export default apexExperiment;
