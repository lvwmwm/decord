// Module ID: 15563
// Function ID: 15564
// Name: RiveAppStatePlaybackExperiment
// Dependencies: [1435, 2]
// Exports: useRiveAppStatePlaybackExperiment

// Module 15563 (RiveAppStatePlaybackExperiment)
import ApexExperiment from "ApexExperiment" /* 1435 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-rive-app-state-playback", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export const useRiveAppStatePlaybackExperiment = function useRiveAppStatePlaybackExperiment(AppContainer) {
  const obj = { location: AppContainer };
  return apexExperiment.useConfig(obj).enabled;
};
