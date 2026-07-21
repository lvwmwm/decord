// Module ID: 10605
// Function ID: 82729
// Name: useIsStreamFocused
// Dependencies: []
// Exports: useIsStreamFocused

// Module 10605 (useIsStreamFocused)
let closure_2 = importDefault(dependencyMap[0]);
const isStreamParticipant = arg1(dependencyMap[1]).isStreamParticipant;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/video_calls/useIsStreamFocused.tsx");

export const useIsStreamFocused = function useIsStreamFocused(id) {
  const arg1 = id;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let selectedParticipant = null;
    if (null != arg0) {
      selectedParticipant = selectedParticipant.getSelectedParticipant(arg0);
    }
    return selectedParticipant;
  });
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    tmp2 = isStreamParticipant(stateFromStores);
  }
  return tmp2;
};
