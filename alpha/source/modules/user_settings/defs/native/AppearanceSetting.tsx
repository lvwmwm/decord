// Module ID: 15012
// Function ID: 15013
// Name: AppearanceSetting
// Dependencies: [4683, 1185, 1074, 4797, 504, 1228, 7495, 1115, 2717, 11211, 15013, 15015, 2]
// Exports: useAppearanceSettingTrailing

// Module 15012 (AppearanceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1228 */;
import useThemeDefault from "useTheme" /* 4797 */;
import useActiveTheme from "useActiveTheme" /* 7495 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4683 */;

const _modDef2717 = tmp(2717);
require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1115).intl;
    return intl2.string(_modDef2717.KSBBpC);
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
    const intl = tmp4(1115).intl;
    return intl.string(tmp4(1115).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = fn(1185).ActiveThemeType;
const SettingBuilders = fn(11211);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(15013).PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: {
    route: fn(1074).UserSettingsSections.APPEARANCE,
    getComponent() {
      return require("SettingsAppearanceScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default route;
export { useAppearanceSettingTrailing };
