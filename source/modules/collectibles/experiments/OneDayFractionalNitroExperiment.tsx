// Module ID: 11846
// Function ID: 91795
// Name: apexExperiment
// Dependencies: [1428, 11847, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 11846 (apexExperiment)
import ApexExperiment from "ApexExperiment";

let obj = { name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { [1]: true } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = importDefault(11847)(obj);
  return apexExperiment.useConfig(obj) && !importDefault(11847)(obj);
};
