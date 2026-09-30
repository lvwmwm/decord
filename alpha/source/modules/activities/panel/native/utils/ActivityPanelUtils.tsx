// Module ID: 17054
// Function ID: 17055
// Name: ActivityPanelUtils
// Dependencies: [2044, 8701, 504, 4488, 9002, 2]
// Exports: useIsActivityPanelFullscreen

// Module 17054 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4488 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9002 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;

require = fn;
const ActivityPanelModes = fn(8701).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};
