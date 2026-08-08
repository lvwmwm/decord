// Module ID: 16074
// Function ID: 16075
// Name: useIsActivityPanelFullscreen
// Dependencies: [1371, 9758, 589, 3919, 10405, 2]
// Exports: useIsActivityPanelFullscreen

// Module 16074 (useIsActivityPanelFullscreen)
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
