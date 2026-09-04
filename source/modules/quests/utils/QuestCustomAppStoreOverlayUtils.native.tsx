// Module ID: 14943
// Function ID: 14944
// Name: fetchCustomAppStoreOverlayContent
// Dependencies: [11421, 11428, 11430, 2]
// Exports: canOpenCustomAppStoreOverlayFromCta, prefetchCustomAppStoreOverlayContent

// Module 14943 (fetchCustomAppStoreOverlayContent)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 11421 */;
import supportedConsoles from "supportedConsoles" /* 11428 */;

function fetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    let tmpResult = tmp(11428);
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    tmpResult = tmp(11428);
    inlineStoreParamsFromCta = tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    let resolved = Promise.resolve(null);
  } else {
    const tmpResult1 = tmp(11430);
    let url = tmp(11428).getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = tmpResult1.getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
    const tmpResult2 = tmp(11428);
  }
  return resolved;
}
const result = set.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export const canOpenCustomAppStoreOverlayFromCta = function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != supportedConsoles.getInlineStoreParamsFromCta(cta);
    const tmpResult = supportedConsoles;
  }
  return enabled;
};
export { fetchCustomAppStoreOverlayContent };
export const prefetchCustomAppStoreOverlayContent = function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    enabled = null != supportedConsoles.getInlineStoreParamsFromCta(cta);
    const tmpResult = supportedConsoles;
  }
  if (enabled) {
    fetchCustomAppStoreOverlayContent(cta).catch(() => {

    });
    const promise = fetchCustomAppStoreOverlayContent(cta);
  }
};
