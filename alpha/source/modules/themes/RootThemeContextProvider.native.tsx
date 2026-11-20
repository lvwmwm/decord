// Module ID: 15691
// Function ID: 15692
// Name: RootThemeContextProvider
// Dependencies: [19, 4795, 1191, 1082, 21, 504, 4966, 15692, 4855, 10976, 5389, 2]
// Exports: RootThemeContextProvider

// Module 15691 (RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1082 */;
import native from "native" /* 4855 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4966 */;
import PlainTextExperiment from "PlainTextExperiment" /* 15692 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4795 */;
import ThemeStore from "ThemeStore" /* 1191 */;
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
      setThemeFlagResult = tmpResult.setThemeFlag(0, tmp(4855).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    } else {
      const tmpResult4 = native;
      setThemeFlagResult = tmpResult4.setThemeFlag(0, tmp(4855).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    num = setThemeFlagResult;
  }
  let setThemeFlagResult1 = num;
  if (1 !== saturation) {
    const tmpResult5 = native;
    setThemeFlagResult1 = tmpResult5.setThemeFlag(num, tmp(4855).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
  }
  let setThemeFlagResult2 = setThemeFlagResult1;
  if (1 !== contrast) {
    let REDUCED_CONTRAST_ENABLED;
    const setThemeFlag = native.setThemeFlag;
    native;
    if (contrast > 1) {
      REDUCED_CONTRAST_ENABLED = tmp(4855).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
    } else {
      REDUCED_CONTRAST_ENABLED = tmp(4855).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
    }
    setThemeFlagResult2 = setThemeFlag(setThemeFlagResult1, REDUCED_CONTRAST_ENABLED);
  }
  const RootThemeContextProvider = tmp(10976).RootThemeContextProvider;
  return <RootThemeContextProvider theme={theme} flags={setThemeFlagResult2} saturation={saturation} contrast={contrast} enabledExperiments={enabledExperiments}>{null}</RootThemeContextProvider>;
}
