// Module ID: 17476
// Function ID: 17477
// Name: ActivityPanelUtils
// Dependencies: [2040, 9347, 504, 4417, 9646, 2]
// Exports: useIsActivityPanelFullscreen

// Module 17476 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4417 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9646 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2040 */;

require = fn;
const ActivityPanelModes = fn(9347).ActivityPanelModes;
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
