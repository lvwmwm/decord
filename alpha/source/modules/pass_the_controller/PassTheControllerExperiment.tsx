// Module ID: 14819
// Function ID: 14820
// Name: PassTheControllerExperiment
// Dependencies: [1452, 2]

// Module 14819 (PassTheControllerExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-11-pass-the-controller", kind: "guild", defaultConfig: { enabled: false, allowWrestling: false }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, allowWrestling: false } };
obj2[2] = { enabled: true, allowWrestling: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/pass_the_controller/PassTheControllerExperiment.tsx");

export default apexExperiment;
