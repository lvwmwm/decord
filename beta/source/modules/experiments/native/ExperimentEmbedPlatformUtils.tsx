// Module ID: 11971
// Function ID: 11972
// Name: ExperimentEmbedPlatformUtils
// Dependencies: [4757, 11972, 1984, 11640, 11641, 8171, 4711, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 11971 (ExperimentEmbedPlatformUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11640 */;
import useApexExperiments from "useApexExperiments" /* 11641 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  closure_0 = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      const legacyExperiments = useLegacyExperiments.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = useApexExperiments.getApexExperiments();
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
        const experimentBuckets = tmp(8171).getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmp(4711).overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const tmpResult3 = tmp(4711);
            }
          }
          tmp(4711).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult4 = tmp(4711);
        }
        const tmpResult = tmp(8171);
      }
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11972, dependencyMap.paths), "ExperimentOverrideSheet", { id: experimentFromEmbedURL });
};
