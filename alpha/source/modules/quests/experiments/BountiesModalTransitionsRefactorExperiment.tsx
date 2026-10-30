// Module ID: 16858
// Function ID: 16859
// Name: BountiesModalTransitionsRefactorExperiment
// Dependencies: [1448, 2]
// Exports: useIsBountiesModalTransitionsRefactorEnabled

// Module 16858 (BountiesModalTransitionsRefactorExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-bounties-modal-transitions-refactor", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/quests/experiments/BountiesModalTransitionsRefactorExperiment.tsx");

export const BountiesModalTransitionsRefactorExperiment = apexExperiment;
export function useIsBountiesModalTransitionsRefactorEnabled(VIDEO_MODAL_MOBILE) {
  const obj = { location: VIDEO_MODAL_MOBILE };
  return apexExperiment.useConfig(obj).enabled;
}
