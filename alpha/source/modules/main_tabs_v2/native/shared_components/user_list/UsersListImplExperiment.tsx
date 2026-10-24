// Module ID: 13865
// Function ID: 13866
// Name: UsersListImplExperiment
// Dependencies: [1455, 2]

// Module 13865 (UsersListImplExperiment)
import ApexExperiment from "ApexExperiment" /* 1455 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { kind: "user", name: "2026-10-users-list-impl", defaultConfig: { list: "fast" }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { list: "legend" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersListImplExperiment.tsx");

export default apexExperiment;
