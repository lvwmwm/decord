// Module ID: 9650
// Function ID: 9651
// Name: MobileGoLiveUpsellExperiment
// Dependencies: [1440, 2]

// Module 9650 (MobileGoLiveUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: obj2 };
obj2 = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj2[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
