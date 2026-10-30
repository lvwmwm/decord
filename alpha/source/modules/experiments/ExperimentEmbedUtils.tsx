// Module ID: 8577
// Function ID: 8578
// Name: ExperimentEmbedUtils
// Dependencies: [5238, 8578, 8579, 2]
// Exports: getExperimentBuckets, getExperimentFromEmbedURL, getExperimentServerAssignmentLabel, getExperimentTreatmentFromEmbedURL, getURLForExperiment, isExperimentEmbedURL

// Module 8577 (ExperimentEmbedUtils)
import ExperimentManager from "ExperimentManager" /* 5238 */;
import ExperimentUtilsDefault from "ExperimentUtils" /* 8578 */;
import ExperimentDevToolsUtils from "ExperimentDevToolsUtils" /* 8579 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/ExperimentEmbedUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export function isExperimentEmbedURL(target) {
  return regExp.test(target);
}
export function getExperimentFromEmbedURL(code) {
  const match = code.match(regExp);
  let tmp = null;
  if (null != match) {
    tmp = null;
    if (match.length >= 2) {
      tmp = match[1];
    }
  }
  return tmp;
}
export function getExperimentTreatmentFromEmbedURL(code) {
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
}
export function getURLForExperiment(id, arg1) {
  let combined;
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    combined = "dev://experiment/" + id + "/" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "dev://experiment/" + id;
  }
  return combined;
}
export function getExperimentServerAssignmentLabel(system, experimentServerAssignment) {
  if (null != experimentServerAssignment) {
    if (null != system) {
      const system2 = system.system;
      const tmp4 = require;
      if (ExperimentManager.ExperimentSystem.LEGACY === system2) {
        const obj = ExperimentUtilsDefault;
        return obj.getExperimentBucketName(experimentServerAssignment.bucket);
      } else if (tmp4(5238).ExperimentSystem.APEX === system2) {
        const _HermesInternal = HermesInternal;
        return "Variant " + experimentServerAssignment.variantId;
      } else {
        system = system.system;
        return null;
      }
    }
  }
  return null;
}
export function getExperimentBuckets(experiment) {
  const obj = ExperimentDevToolsUtils;
  const experimentVariantsForDevTools = obj.getExperimentVariantsForDevTools(experiment);
  return experimentVariantsForDevTools.map((id) => ({ id: id.id, label: id.label, value: id.id }));
}
