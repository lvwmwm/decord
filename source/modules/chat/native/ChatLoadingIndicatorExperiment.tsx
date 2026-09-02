// Module ID: 13154
// Function ID: 13155
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 13154 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-01-chat-loading-indicator", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/chat/native/ChatLoadingIndicatorExperiment.tsx");

export const ChatLoadingIndicatorExperiment = apexExperiment;
