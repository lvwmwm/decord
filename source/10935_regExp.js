// Module ID: 10935
// Function ID: 85043
// Name: regExp
// Dependencies: []
// Exports: handleCodedLinkExperimentEmbedTap

// Module 10935 (regExp)
const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  let experiments;
  let overridesInfo;
  const require = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = require(dependencyMap[3]);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = require(dependencyMap[4]).getApexExperiments();
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
        const experimentBuckets = require(dependencyMap[5]).getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === arg1);
        if (null != iter) {
          if (null != tmp7) {
            if (tmp7.variantId === iter.value) {
              require(dependencyMap[6]).overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const obj5 = require(dependencyMap[6]);
            }
          }
          require(dependencyMap[6]).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const obj4 = require(dependencyMap[6]);
        }
        const obj3 = require(dependencyMap[5]);
      }
      const obj2 = require(dependencyMap[4]);
    }
  }
  obj = { id: experimentFromEmbedURL };
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "ExperimentOverrideSheet", obj);
};
