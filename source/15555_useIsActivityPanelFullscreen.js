// Module ID: 15555
// Function ID: 118727
// Name: useIsActivityPanelFullscreen
// Dependencies: []
// Exports: useIsActivityPanelFullscreen

// Module 15555 (useIsActivityPanelFullscreen)
let closure_3 = importDefault(dependencyMap[0]);
const ActivityPanelModes = arg1(dependencyMap[1]).ActivityPanelModes;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const useIsActivityPanelFullscreen = function useIsActivityPanelFullscreen() {
  const items = [closure_3];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = callback(closure_2[3]).getEmbeddedActivityLocationChannelId(store.getConnectedActivityLocation());
    let tmp2 = store.getActivityPanelMode() === constants.PANEL;
    if (tmp2) {
      tmp2 = !callback2(closure_2[4])(embeddedActivityLocationChannelId);
    }
    return tmp2;
  });
};
