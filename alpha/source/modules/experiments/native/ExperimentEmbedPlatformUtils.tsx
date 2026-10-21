// Module ID: 12639
// Function ID: 12640
// Name: ExperimentEmbedPlatformUtils
// Dependencies: [5192, 12640, 2002, 11165, 11166, 8461, 5177, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 12639 (ExperimentEmbedPlatformUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ExperimentManager from "ExperimentManager" /* 5177 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8461 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11165 */;
import useApexExperiments from "useApexExperiments" /* 11166 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  let experiments;
  let overridesInfo;
  let closure_0 = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      const obj = useLegacyExperiments;
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const obj2 = useApexExperiments;
      const apexExperiments = obj2.getApexExperiments();
      let tmp5 = experiments[experimentFromEmbedURL];
      const overridesInfo2 = apexExperiments.overridesInfo;
      if (tmp5 == null) {
        tmp5 = apexExperiments.experiments[experimentFromEmbedURL];
      }
      if (null != tmp5) {
        let tmp6 = overridesInfo[experimentFromEmbedURL];
        if (tmp6 == null) {
          tmp6 = overridesInfo2[experimentFromEmbedURL];
        }
        if (tmp6 == null) {
          tmp6 = null;
        }
        const tmpResult = ExperimentEmbedUtils;
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              const tmpResult3 = ExperimentManager;
              tmpResult3.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          const tmpResult4 = ExperimentManager;
          tmpResult4.overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
        }
      }
    }
  }
  const obj3 = { id: experimentFromEmbedURL };
  const obj6 = ActionSheetActionCreatorsDefault;
  obj6.openLazy(asyncRequire(12640, dependencyMap.paths), "ExperimentOverrideSheet", obj3);
};
