// Module ID: 14782
// Function ID: 112707
// Name: apexExperiment
// Dependencies: [1428, 2]
// Exports: useRiveRendererExperiment

// Module 14782 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const obj = { name: "2025-12-rive-mobile-renderer", kind: "user", defaultConfig: { enabled: false }, variations: { [1]: { enabled: true } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/design/RiveMobileRendererExperiment.tsx");

export default apexExperiment;
export const useRiveRendererExperiment = function useRiveRendererExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
