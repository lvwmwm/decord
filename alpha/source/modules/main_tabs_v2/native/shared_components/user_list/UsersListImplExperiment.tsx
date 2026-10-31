// Module ID: 14405
// Function ID: 14406
// Name: UsersListImplExperiment
// Dependencies: [1447, 2]

// Module 14405 (UsersListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-users-list-impl", defaultConfig: { list: "fast" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { list: "legend" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersListImplExperiment.tsx");

export default apexExperiment;
