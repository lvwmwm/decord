// Module ID: 4193
// Function ID: 36068
// Name: useIsClipsSettingsRedesignEnabled
// Dependencies: [4183, 1428, 4188, 566, 2]
// Exports: isClipsSettingsRedesignEnabled, useDisabledWhenAutoclippingOff

// Module 4193 (useIsClipsSettingsRedesignEnabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";

const require = arg1;
function useIsClipsSettingsRedesignEnabled() {
  return ApexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
}
function useDisabledWhenClippingOff() {
  let tmp = useIsClipsSettingsRedesignEnabled();
  if (tmp) {
    tmp = !obj.useIsClipsEnabled();
  }
  return tmp;
}
ApexExperiment = { kind: "user", name: "2026-06-clips-settings-redesign", defaultConfig: { enableRedesign: false }, variations: { [1]: { enableRedesign: true } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("isClipsEnabled").fileFinishedImporting("modules/clips/ClipsSettingsRedesignExperiment.tsx");

export const ClipsSettingsRedesignExperiment = ApexExperiment;
export { useIsClipsSettingsRedesignEnabled };
export const isClipsSettingsRedesignEnabled = function isClipsSettingsRedesignEnabled() {
  return ApexExperiment.getConfig({ location: "isClipsSettingsRedesignEnabled" }).enableRedesign;
};
export { useDisabledWhenClippingOff };
export const useDisabledWhenAutoclippingOff = function useDisabledWhenAutoclippingOff() {
  let tmp = useIsClipsSettingsRedesignEnabled();
  let tmp2 = useDisabledWhenClippingOff();
  const items = [_isNativeReflectConstruct];
  if (!tmp2) {
    if (tmp) {
      tmp = !obj.useStateFromStores(items, () => outer1_2.getEnableAutoclipping());
    }
    tmp2 = tmp;
  }
  return tmp2;
};
