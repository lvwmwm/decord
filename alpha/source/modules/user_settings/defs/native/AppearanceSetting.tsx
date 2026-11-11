// Module ID: 17765
// Function ID: 17766
// Name: AppearanceSetting
// Dependencies: [5267, 1195, 1072, 5484, 504, 1239, 8996, 1113, 2917, 12317, 17766, 17768, 2]
// Exports: useAppearanceSettingTrailing

// Module 17765 (AppearanceSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import ThemeConstants from "ThemeConstants" /* 1195 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import useThemeDefault from "useTheme" /* 5484 */;
import useActiveTheme from "useActiveTheme" /* 8996 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17766 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5267 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const _modDef2917 = tmp(2917);
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
    const intl2 = tmp4(1113).intl;
    return intl2.string(_modDef2917.KSBBpC);
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
    const intl = tmp4(1113).intl;
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
