// Module ID: 4185
// Function ID: 35973
// Name: useIsClipsSettingsRedesignEnabled
// Dependencies: []
// Exports: isClipsSettingsRedesignEnabled, useDisabledWhenAutoclippingOff

// Module 4185 (useIsClipsSettingsRedesignEnabled)
function useIsClipsSettingsRedesignEnabled() {
  return apexExperiment.useConfig({ location: "useIsClipsSettingsRedesignEnabled" }).enableRedesign;
}
function useDisabledWhenClippingOff() {
  let tmp = useIsClipsSettingsRedesignEnabled();
  if (tmp) {
    tmp = !obj.useIsClipsEnabled();
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[1]);
obj = { "Null": null, "Null": null, defaultConfig: { enableRedesign: false }, variations: { [1]: { enableRedesign: true } } };
const apexExperiment = obj.createApexExperiment(obj);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/clips/ClipsSettingsRedesignExperiment.tsx");

export const ClipsSettingsRedesignExperiment = apexExperiment;
export { useIsClipsSettingsRedesignEnabled };
export const isClipsSettingsRedesignEnabled = function isClipsSettingsRedesignEnabled() {
  return apexExperiment.getConfig({ location: "isClipsSettingsRedesignEnabled" }).enableRedesign;
};
export { useDisabledWhenClippingOff };
export const useDisabledWhenAutoclippingOff = function useDisabledWhenAutoclippingOff() {
  let tmp = useIsClipsSettingsRedesignEnabled();
  let tmp2 = useDisabledWhenClippingOff();
  const items = [closure_2];
  if (!tmp2) {
    if (tmp) {
      tmp = !obj.useStateFromStores(items, () => enableAutoclipping.getEnableAutoclipping());
    }
    tmp2 = tmp;
  }
  return tmp2;
};
