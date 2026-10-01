// Module ID: 16832
// Function ID: 16833
// Name: ActivityPanelUtils
// Dependencies: [2044, 8502, 504, 4458, 8803, 2]
// Exports: useIsActivityPanelFullscreen

// Module 16832 (ActivityPanelUtils)
import get_initialized from "get initialized" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4458 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
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
};
