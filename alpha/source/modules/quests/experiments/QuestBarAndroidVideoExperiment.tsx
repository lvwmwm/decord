// Module ID: 16805
// Function ID: 16806
// Name: QuestBarAndroidVideoExperiment
// Dependencies: [1451, 2]

// Module 16805 (QuestBarAndroidVideoExperiment)
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-quest-bar-android-video", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarAndroidVideoExperiment.tsx");

export const QuestBarAndroidVideoExperiment = apexExperiment;
