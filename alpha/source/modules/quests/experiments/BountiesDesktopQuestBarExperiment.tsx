// Module ID: 9672
// Function ID: 9673
// Name: BountiesDesktopQuestBarExperiment
// Dependencies: [1448, 2]

// Module 9672 (BountiesDesktopQuestBarExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
const obj = { name: "2026-10-bounties-desktop-quest-bar", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesDesktopQuestBarExperiment.tsx");

export const BountiesDesktopQuestBarExperiment = apexExperiment;
