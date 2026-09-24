// Module ID: 17575
// Function ID: 17576
// Name: ActivityPanelUtils
// Dependencies: [2043, 9396, 504, 4453, 9697, 2]
// Exports: useIsActivityPanelFullscreen

// Module 17575 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4453 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9697 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;

require = fn;
const ActivityPanelModes = fn(9396).ActivityPanelModes;
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
