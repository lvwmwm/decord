// Module ID: 8849
// Function ID: 69672
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 8849 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-nitro-gifting-price-copy-tweaks", kind: "user", defaultConfig: { showGiftPrice: true, useNewCopy: false, monthlyDefaultSelected: false }, variations: { [1]: { showGiftPrice: false, useNewCopy: false, monthlyDefaultSelected: false }, [2]: { showGiftPrice: true, useNewCopy: true, monthlyDefaultSelected: false }, [3]: { showGiftPrice: true, useNewCopy: true, monthlyDefaultSelected: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/premium/gifting/experiments/NitroGiftPriceCopyExperiment.tsx");

export default apexExperiment;
