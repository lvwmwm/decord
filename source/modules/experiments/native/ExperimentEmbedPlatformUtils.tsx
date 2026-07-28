// Module ID: 10968
// Function ID: 85046
// Name: regExp
// Dependencies: [4133, 10969, 1935, 10465, 10466, 7855, 4087, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 10968 (regExp)
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
      let obj = _require(10465);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(10466).getApexExperiments();
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
        const experimentBuckets = _require(7855).getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp7) {
            if (tmp7.variantId === iter.value) {
              _require(4087).overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const obj5 = _require(4087);
            }
          }
          _require(4087).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const obj4 = _require(4087);
        }
        const obj3 = _require(7855);
      }
      const obj2 = _require(10466);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(4133).openLazy(_require(1935)(10969, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
