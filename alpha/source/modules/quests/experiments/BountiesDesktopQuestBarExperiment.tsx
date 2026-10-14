// Module ID: 13505
// Function ID: 13506
// Name: BountiesDesktopQuestBarExperiment
// Dependencies: [1453, 2]

// Module 13505 (BountiesDesktopQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1453 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-bounties-desktop-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesDesktopQuestBarExperiment.tsx");

export const BountiesDesktopQuestBarExperiment = apexExperiment;
