// Module ID: 11018
// Function ID: 11019
// Name: MobileGoLiveUpsellExperiment
// Dependencies: [1453, 2]

// Module 11018 (MobileGoLiveUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: obj2 };
obj2 = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj2[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
