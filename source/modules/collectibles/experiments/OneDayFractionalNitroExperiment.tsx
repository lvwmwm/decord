// Module ID: 12594
// Function ID: 12595
// Name: apexExperiment
// Dependencies: [1468, 12595, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 12594 (apexExperiment)
import set from "set" /* 2 */;
import usePremiumGroupExperimentDefault from "usePremiumGroupExperiment" /* 12595 */;
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
