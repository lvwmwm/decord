// Module ID: 15952
// Function ID: 15953
// Name: useIsActivityPanelFullscreen
// Dependencies: [1371, 9674, 589, 3903, 10320, 2]
// Exports: useIsActivityPanelFullscreen

// Module 15952 (useIsActivityPanelFullscreen)
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
