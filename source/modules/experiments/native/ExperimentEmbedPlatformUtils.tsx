// Module ID: 10988
// Function ID: 10989
// Name: regExp
// Dependencies: [4157, 10989, 1959, 10485, 10486, 7875, 4111, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 10988 (regExp)
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
      let obj = _require(10485);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(10486).getApexExperiments();
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
        let tmpResult = tmp(7875);
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = tmp(4111);
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          tmp(4111).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = tmp(4111);
        }
      }
      const obj2 = _require(10486);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(4157).openLazy(_require(1959)(10989, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
