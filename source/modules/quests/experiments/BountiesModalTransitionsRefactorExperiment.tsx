// Module ID: 14579
// Function ID: 14580
// Name: apexExperiment
// Dependencies: [1468, 2]
// Exports: useIsBountiesModalTransitionsRefactorEnabled

// Module 14579 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-07-bounties-modal-transitions-refactor", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx");

export const BountiesModalTransitionsRefactorExperiment = apexExperiment;
export const useIsBountiesModalTransitionsRefactorEnabled = function useIsBountiesModalTransitionsRefactorEnabled(VIDEO_MODAL_MOBILE) {
  return apexExperiment.useConfig({ location: VIDEO_MODAL_MOBILE }).enabled;
};
