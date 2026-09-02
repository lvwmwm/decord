// Module ID: 15761
// Function ID: 15762
// Name: apexExperiment
// Dependencies: [1467, 2]
// Exports: useRiveAppStatePlaybackExperiment

// Module 15761 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1467 */;

const obj = { 1: null };
obj[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-rive-app-state-playback", kind: "user", defaultConfig: { enabled: false }, variations: obj });
const result = set.fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export const useRiveAppStatePlaybackExperiment = function useRiveAppStatePlaybackExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
