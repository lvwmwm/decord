// Module ID: 11181
// Function ID: 11182
// Name: ForwardAgeRestrictedDestinationsExperiment
// Dependencies: [1436, 2]

// Module 11181 (ForwardAgeRestrictedDestinationsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-08-forward-age-restricted-destinations", defaultConfig: { disableAgeRestrictedDestinations: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { disableAgeRestrictedDestinations: true };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/forwarding/ForwardAgeRestrictedDestinationsExperiment.tsx");

export default tmp2;
