// Module ID: 10342
// Function ID: 10343
// Name: apexExperiment
// Dependencies: [1467, 2]

// Module 10342 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-08-mark-channel-unread", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/channel/MarkChannelUnreadExperiment.tsx");

export const MarkChannelUnreadExperiment = apexExperiment;
