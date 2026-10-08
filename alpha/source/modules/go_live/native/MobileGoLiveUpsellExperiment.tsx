// Module ID: 10845
// Function ID: 10846
// Name: MobileGoLiveUpsellExperiment
// Dependencies: [1452, 2]

// Module 10845 (MobileGoLiveUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: obj2 };
obj2 = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj2[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
