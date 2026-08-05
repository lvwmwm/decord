// Module ID: 12055
// Function ID: 12056
// Name: apexExperiment
// Dependencies: [1452, 12056, 2]
// Exports: useOneDayFractionalNitroEnabled

// Module 12055 (apexExperiment)
import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-04-one-day-fractional-nitro", kind: "user", defaultConfig: false, variations: { 1: true } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/OneDayFractionalNitroExperiment.tsx");

export default apexExperiment;
export const useOneDayFractionalNitroEnabled = function useOneDayFractionalNitroEnabled(product_card) {
  let obj = { location: product_card };
  obj = { location: product_card };
  const tmp = importDefault(12056)(obj);
  return apexExperiment.useConfig(obj) && !importDefault(12056)(obj);
};
