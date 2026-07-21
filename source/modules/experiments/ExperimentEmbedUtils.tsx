// Module ID: 7774
// Function ID: 61725
// Name: regExp
// Dependencies: [29, 27, 4350, 7786]
// Exports: getExperimentBuckets, getExperimentFromEmbedURL, getExperimentServerAssignmentLabel, getExperimentTreatmentFromEmbedURL, getURLForExperiment, isExperimentEmbedURL

// Module 7774 (regExp)
import TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS.fileFinishedImporting("modules/experiments/ExperimentEmbedUtils.tsx");

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
      if (require(dependencyMap[0]).ExperimentSystem.LEGACY === system2) {
        return importDefault(dependencyMap[1]).getExperimentBucketName(experimentServerAssignment.bucket);
      } else if (require(dependencyMap[0]).ExperimentSystem.APEX === system2) {
        const _HermesInternal = HermesInternal;
        return "Variant " + experimentServerAssignment.variantId;
      } else {
        system = system.system;
        return null;
      }
    }
  }
  return null;
};
export const getExperimentBuckets = function getExperimentBuckets(experiment) {
  const experimentVariantsForDevTools = require(dependencyMap[2]).getExperimentVariantsForDevTools(experiment);
  return experimentVariantsForDevTools.map((id) => ({ id: id.id, label: id.label, value: id.id }));
};
