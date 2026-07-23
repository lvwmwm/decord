// Module ID: 14725
// Function ID: 112260
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useRiveAppStatePlaybackExperiment

// Module 14725 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2026-06-rive-app-state-playback", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export const useRiveAppStatePlaybackExperiment = function useRiveAppStatePlaybackExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
