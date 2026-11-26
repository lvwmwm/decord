// Module ID: 10452
// Function ID: 10453
// Name: OneDayFractionalNitroExperiment
// Dependencies: [1452, 10453, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 10452 (OneDayFractionalNitroExperiment)
import PremiumGroupExperimentDefault from "PremiumGroupExperiment" /* 10453 */;
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = size.fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export function useOneDayFractionalNitroEnabled(product_card) {
  const obj = { location: product_card };
  const obj2 = { location: product_card };
  const tmp = PremiumGroupExperimentDefault(obj);
  const tmp2 = apexExperiment.useConfig(obj2) && !tmp;
  return tmp2;
}
