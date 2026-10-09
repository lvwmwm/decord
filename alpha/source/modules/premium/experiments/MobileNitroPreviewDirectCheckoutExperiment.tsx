// Module ID: 14861
// Function ID: 14862
// Name: MobileNitroPreviewDirectCheckoutExperiment
// Dependencies: [1453, 558, 576, 2]

// Module 14861 (MobileNitroPreviewDirectCheckoutExperiment)
import react from "react" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-mobile-nitro-preview-direct-checkout", kind: "user", defaultConfig: false, variations: { 0: false, 1: true } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMobileNitroPreviewDirectCheckoutEnabled() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "native.GetNitroCard" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return apexExperiment.useConfig(first);
}) : (function useMobileNitroPreviewDirectCheckoutEnabled() {
  return apexExperiment.useConfig({ location: "native.GetNitroCard" });
});
const result = size.fileFinishedImporting("modules/premium/experiments/MobileNitroPreviewDirectCheckoutExperiment.tsx");

export const MobileNitroPreviewDirectCheckoutExperiment = apexExperiment;
export const useMobileNitroPreviewDirectCheckoutEnabled = tmp3;
