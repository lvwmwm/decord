// Module ID: 4698
// Function ID: 4699
// Name: HomeDrawerExperiment
// Dependencies: [1436, 2]

// Module 4698 (HomeDrawerExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1436 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: obj2 };
obj2 = { 1: null, 2: { enableHome: true, landOnHome: false, enablePeekHint: true } };
obj2[2] = { enableHome: true, landOnHome: true, enablePeekHint: false };
const tmp2 = apex_ApexExperimentDefault(obj);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;
