// Module ID: 11571
// Function ID: 11572
// Name: MobileTimestampUpdatingExperiment
// Dependencies: [1447, 2]
// Exports: useIsMobileTimestampUpdatingEnabled

// Module 11571 (MobileTimestampUpdatingExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-mobile-timestamp-updating", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/native/MobileTimestampUpdatingExperiment.tsx");

export function useIsMobileTimestampUpdatingEnabled(MessagesRenderer) {
  const obj = { location: MessagesRenderer };
  return closure_0.useConfig(obj).enabled;
}
