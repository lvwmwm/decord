// Module ID: 17490
// Function ID: 17491
// Name: RiveAppStatePlaybackExperiment
// Dependencies: [1452, 2]
// Exports: useRiveAppStatePlaybackExperiment

// Module 17490 (RiveAppStatePlaybackExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-06-rive-app-state-playback", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export function useRiveAppStatePlaybackExperiment(AppContainer) {
  const obj = { location: AppContainer };
  return apexExperiment.useConfig(obj).enabled;
}
