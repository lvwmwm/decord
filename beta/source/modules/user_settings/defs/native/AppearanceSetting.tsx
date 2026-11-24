// Module ID: 16664
// Function ID: 16665
// Name: AppearanceSetting
// Dependencies: [4937, 1194, 1071, 5122, 504, 1238, 8572, 1112, 3056, 11937, 16665, 16667, 2]
// Exports: useAppearanceSettingTrailing

// Module 16664 (AppearanceSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1071 */;
import intl3 from "intl" /* 1112 */;
import ThemeConstants from "ThemeConstants" /* 1194 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1238 */;
import useThemeDefault from "useTheme" /* 5122 */;
import useActiveTheme from "useActiveTheme" /* 8572 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16665 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4937 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const _modDef3056 = tmp(3056);
function useAppearanceSettingTrailing() {
  let gradientPreset;
  const items = [ClientThemesBackgroundStore];
  const tmp3 = useThemeDefault();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj2 = ClientThemesUtils;
  const themeName = obj2.getThemeName(tmp3);
  const obj3 = useActiveTheme;
  const activeThemeType = obj3.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1112).intl;
    return intl2.string(_modDef3056.KSBBpC);
  } else if (ActiveThemeType.CLIENT === activeThemeType) {
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
  } else if (ActiveThemeType.SYSTEM === activeThemeType) {
    const intl = tmp4(1112).intl;
    return intl.string(intl3.t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = ThemeConstants.ActiveThemeType;
const UserSettingsSections = Constants.UserSettingsSections;
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: {
    route: UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export { useAppearanceSettingTrailing };
