// Module ID: 11529
// Function ID: 11530
// Name: TabsExperiment
// Dependencies: [1451, 1359, 2]
// Exports: getTabsExperimentEnabled, useTabsExperimentEnabled

// Module 11529 (TabsExperiment)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1359 */;
import ApexExperiment from "ApexExperiment" /* 1451 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-07-desktop-channel-tabs", kind: "user", defaultConfig: { enabled: false, newTabExperience: "popout" }, variations: obj2 };
obj2 = { 1: null, 2: { enabled: true, newTabExperience: "popout" }, 3: { enabled: true, newTabExperience: "friends" } };
obj2[3] = { enabled: true, newTabExperience: "quickswitcher" };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/tabs/TabsExperiment.tsx");

export default apexExperiment;
export function useTabsExperimentEnabled(location) {
  let obj3;
  const useConfig = apexExperiment.useConfig;
  const obj = { location };
  const obj2 = { autoTrackExposure: obj3.isDesktop() };
  obj3 = utils_PlatformUtils;
  let enabled = useConfig(obj, obj2).enabled;
  if (enabled) {
    const tmpResult = utils_PlatformUtils;
    enabled = tmpResult.isDesktop();
  }
  return enabled;
}
export function getTabsExperimentEnabled(navigateActiveTabHistory) {
  const obj = utils_PlatformUtils;
  let enabled = obj.isDesktop();
  if (enabled) {
    const obj2 = { location: navigateActiveTabHistory };
    enabled = apexExperiment.getConfig(obj2).enabled;
  }
  return enabled;
}
