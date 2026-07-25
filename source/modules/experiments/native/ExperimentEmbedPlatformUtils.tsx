// Module ID: 10929
// Function ID: 84918
// Name: regExp
// Dependencies: [4099, 10930, 1935, 10424, 10425, 7819, 4053, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 10929 (regExp)
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
      let obj = _require(10424);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(10425).getApexExperiments();
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
        const experimentBuckets = _require(7819).getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp7) {
            if (tmp7.variantId === iter.value) {
              _require(4053).overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const obj5 = _require(4053);
            }
          }
          _require(4053).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const obj4 = _require(4053);
        }
        const obj3 = _require(7819);
      }
      const obj2 = _require(10425);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(4099).openLazy(_require(1935)(10930, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
