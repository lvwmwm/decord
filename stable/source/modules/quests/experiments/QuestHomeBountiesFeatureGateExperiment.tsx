// Module ID: 10707
// Function ID: 10708
// Name: QuestHomeBountiesFeatureGateExperiment
// Dependencies: [1441, 2]

// Module 10707 (QuestHomeBountiesFeatureGateExperiment)
import ApexExperiment from "ApexExperiment" /* 1441 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-quest-home-bounties-feature-gate", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesFeatureGateExperiment.tsx");

export const QuestHomeBountiesFeatureGateExperiment = apexExperiment;
