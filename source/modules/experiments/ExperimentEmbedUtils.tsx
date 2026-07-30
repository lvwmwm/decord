// Module ID: 7875
// Function ID: 7876
// Name: regExp
// Dependencies: [4111, 7876, 7877, 2]
// Exports: getExperimentBuckets, getExperimentFromEmbedURL, getExperimentServerAssignmentLabel, getExperimentTreatmentFromEmbedURL, getURLForExperiment, isExperimentEmbedURL

// Module 7875 (regExp)
const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = require("getExperimentVariantsForDevTools").fileFinishedImporting("modules/experiments/ExperimentEmbedUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const isExperimentEmbedURL = function isExperimentEmbedURL(target) {
  return regExp.test(target);
};
export const getExperimentFromEmbedURL = function getExperimentFromEmbedURL(code) {
  const match = code.match(regExp);
  let tmp = null;
  if (null != match) {
    tmp = null;
    if (match.length >= 2) {
      tmp = match[1];
    }
  }
  return tmp;
};
export const getExperimentTreatmentFromEmbedURL = function getExperimentTreatmentFromEmbedURL(code) {
  const match = code.match(regExp);
  let parsed = null;
  if (null != match) {
    parsed = null;
    if (match.length >= 3) {
      const _parseInt = parseInt;
      parsed = parseInt(match[2], 10);
    }
  }
  return parsed;
};
export const getURLForExperiment = function getURLForExperiment(id) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "dev://experiment/" + id + "/" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "dev://experiment/" + id;
  }
  return combined;
};
export const getExperimentServerAssignmentLabel = function getExperimentServerAssignmentLabel(system, experimentServerAssignment) {
  if (null != experimentServerAssignment) {
    if (null != system) {
      const system2 = system.system;
      if (require(4111) /* trackExposureToExperiment */.ExperimentSystem.LEGACY === system2) {
        return importDefault(7876).getExperimentBucketName(experimentServerAssignment.bucket);
      } else if (tmp4(4111).ExperimentSystem.APEX === system2) {
        const _HermesInternal = HermesInternal;
        return "Variant " + experimentServerAssignment.variantId;
      } else {
        system = system.system;
        return null;
      }
      tmp4 = require;
    }
  }
  return null;
};
export const getExperimentBuckets = function getExperimentBuckets(experiment) {
  const experimentVariantsForDevTools = require(7877) /* getExperimentVariantsForDevTools */.getExperimentVariantsForDevTools(experiment);
  return experimentVariantsForDevTools.map((id) => ({ id: id.id, label: id.label, value: id.id }));
};
