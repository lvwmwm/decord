// Module ID: 8800
// Function ID: 8801
// Name: apexExperiment
// Dependencies: [1468, 8801, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 8800 (apexExperiment)
import set from "set" /* 2 */;
import usePremiumGroupExperimentDefault from "usePremiumGroupExperiment" /* 8801 */;
import ApexExperiment from "ApexExperiment" /* 1468 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = set.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = usePremiumGroupExperimentDefault(obj);
  return apexExperiment.useConfig(obj) && !usePremiumGroupExperimentDefault(obj);
};
