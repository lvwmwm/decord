// Module ID: 11824
// Function ID: 11825
// Name: EmbeddedAppShimExperiment
// Dependencies: [1447, 2]
// Exports: getEmbeddedAppShimVersion, useEmbeddedAppShimVersion

// Module 11824 (EmbeddedAppShimExperiment)
import ApexExperiment from "ApexExperiment" /* 1447 */;
import size from "module_2" /* 2 */;

let obj2;
let obj = { name: "2026-10-embedded-app-shim-v2", kind: "user", defaultConfig: { enabled: false }, variations: obj2 };
obj2 = { 1: null };
obj2[1] = { enabled: true };
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/activities/experiments/EmbeddedAppShimExperiment.tsx");

export const EMBEDDED_APP_SHIM_EXPERIMENT = "2026-10-embedded-app-shim-v2";
export function useEmbeddedAppShimVersion(BaseEmbeddedAppWebView) {
  let num = 1;
  const obj = { location: BaseEmbeddedAppWebView };
  if (closure_0.useConfig(obj).enabled) {
    num = 2;
  }
  return num;
}
export function getEmbeddedAppShimVersion(ChannelLongPressActionSheet) {
  let num = 1;
  const obj = { location: ChannelLongPressActionSheet };
  if (closure_0.getConfig(obj).enabled) {
    num = 2;
  }
  return num;
}
