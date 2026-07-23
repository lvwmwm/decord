// Module ID: 15690
// Function ID: 121006
// Name: useIsActivityPanelFullscreen
// Dependencies: [1347, 10226, 566, 3748, 10438, 2]
// Exports: useIsActivityPanelFullscreen

// Module 15690 (useIsActivityPanelFullscreen)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { ActivityPanelModes } from "ActivityPanelModes";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [_createForOfIteratorHelperLoose];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = outer1_0(outer1_2[3]).getEmbeddedActivityLocationChannelId(outer1_3.getConnectedActivityLocation());
    let tmp2 = outer1_3.getActivityPanelMode() === outer1_4.PANEL;
    if (tmp2) {
      tmp2 = !outer1_1(outer1_2[4])(embeddedActivityLocationChannelId);
    }
    return tmp2;
  });
};
