// Module ID: 9535
// Function ID: 74436
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 9535 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-10-gif-providers-multi-treatment", kind: "user", defaultConfig: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: true }, variations: { [0]: { provider: "tenor", fallbackProvider: "tenor", enableMetrics: true }, [1]: { provider: "giphy", fallbackProvider: "tenor", enableMetrics: true }, [2]: { provider: "klipy", fallbackProvider: "tenor", enableMetrics: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/gif_picker/experiments/GifProvidersExperiment.tsx");

export const GifProvidersExperiment = apexExperiment;
