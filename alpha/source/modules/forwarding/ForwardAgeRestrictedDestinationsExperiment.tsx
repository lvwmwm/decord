// Module ID: 11580
// Function ID: 11581
// Name: ForwardAgeRestrictedDestinationsExperiment
// Dependencies: [1453, 2]

// Module 11580 (ForwardAgeRestrictedDestinationsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-forward-age-restricted-destinations", defaultConfig: { disableAgeRestrictedDestinations: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disableAgeRestrictedDestinations: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/forwarding/ForwardAgeRestrictedDestinationsExperiment.tsx");

export default tmp2;
