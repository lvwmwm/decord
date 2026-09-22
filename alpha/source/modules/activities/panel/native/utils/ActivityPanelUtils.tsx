// Module ID: 17483
// Function ID: 17484
// Name: ActivityPanelUtils
// Dependencies: [2041, 9321, 504, 4385, 9620, 2]
// Exports: useIsActivityPanelFullscreen

// Module 17483 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4385 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9620 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2041 */;

require = fn;
const ActivityPanelModes = fn(9321).ActivityPanelModes;
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
