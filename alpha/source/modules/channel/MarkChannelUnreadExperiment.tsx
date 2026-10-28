// Module ID: 10908
// Function ID: 10909
// Name: MarkChannelUnreadExperiment
// Dependencies: [1452, 2]

// Module 10908 (MarkChannelUnreadExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-08-mark-channel-unread", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/channel/MarkChannelUnreadExperiment.tsx");

export const MarkChannelUnreadExperiment = apexExperiment;
