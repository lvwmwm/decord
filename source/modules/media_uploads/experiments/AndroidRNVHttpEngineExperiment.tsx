// Module ID: 8291
// Function ID: 65458
// Name: apexExperiment
// Dependencies: []
// Exports: getMuxExperimentDimension, useRnvHttpEngine

// Module 8291 (apexExperiment)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[2]);
obj = { 844175713: null, 1387159956: null, defaultConfig: { httpEngine: "default" }, variations: { [0]: { httpEngine: "default" }, [1]: { httpEngine: "okhttp" }, [2]: { httpEngine: "cronet" } } };
const apexExperiment = obj.createApexExperiment(obj);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/media_uploads/experiments/AndroidRNVHttpEngineExperiment.tsx");

export const AndroidRNVHttpEngineExperiment = apexExperiment;
export const useRnvHttpEngine = function useRnvHttpEngine() {
  const config = apexExperiment.useConfig({ location: "android_rnv_http_engine" });
  let httpEngine = null;
  if (obj.isAndroid()) {
    httpEngine = config.httpEngine;
  }
  return httpEngine;
};
export const getMuxExperimentDimension = function getMuxExperimentDimension() {
  const assignment = assignment.getAssignment("user", id.getId(), "2026-05-android-rnv-http-engine");
  let trackedVariantId;
  if (null != assignment) {
    trackedVariantId = assignment.trackedVariantId;
  }
  if (null == trackedVariantId) {
    let variantId;
    if (null != assignment) {
      variantId = assignment.variantId;
    }
    trackedVariantId = variantId;
  }
  let combined = null;
  if (null != trackedVariantId) {
    const _HermesInternal = HermesInternal;
    combined = "" + "2026-05-android-rnv-http-engine" + ":" + trackedVariantId;
  }
  return combined;
};
