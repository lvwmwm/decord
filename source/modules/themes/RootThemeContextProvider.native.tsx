// Module ID: 13377
// Function ID: 101681
// Name: RootThemeContextProvider
// Dependencies: []
// Exports: RootThemeContextProvider

// Module 13377 (RootThemeContextProvider)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const ThemeTypes = arg1(dependencyMap[3]).ThemeTypes;
const jsx = arg1(dependencyMap[4]).jsx;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let contrast;
  let saturation;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: closure_4.saturation, contrast: closure_4.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp2 = importDefault(dependencyMap[6])();
  const mobileVisualRefreshConfig = arg1(dependencyMap[7]).useMobileVisualRefreshConfig({ location: "RootThemeContextProvider" });
  const enabled = mobileVisualRefreshConfig.enabled;
  const arg1 = enabled;
  const chatInputFloating = mobileVisualRefreshConfig.chatInputFloating;
  const importDefault = chatInputFloating;
  const chatInputLegacySendButton = mobileVisualRefreshConfig.chatInputLegacySendButton;
  const dependencyMap = chatInputLegacySendButton;
  const obj2 = arg1(dependencyMap[7]);
  const manaTypeConsolidationExperiment = arg1(dependencyMap[8]).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  let closure_3 = manaTypeConsolidationExperiment;
  const items1 = [enabled, chatInputFloating, chatInputLegacySendButton, manaTypeConsolidationExperiment];
  if (null == tmp2) {
    let num4 = 0;
    if (1 !== saturation) {
      num4 = arg1(dependencyMap[9]).setThemeFlag(0, arg1(dependencyMap[9]).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
      const obj6 = arg1(dependencyMap[9]);
    }
    if (1 === contrast) {
      obj = { theme: stateFromStoresObject.theme, flags: num4, saturation, contrast, enabledExperiments: tmp5, children: children.children };
      return jsx(arg1(dependencyMap[10]).RootThemeContextProvider, obj);
    } else {
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = arg1(dependencyMap[9]).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = arg1(dependencyMap[9]).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      arg1(dependencyMap[9]).setThemeFlag(num4, REDUCED_CONTRAST_ENABLED);
      const obj7 = arg1(dependencyMap[9]);
    }
  } else if (tmp2.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = arg1(dependencyMap[9]).setThemeFlag(0, arg1(dependencyMap[9]).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const obj5 = arg1(dependencyMap[9]);
  } else {
    setThemeFlagResult1 = arg1(dependencyMap[9]).setThemeFlag(0, arg1(dependencyMap[9]).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const obj4 = arg1(dependencyMap[9]);
  }
};
