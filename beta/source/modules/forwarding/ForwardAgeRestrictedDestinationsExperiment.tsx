// Module ID: 11846
// Function ID: 11847
// Name: ForwardAgeRestrictedDestinationsExperiment
// Dependencies: [1439, 2]

// Module 11846 (ForwardAgeRestrictedDestinationsExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1439 */;

const obj = { kind: "user", name: "2026-08-forward-age-restricted-destinations", defaultConfig: { disableAgeRestrictedDestinations: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { disableAgeRestrictedDestinations: true };
obj.variations = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/ForwardAgeRestrictedDestinationsExperiment.tsx");

export default apex_ApexExperimentDefault(obj);
