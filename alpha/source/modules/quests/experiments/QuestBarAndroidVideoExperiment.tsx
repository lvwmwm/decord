// Module ID: 16592
// Function ID: 16593
// Name: QuestBarAndroidVideoExperiment
// Dependencies: [1450, 2]

// Module 16592 (QuestBarAndroidVideoExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-quest-bar-android-video", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestBarAndroidVideoExperiment.tsx");

export const QuestBarAndroidVideoExperiment = apexExperiment;
