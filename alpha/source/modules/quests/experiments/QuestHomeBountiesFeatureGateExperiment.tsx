// Module ID: 12922
// Function ID: 12923
// Name: QuestHomeBountiesFeatureGateExperiment
// Dependencies: [1453, 2]

// Module 12922 (QuestHomeBountiesFeatureGateExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-09-quest-home-bounties-feature-gate", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/QuestHomeBountiesFeatureGateExperiment.tsx");

export const QuestHomeBountiesFeatureGateExperiment = apexExperiment;
