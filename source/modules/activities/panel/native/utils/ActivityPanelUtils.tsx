// Module ID: 16324
// Function ID: 16325
// Name: useIsActivityPanelFullscreen
// Dependencies: [1390, 8740, 589, 4014, 8761, 2]
// Exports: useIsActivityPanelFullscreen

// Module 16324 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 589 */;
import closure_3 from "participantFromServer" /* 1390 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 8740 */;

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
