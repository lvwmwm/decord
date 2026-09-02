// Module ID: 16824
// Function ID: 16825
// Name: useIsActivityPanelFullscreen
// Dependencies: [1385, 9479, 586, 4110, 9501, 2]
// Exports: useIsActivityPanelFullscreen

// Module 16824 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 586 */;
import closure_3 from "participantFromServer" /* 1385 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9479 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = callback(table[3]).getEmbeddedActivityLocationChannelId(store.getConnectedActivityLocation());
    let tmp3 = store.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !callback2(table[4])(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};
