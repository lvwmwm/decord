// Module ID: 16936
// Function ID: 16937
// Name: QuestCustomAppStoreOverlayUtils
// Dependencies: [9715, 9719, 14663, 2]
// Exports: canOpenCustomAppStoreOverlayFromCta, prefetchCustomAppStoreOverlayContent

// Module 16936 (QuestCustomAppStoreOverlayUtils)
import apexExperiment from "apexExperiment" /* 9715 */;
import AppStoreOverlayContent from "AppStoreOverlayContent" /* 14663 */;
import size from "module_2" /* 2 */;

let tmp;
const QuestPlatformUtils = tmp(9719);
function fetchCustomAppStoreOverlayContent(cta) {
  let resolved;
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  let inlineStoreParamsFromCta = null;
  if (enabled) {
    const tmpResult4 = QuestPlatformUtils;
    inlineStoreParamsFromCta = tmpResult4.getInlineStoreParamsFromCta(cta);
  }
  if (null == inlineStoreParamsFromCta) {
    resolved = Promise.resolve(null);
  } else {
    const getAppStoreOverlayContent = AppStoreOverlayContent.getAppStoreOverlayContent;
    AppStoreOverlayContent;
    const tmpResult6 = QuestPlatformUtils;
    let url = tmpResult6.getDirectAppStoreLinkFromCta(cta);
    if (url == null) {
      url = cta.url;
    }
    resolved = getAppStoreOverlayContent(inlineStoreParamsFromCta, url);
  }
  return resolved;
}
const result = size.fileFinishedImporting("modules/quests/utils/QuestCustomAppStoreOverlayUtils.native.tsx");

export function canOpenCustomAppStoreOverlayFromCta(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  return enabled;
}
export { fetchCustomAppStoreOverlayContent };
export function prefetchCustomAppStoreOverlayContent(cta) {
  const CustomAppStoreOverlayExperiment = apexExperiment.CustomAppStoreOverlayExperiment;
  let enabled = CustomAppStoreOverlayExperiment.getConfig({ location: "quest_open_game_link" }).enabled;
  if (enabled) {
    const tmpResult = QuestPlatformUtils;
    enabled = null != tmpResult.getInlineStoreParamsFromCta(cta);
  }
  if (enabled) {
    const promise = fetchCustomAppStoreOverlayContent(cta);
    promise.catch(() => {

    });
  }
}
