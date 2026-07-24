// Module ID: 3987
// Function ID: 33095
// Name: MobileHomeDrawerExperiment
// Dependencies: [1325, 2]

// Module 3987 (MobileHomeDrawerExperiment)
const obj = { name: "2025-10-mobile-home-drawer", kind: "user", defaultConfig: { enableHome: false, landOnHome: false, enablePeekHint: false }, variations: { [1]: { enableHome: true, landOnHome: false, enablePeekHint: true }, [2]: { enableHome: true, landOnHome: true, enablePeekHint: false } } };
const tmp2 = require("getUnitId")(obj);
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerExperiment.tsx");

export const MobileHomeDrawerExperiment = tmp2;
