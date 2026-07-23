// Module ID: 12738
// Function ID: 99242
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 12738 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-04-browser-transceiver-padding-removal", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserTransceiverPaddingRemovalExperiment.tsx");

export const BrowserTransceiverPaddingRemovalExperiment = apexExperiment;
