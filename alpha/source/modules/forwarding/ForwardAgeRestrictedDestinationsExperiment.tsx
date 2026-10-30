// Module ID: 13337
// Function ID: 13338
// Name: ForwardAgeRestrictedDestinationsExperiment
// Dependencies: [1449, 2]

// Module 13337 (ForwardAgeRestrictedDestinationsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-forward-age-restricted-destinations", defaultConfig: { disableAgeRestrictedDestinations: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disableAgeRestrictedDestinations: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/forwarding/ForwardAgeRestrictedDestinationsExperiment.tsx");

export default tmp2;
