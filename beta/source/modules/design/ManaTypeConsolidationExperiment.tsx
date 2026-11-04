// Module ID: 7149
// Function ID: 7150
// Name: ManaTypeConsolidationExperiment
// Dependencies: [1447, 2]
// Exports: useManaTypeConsolidationExperiment

// Module 7149 (ManaTypeConsolidationExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-05-mana-type-consolidation", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/ManaTypeConsolidationExperiment.tsx");

export default apexExperiment;
export function useManaTypeConsolidationExperiment(ChannelHeaderAppSubTitle) {
  const obj = { location: ChannelHeaderAppSubTitle };
  return apexExperiment.useConfig(obj).enabled;
}
