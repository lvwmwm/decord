// Module ID: 15856
// Function ID: 15857
// Name: useIsActivityPanelFullscreen
// Dependencies: [1371, 5692, 589, 3811, 10479, 2]
// Exports: useIsActivityPanelFullscreen

// Module 15856 (useIsActivityPanelFullscreen)
import participantFromServer from "participantFromServer";
import { ActivityPanelModes } from "ActivityPanelModes";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [participantFromServer];
  return require(589) /* initialize */.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = callback(table[3]).getEmbeddedActivityLocationChannelId(store.getConnectedActivityLocation());
    let tmp3 = store.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !callback2(table[4])(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
};
