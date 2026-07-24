// Module ID: 10978
// Function ID: 85326
// Name: regExp
// Dependencies: [4098, 10979, 1934, 10490, 10491, 7872, 4052, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 10978 (regExp)
const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = require("maybeLoadBundle").fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  let experiments;
  let overridesInfo;
  const _require = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = _require(10490);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(10491).getApexExperiments();
      let tmp5 = experiments[experimentFromEmbedURL];
      if (null == tmp5) {
        tmp5 = apexExperiments.experiments[experimentFromEmbedURL];
      }
      if (null != tmp5) {
        let tmp6 = overridesInfo[experimentFromEmbedURL];
        if (null == tmp6) {
          tmp6 = apexExperiments.overridesInfo[experimentFromEmbedURL];
        }
        let tmp7 = null;
        if (null != tmp6) {
          tmp7 = tmp6;
        }
        const experimentBuckets = _require(7872).getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp7) {
            if (tmp7.variantId === iter.value) {
              _require(4052).overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const obj5 = _require(4052);
            }
          }
          _require(4052).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const obj4 = _require(4052);
        }
        const obj3 = _require(7872);
      }
      const obj2 = _require(10491);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(4098).openLazy(_require(1934)(10979, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
