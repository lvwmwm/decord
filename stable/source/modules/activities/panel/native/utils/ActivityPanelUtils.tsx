// Module ID: 16801
// Function ID: 16802
// Name: ActivityPanelUtils
// Dependencies: [2050, 8499, 558, 576, 4461, 8798, 504, 2]

// Module 16801 (ActivityPanelUtils)
import react from "react" /* 576 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4461 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8499 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const get_initialized = tmp(504);
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp = require;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function c() {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
      let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
      const tmp = dependencyMap;
      if (tmp3) {
        tmp3 = !require("isVoiceEmbeddedActivity")(embeddedActivityLocationChannelId);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let obj = get_initialized;
  const items = [EmbeddedActivitiesStore];
  return obj.useStateFromStores(items, () => {
    const obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    const tmp = dependencyMap;
    if (tmp3) {
      tmp3 = !require("isVoiceEmbeddedActivity")(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
});
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = tmp2;
