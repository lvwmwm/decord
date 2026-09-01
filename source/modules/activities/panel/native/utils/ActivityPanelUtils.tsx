// Module ID: 16589
// Function ID: 16590
// Name: useIsActivityPanelFullscreen
// Dependencies: [1386, 9466, 589, 4111, 9488, 2]
// Exports: useIsActivityPanelFullscreen

// Module 16589 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 589 */;
import closure_3 from "participantFromServer" /* 1386 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9466 */;

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
