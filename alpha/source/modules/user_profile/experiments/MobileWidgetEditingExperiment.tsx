// Module ID: 16406
// Function ID: 16407
// Name: MobileWidgetEditingExperiment
// Dependencies: [1448, 2]
// Exports: useIsMobileWidgetEditingEnabled

// Module 16406 (MobileWidgetEditingExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-mobile-widget-editing", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/MobileWidgetEditingExperiment.tsx");

export function useIsMobileWidgetEditingEnabled(ProfileCustomizationSettingScreen) {
  const obj = { location: ProfileCustomizationSettingScreen };
  return closure_0.useConfig(obj).enabled;
}
