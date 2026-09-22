// Module ID: 15345
// Function ID: 15346
// Name: AppearanceSetting
// Dependencies: [4456, 1184, 1074, 4571, 504, 1227, 7977, 1114, 2626, 11605, 15346, 15348, 2]
// Exports: useAppearanceSettingTrailing

// Module 15345 (AppearanceSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1227 */;
import useThemeDefault from "useTheme" /* 4571 */;
import useActiveTheme from "useActiveTheme" /* 7977 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4456 */;

const _modDef2626 = tmp(2626);
require = fn;
function useAppearanceSettingTrailing() {
  const tmp3 = useThemeDefault();
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const themeName = ClientThemesUtils.getThemeName(tmp3);
  const activeThemeType = useActiveTheme.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp4(1114).intl;
    return intl2.string(_modDef2626.KSBBpC);
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
    const intl = tmp4(1114).intl;
    return intl.string(tmp4(1114).t.wFpwSk);
  } else {
    return tmp8.DEFAULT === activeThemeType ? themeName : undefined;
  }
}
const ActiveThemeType = fn(1184).ActiveThemeType;
const SettingBuilders = fn(11605);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: fn(15346).PaintPaletteIcon,
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
