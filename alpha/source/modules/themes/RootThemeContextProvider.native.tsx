// Module ID: 16744
// Function ID: 16745
// Name: RootThemeContextProvider
// Dependencies: [19, 5141, 1192, 1083, 21, 504, 5310, 16745, 5199, 12221, 5755, 2]
// Exports: RootThemeContextProvider

// Module 16744 (RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 5199 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5310 */;
import PlainTextExperiment from "PlainTextExperiment" /* 16745 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const enabledExperiments = ["mobile-visual-refresh-floating", "mobile-visual-refresh"];
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export function RootThemeContextProvider(children) {
  let contrast;
  let saturation;
  children = children.children;
  const items = [AccessibilityStore, ThemeStore];
  const obj = get_initialized;
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const theme = stateFromStoresObject.theme;
  const tmp4 = useColorThemeBackgroundDefault();
  let num = 0;
  const obj2 = PlainTextExperiment;
  const plainTextExperiment = obj2.usePlainTextExperiment("RootThemeContextProvider");
  if (null != tmp4) {
    let setThemeFlagResult;
    if (tmp4.theme === ThemeTypes.LIGHT) {
      const tmpResult = native;
      setThemeFlagResult = tmpResult.setThemeFlag(0, tmp(5199).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    } else {
      const tmpResult4 = native;
      setThemeFlagResult = tmpResult4.setThemeFlag(0, tmp(5199).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    num = setThemeFlagResult;
  }
  let setThemeFlagResult1 = num;
  if (1 !== saturation) {
    const tmpResult5 = native;
    setThemeFlagResult1 = tmpResult5.setThemeFlag(num, tmp(5199).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
  }
  let setThemeFlagResult2 = setThemeFlagResult1;
  if (1 !== contrast) {
    let REDUCED_CONTRAST_ENABLED;
    const setThemeFlag = native.setThemeFlag;
    native;
    if (contrast > 1) {
      REDUCED_CONTRAST_ENABLED = tmp(5199).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
    } else {
      REDUCED_CONTRAST_ENABLED = tmp(5199).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
    }
    setThemeFlagResult2 = setThemeFlag(setThemeFlagResult1, REDUCED_CONTRAST_ENABLED);
  }
  const RootThemeContextProvider = tmp(12221).RootThemeContextProvider;
  return <RootThemeContextProvider theme={theme} flags={setThemeFlagResult2} saturation={saturation} contrast={contrast} enabledExperiments={enabledExperiments}>{null}</RootThemeContextProvider>;
}
