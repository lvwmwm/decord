// Module ID: 17008
// Function ID: 17009
// Name: useIsActivityPanelFullscreen
// Dependencies: [1956, 9505, 504, 4189, 9526, 2]
// Exports: useIsActivityPanelFullscreen

// Module 17008 (useIsActivityPanelFullscreen)
import initialize from "initialize" /* 504 */;
import closure_3 from "participantFromServer" /* 1956 */;
import { ActivityPanelModes } from "ActivityPanelModes" /* 9505 */;

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
