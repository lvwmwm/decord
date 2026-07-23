// Module ID: 10118
// Function ID: 78307
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10118 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-chat-loading-indicator", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;
