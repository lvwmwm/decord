// Module ID: 10252
// Function ID: 10253
// Name: MobileGoLiveUpsellExperiment
// Dependencies: [1438, 2]

// Module 10252 (MobileGoLiveUpsellExperiment)
import ApexExperiment from "ApexExperiment" /* 1438 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: null };
const obj2 = { 1: null, 2: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" } };
obj2[2] = { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
