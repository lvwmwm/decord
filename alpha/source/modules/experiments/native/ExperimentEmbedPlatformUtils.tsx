// Module ID: 12960
// Function ID: 12961
// Name: ExperimentEmbedPlatformUtils
// Dependencies: [5546, 12961, 2121, 12622, 12623, 8660, 5531, 2]
// Exports: handleCodedLinkExperimentEmbedTap

// Module 12960 (ExperimentEmbedPlatformUtils)
import asyncRequire from "asyncRequire" /* 2121 */;
import ExperimentManager from "ExperimentManager" /* 5531 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8660 */;
import useLegacyExperiments from "useLegacyExperiments" /* 12622 */;
import useApexExperiments from "useApexExperiments" /* 12623 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
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
  obj6.openLazy(asyncRequire(12961, dependencyMap.paths), "ExperimentOverrideSheet", obj3);
}
