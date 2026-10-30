// Module ID: 5199
// Function ID: 5200
// Name: HomeDrawerExperiment
// Dependencies: [1449, 2]

// Module 5199 (HomeDrawerExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj2[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;
