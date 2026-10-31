// Module ID: 16416
// Function ID: 16417
// Name: RootThemeContextProvider
// Dependencies: [19, 5015, 1192, 1083, 21, 504, 5194, 7149, 16417, 5080, 12056, 5628, 2]
// Exports: RootThemeContextProvider

// Module 16416 (RootThemeContextProvider)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1083 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5194 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export function RootThemeContextProvider(children) {
  let contrast;
  let saturation;
  let manaTypeConsolidationExperiment;
  let tmp = manaTypeConsolidationExperiment;
  children = children.children;
  let items = [AccessibilityStore, ThemeStore];
  const obj = manaTypeConsolidationExperiment(504);
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: AccessibilityStore.saturation, contrast: AccessibilityStore.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const theme = stateFromStoresObject.theme;
  const tmp4 = useColorThemeBackgroundDefault();
  const obj2 = manaTypeConsolidationExperiment(7149);
  manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const items1 = [manaTypeConsolidationExperiment];
  const obj3 = manaTypeConsolidationExperiment(16417);
  const plainTextExperiment = obj3.usePlainTextExperiment("RootThemeContextProvider");
  let num = 0;
  const memo = react.useMemo(() => {
    const items = ["mobile-visual-refresh-floating", "mobile-visual-refresh"];
    const tmp = manaTypeConsolidationExperiment;
    if (tmp) {
      items.push("mana-type-consolidation");
    }
    return items;
  }, items1);
  if (null != tmp4) {
    let setThemeFlagResult;
    if (tmp4.theme === ThemeTypes.LIGHT) {
      const tmpResult = tmp(5080);
      setThemeFlagResult = tmpResult.setThemeFlag(0, tmp(5080).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    } else {
      const tmpResult4 = tmp(5080);
      setThemeFlagResult = tmpResult4.setThemeFlag(0, tmp(5080).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    }
    num = setThemeFlagResult;
  }
  let setThemeFlagResult1 = num;
  if (1 !== saturation) {
    const tmpResult5 = tmp(5080);
    setThemeFlagResult1 = tmpResult5.setThemeFlag(num, tmp(5080).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
  }
  let setThemeFlagResult2 = setThemeFlagResult1;
  if (1 !== contrast) {
    let REDUCED_CONTRAST_ENABLED;
    const setThemeFlag = tmp(5080).setThemeFlag;
    tmp(5080);
    if (contrast > 1) {
      REDUCED_CONTRAST_ENABLED = tmp(5080).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
    } else {
      REDUCED_CONTRAST_ENABLED = tmp(5080).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
    }
    setThemeFlagResult2 = setThemeFlag(setThemeFlagResult1, REDUCED_CONTRAST_ENABLED);
  }
  const RootThemeContextProvider = tmp(12056).RootThemeContextProvider;
  return <RootThemeContextProvider theme={theme} flags={setThemeFlagResult2} saturation={saturation} contrast={contrast} enabledExperiments={memo}>{null}</RootThemeContextProvider>;
}
