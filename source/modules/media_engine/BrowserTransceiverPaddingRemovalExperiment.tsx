// Module ID: 13735
// Function ID: 13736
// Name: apexExperiment
// Dependencies: [1468, 2]

// Module 13735 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-browser-transceiver-padding-removal", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/media_engine/BrowserTransceiverPaddingRemovalExperiment.tsx");

export const BrowserTransceiverPaddingRemovalExperiment = apexExperiment;
