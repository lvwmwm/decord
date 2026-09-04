// Module ID: 14494
// Function ID: 14495
// Name: RootThemeContextProvider
// Dependencies: [19, 4473, 1301, 502, 21, 586, 4331, 8026, 14495, 4205, 10004, 4486, 2]
// Exports: RootThemeContextProvider

// Module 14494 (RootThemeContextProvider)
import getGuildThemeNameDefault from "getGuildThemeName" /* 4331 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4473 */;
import closure_5 from "handleThemeChange" /* 1301 */;
import { ThemeTypes } from "sum" /* 502 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/themes/RootThemeContextProvider.native.tsx");

export const RootThemeContextProvider = function RootThemeContextProvider(children) {
  let manaTypeConsolidationExperiment;
  let obj = manaTypeConsolidationExperiment(586);
  let items = [closure_4, closure_5];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ saturation: closure_4.saturation, contrast: closure_4.contrast, theme: theme.theme }));
  ({ saturation, contrast } = stateFromStoresObject);
  const tmp4 = getGuildThemeNameDefault();
  manaTypeConsolidationExperiment = manaTypeConsolidationExperiment(8026).useManaTypeConsolidationExperiment("RootThemeContextProvider");
  const obj2 = manaTypeConsolidationExperiment(8026);
  [][0] = manaTypeConsolidationExperiment;
  const plainTextExperiment = manaTypeConsolidationExperiment(14495).usePlainTextExperiment("RootThemeContextProvider");
  if (null == tmp4) {
    let num2 = 0;
    if (1 !== saturation) {
      let tmpResult = tmp(4205);
      num2 = tmpResult.setThemeFlag(0, tmp(4205).ThemeContextFlags.REDUCE_SATURATION_ENABLED);
    }
    if (1 === contrast) {
      obj = { theme: null, flags: null, saturation: null, contrast: null, enabledExperiments: null, children: null };
      obj[0] = stateFromStoresObject.theme;
      obj[1] = num2;
      obj[2] = saturation;
      obj[3] = contrast;
      obj[4] = tmp7;
      obj = { enabled: null, children: null };
      obj[0] = plainTextExperiment;
      obj[1] = children.children;
      obj[5] = jsx(tmp(4486).PlainTextExperimentProvider, { enabled: null, children: null });
      return jsx(tmp(10004).RootThemeContextProvider, { enabled: null, children: null });
    } else {
      tmpResult = tmp(4205);
      if (contrast > 1) {
        let REDUCED_CONTRAST_ENABLED = tmp(4205).ThemeContextFlags.INCREASED_CONTRAST_ENABLED;
      } else {
        REDUCED_CONTRAST_ENABLED = tmp(4205).ThemeContextFlags.REDUCED_CONTRAST_ENABLED;
      }
      tmpResult.setThemeFlag(num2, REDUCED_CONTRAST_ENABLED);
    }
  } else if (tmp4.theme === ThemeTypes.LIGHT) {
    let setThemeFlagResult1 = tmp(4205).setThemeFlag(0, tmp(4205).ThemeContextFlags.MOBILE_LIGHT_GRADIENT_THEME_ENABLED);
    const tmpResult1 = tmp(4205);
  } else {
    setThemeFlagResult1 = tmp(4205).setThemeFlag(0, tmp(4205).ThemeContextFlags.MOBILE_DARK_GRADIENT_THEME_ENABLED);
    const tmpResult2 = tmp(4205);
  }
};
