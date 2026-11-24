// Module ID: 11869
// Function ID: 11870
// Name: MobileTimestampUpdatingExperiment
// Dependencies: [1450, 2]
// Exports: useIsMobileTimestampUpdatingEnabled

// Module 11869 (MobileTimestampUpdatingExperiment)
import ApexExperiment from "ApexExperiment" /* 1450 */;
import size from "module_2" /* 2 */;

let obj = { name: "2026-10-mobile-timestamp-updating", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/messages/native/MobileTimestampUpdatingExperiment.tsx");

export function useIsMobileTimestampUpdatingEnabled(MessagesRenderer) {
  const obj = { location: MessagesRenderer };
  return closure_0.useConfig(obj).enabled;
}
