// Module ID: 15530
// Function ID: 15531
// Name: AppearanceSetting
// Dependencies: [4610, 1189, 1078, 558, 568, 4725, 504, 1232, 8155, 1119, 2716, 11630, 15531, 15533, 2]

// Module 15530 (AppearanceSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1232 */;
import useThemeDefault from "useTheme" /* 4725 */;
import useActiveTheme from "useActiveTheme" /* 8155 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4610 */;

const _modDef2716 = tmp4(2716);
require = fn;
const ActiveThemeType = fn(1189).ActiveThemeType;
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
  const tmp5 = useThemeDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ClientThemesBackgroundStore];
    const fn = function c() {
      return gradientPreset.gradientPreset;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== tmp5) {
    const themeName = tmp(1232).getThemeName(tmp5);
    cResult[2] = tmp5;
    cResult[3] = themeName;
    let tmp10 = themeName;
    const tmpResult3 = tmp(1232);
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult = initialize;
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1119).intl;
      const stringResult = intl2.string(_modDef2716.KSBBpC);
      cResult[4] = stringResult;
      let tmp19 = stringResult;
    } else {
      tmp19 = cResult[4];
    }
    return tmp19;
  } else if (tmp13.CLIENT === activeThemeType) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === tmp10) {
        let tmp16 = cResult[7];
      }
      return tmp16;
    }
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = tmp10;
    }
    cResult[5] = stateFromStores;
    cResult[6] = tmp10;
    cResult[7] = name;
    tmp16 = name;
  } else if (tmp13.SYSTEM === activeThemeType) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult1 = intl.string(tmp(1119).t.wFpwSk);
      cResult[8] = stringResult1;
      let tmp14 = stringResult1;
    } else {
      tmp14 = cResult[8];
    }
    return tmp14;
  } else {
    return tmp13.DEFAULT === activeThemeType ? tmp10 : undefined;
  }
}) : (() => {
  const tmp3 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1119).intl;
    return intl2.string(_modDef2716.KSBBpC);
  } else if (tmp8.CLIENT === activeThemeType) {
    let name;
    if (stateFromStores != null) {
      const getName = stateFromStores.getName;
      if (getName != null) {
        name = getName();
      }
    }
    if (name == null) {
      name = themeName;
    }
    return name;
  } else if (tmp8.SYSTEM === activeThemeType) {
    const intl = tmp4(1119).intl;
    return intl.string(tmp4(1119).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
  }
});
const SettingBuilders = fn(11630);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(15531).PaintPaletteIcon,
  useTrailing: tmp2,
  screen: {
    route: fn(1078).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export const useAppearanceSettingTrailing = tmp2;
