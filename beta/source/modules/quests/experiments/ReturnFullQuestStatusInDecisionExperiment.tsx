// Module ID: 16513
// Function ID: 16514
// Name: ReturnFullQuestStatusInDecisionExperiment
// Dependencies: [1450, 2]
// Exports: getReturnFullQuestStatusInDecision

// Module 16513 (ReturnFullQuestStatusInDecisionExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-11-return-full-quest-status-in-decision", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true }, 2: { enabled: true }, 3: { enabled: true }, 4: { enabled: true }, 5: { enabled: true }, 6: { enabled: true }, 7: { enabled: true }, 8: { enabled: true }, 9: { enabled: true } } };
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/ReturnFullQuestStatusInDecisionExperiment.tsx");

export function getReturnFullQuestStatusInDecision(location) {
  const obj = { location };
  return config.getConfig(obj).enabled;
}
