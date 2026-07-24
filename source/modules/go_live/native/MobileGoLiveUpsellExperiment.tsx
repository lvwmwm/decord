// Module ID: 10725
// Function ID: 83535
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10725 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-mobile-go-live-upsell", kind: "user", defaultConfig: { showMobileGoLiveUpsell: false }, variations: { [1]: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "one-step" }, [2]: { showMobileGoLiveUpsell: true, goLiveUpsellVariant: "two-step" } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/go_live/native/MobileGoLiveUpsellExperiment.tsx");

export default apexExperiment;
