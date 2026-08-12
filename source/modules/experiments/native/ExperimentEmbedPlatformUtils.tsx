// Module ID: 11264
// Function ID: 11265
// Name: regExp
// Dependencies: [4312, 11265, 2007, 10503, 10504, 8246, 4266, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 11264 (regExp)
const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = require("asyncRequireImpl").fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  let experiments;
  let overridesInfo;
  const _require = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = _require(10503);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(10504).getApexExperiments();
      let tmp5 = experiments[experimentFromEmbedURL];
      if (tmp5 == null) {
        tmp5 = apexExperiments.experiments[experimentFromEmbedURL];
      }
      if (null != tmp5) {
        let tmp6 = overridesInfo[experimentFromEmbedURL];
        if (tmp6 == null) {
          tmp6 = apexExperiments.overridesInfo[experimentFromEmbedURL];
        }
        if (tmp6 == null) {
          tmp6 = null;
        }
        let tmpResult = tmp(8246);
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = tmp(4266);
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          tmp(4266).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = tmp(4266);
        }
      }
      const obj2 = _require(10504);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(4312).openLazy(_require(2007)(11265, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
