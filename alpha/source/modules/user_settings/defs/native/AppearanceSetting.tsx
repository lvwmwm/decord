// Module ID: 17182
// Function ID: 17183
// Name: AppearanceSetting
// Dependencies: [5033, 1196, 1072, 5248, 504, 1240, 9802, 1114, 2771, 11505, 17183, 17185, 2]
// Exports: useAppearanceSettingTrailing

// Module 17182 (AppearanceSetting)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1240 */;
import useThemeDefault from "useTheme" /* 5248 */;
import useActiveTheme from "useActiveTheme" /* 9802 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17183 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let tmp;
const _modDef2771 = tmp(2771);
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
    const intl2 = tmp4(1114).intl;
    return intl2.string(_modDef2771.KSBBpC);
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
    const intl = tmp4(1114).intl;
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
