// Module ID: 13086
// Function ID: 13087
// Name: apexExperiment
// Dependencies: [1471, 2]

// Module 13086 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-browser-transceiver-padding-removal", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/media_engine/BrowserTransceiverPaddingRemovalExperiment.tsx");

export const BrowserTransceiverPaddingRemovalExperiment = apexExperiment;
