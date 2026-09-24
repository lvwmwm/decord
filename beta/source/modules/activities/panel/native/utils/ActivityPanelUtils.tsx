// Module ID: 17452
// Function ID: 17453
// Name: ActivityPanelUtils
// Dependencies: [2044, 9345, 558, 568, 4421, 9642, 504, 2]

// Module 17452 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4421 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9642 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

require = fn;
const ActivityPanelModes = fn(9345).ActivityPanelModes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function c() {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
      let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
      if (tmp3) {
        tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
      }
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
});
