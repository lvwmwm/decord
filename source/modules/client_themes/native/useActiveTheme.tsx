// Module ID: 8823
// Function ID: 69547
// Name: useActiveThemeType
// Dependencies: []
// Exports: useIsClientThemeOrCustomThemeActive, useIsCustomThemeActive

// Module 8823 (useActiveThemeType)
function useActiveThemeType() {
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => closure_5.hasCustomTheme());
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items1, () => null != gradientPreset.gradientPreset);
  const tmp3 = importDefault(dependencyMap[5])();
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_3];
  let type;
  const stateFromStores2 = arg1(dependencyMap[4]).useStateFromStores(items2, () => useSystemTheme.useSystemTheme);
  if (null != tmp3) {
    type = tmp3.type;
  }
  if ("custom" === type) {
    let DEFAULT = constants2.CUSTOM;
  } else {
    let type1;
    if (null != tmp3) {
      type1 = tmp3.type;
    }
    if ("preset" === type1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores) {
      DEFAULT = constants2.CUSTOM;
    } else if (stateFromStores1) {
      DEFAULT = constants2.CLIENT;
    } else if (stateFromStores2 === constants.ON) {
      DEFAULT = constants2.SYSTEM;
    } else {
      DEFAULT = constants2.DEFAULT;
    }
  }
  return DEFAULT;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ SystemThemeState: closure_6, ActiveThemeType: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/client_themes/native/useActiveTheme.tsx");

export const useIsCustomThemeActive = function useIsCustomThemeActive() {
  return useActiveThemeType() === constants2.CUSTOM;
};
export const useIsClientThemeOrCustomThemeActive = function useIsClientThemeOrCustomThemeActive() {
  const tmp = useActiveThemeType();
  let tmp2 = tmp === constants2.CLIENT;
  if (!tmp2) {
    tmp2 = tmp === constants2.CUSTOM;
  }
  return tmp2;
};
export { useActiveThemeType };
