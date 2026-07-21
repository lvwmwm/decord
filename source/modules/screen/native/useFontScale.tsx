// Module ID: 4545
// Function ID: 39847
// Name: getFontScale
// Dependencies: []
// Exports: getFontScale, useFontScale

// Module 4545 (getFontScale)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/screen/native/useFontScale.tsx");

export const getFontScale = function getFontScale() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "main";
  }
  return state.getState().byAppEntry[str].fontScale;
};
export const useFontScale = function useFontScale() {
  const appEntryKey = arg1(dependencyMap[2]).useAppEntryKey();
  const arg1 = appEntryKey;
  const items = [appEntryKey];
  return state(React.useCallback((arg0) => arg0.byAppEntry[closure_0].fontScale, items));
};
