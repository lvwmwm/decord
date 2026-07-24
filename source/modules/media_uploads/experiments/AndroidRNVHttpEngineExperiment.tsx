// Module ID: 8342
// Function ID: 65735
// Name: apexExperiment
// Dependencies: [1188, 1194, 1428, 477, 2]
// Exports: getMuxExperimentDimension, useRnvHttpEngine

// Module 8342 (apexExperiment)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import ApexExperiment from "ApexExperiment";

const require = arg1;
ApexExperiment = { name: "2026-05-android-rnv-http-engine", kind: "user", defaultConfig: { httpEngine: "default" }, variations: { [0]: { httpEngine: "default" }, [1]: { httpEngine: "okhttp" }, [2]: { httpEngine: "cronet" } } };
ApexExperiment = ApexExperiment.createApexExperiment(ApexExperiment);
const result = require("ApexExperiment").fileFinishedImporting("modules/media_uploads/experiments/AndroidRNVHttpEngineExperiment.tsx");

export const AndroidRNVHttpEngineExperiment = ApexExperiment;
export const useRnvHttpEngine = function useRnvHttpEngine() {
  const config = ApexExperiment.useConfig({ location: "android_rnv_http_engine" });
  let httpEngine = null;
  if (obj.isAndroid()) {
    httpEngine = config.httpEngine;
  }
  return httpEngine;
};
export const getMuxExperimentDimension = function getMuxExperimentDimension() {
  assignment = assignment.getAssignment("user", id.getId(), "2026-05-android-rnv-http-engine");
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
