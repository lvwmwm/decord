// Module ID: 9758
// Function ID: 9759
// Name: BountiesDesktopQuestBarExperiment
// Dependencies: [1450, 2]

// Module 9758 (BountiesDesktopQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-bounties-desktop-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesDesktopQuestBarExperiment.tsx");

export const BountiesDesktopQuestBarExperiment = apexExperiment;
