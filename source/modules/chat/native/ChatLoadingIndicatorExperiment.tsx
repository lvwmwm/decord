// Module ID: 10122
// Function ID: 78261
// Name: apexExperiment
// Dependencies: [1428, 2]

// Module 10122 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-01-chat-loading-indicator", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;
