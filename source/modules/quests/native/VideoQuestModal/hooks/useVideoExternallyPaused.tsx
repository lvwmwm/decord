// Module ID: 13939
// Function ID: 105926
// Name: useVideoExternallyPaused
// Dependencies: []
// Exports: useVideoExternallyPaused

// Module 13939 (useVideoExternallyPaused)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/VideoQuestModal/hooks/useVideoExternallyPaused.tsx");

export const useVideoExternallyPaused = function useVideoExternallyPaused(id, arg1) {
  const activeContextMenu = arg1(dependencyMap[1]).useActiveContextMenu();
  const obj = arg1(dependencyMap[1]);
  const openModalKey = arg1(dependencyMap[2]).useOpenModalKey();
  const obj2 = arg1(dependencyMap[2]);
  const obj3 = arg1(dependencyMap[3]);
  const tmp3 = openModalKey !== arg1(dependencyMap[3]).getVideoQuestModalKey(id);
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => key.getKey());
  const obj4 = arg1(dependencyMap[4]);
  const obj5 = arg1(dependencyMap[5]);
  const tmp5 = arg1(dependencyMap[5]).useAlertStore((alerts) => alerts.alerts).length > 0;
  let tmp6 = arg1(dependencyMap[6]).isIOS() && arg1;
  if (!tmp6) {
    tmp6 = null != stateFromStores;
  }
  if (!tmp6) {
    tmp6 = null != activeContextMenu;
  }
  if (!tmp6) {
    tmp6 = tmp3;
  }
  if (!tmp6) {
    tmp6 = tmp5;
  }
  return tmp6;
};
