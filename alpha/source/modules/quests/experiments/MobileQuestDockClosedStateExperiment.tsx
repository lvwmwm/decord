// Module ID: 16513
// Function ID: 16514
// Name: MobileQuestDockClosedStateExperiment
// Dependencies: [1450, 2]

// Module 16513 (MobileQuestDockClosedStateExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-11-mobile-quest-bar-closed-state", kind: "user", defaultConfig: { autoCloseEnabled: true }, variations: { 0: { autoCloseEnabled: true }, 1: { autoCloseEnabled: false } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/MobileQuestDockClosedStateExperiment.tsx");

export const MobileQuestDockClosedStateExperiment = apexExperiment;
