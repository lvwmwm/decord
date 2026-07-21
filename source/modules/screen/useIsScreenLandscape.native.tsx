// Module ID: 4659
// Function ID: 40361
// Name: getIsScreenLandscape
// Dependencies: []
// Exports: getIsScreenLandscape, useIsScreenLandscape

// Module 4659 (getIsScreenLandscape)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/screen/useIsScreenLandscape.native.tsx");

export const getIsScreenLandscape = function getIsScreenLandscape() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].screenIsLandscape;
};
export const useIsScreenLandscape = function useIsScreenLandscape() {
  const appEntryKey = arg1(dependencyMap[2]).useAppEntryKey();
  const arg1 = appEntryKey;
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[closure_0].screenIsLandscape, items));
};
