// Module ID: 15828
// Function ID: 15829
// Name: useIsActivityPanelFullscreen
// Dependencies: [1371, 5688, 589, 3807, 10462, 2]
// Exports: useIsActivityPanelFullscreen

// Module 15828 (useIsActivityPanelFullscreen)
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
