// Module ID: 14505
// Function ID: 14506
// Name: useAppearanceSettingTrailing
// Dependencies: [4124, 1305, 676, 4239, 1367, 589, 1347, 8399, 1236, 2501, 10452, 7723, 14506, 2]
// Exports: useAppearanceSettingTrailing

// Module 14505 (useAppearanceSettingTrailing)
import isSyncedModeThemesEnabled from "isSyncedModeThemesEnabled";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault;
  const tmp3 = importDefault(4239)();
  const tmp4 = importDefault(1367)("AppearanceSettingTrailing");
  const items = [isSyncedModeThemesEnabled];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = require(589) /* initialize */;
  const themeName = require(1347) /* getThemeForColor */.getThemeName(tmp3, tmp4);
  const obj2 = require(1347) /* getThemeForColor */;
  const activeThemeType = require(8399) /* useActiveThemeType */.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = tmp5(1236).intl;
    return intl2.string(tmp(2501).KSBBpC);
  } else if (tmp9.CLIENT === activeThemeType) {
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
  } else if (tmp9.SYSTEM === activeThemeType) {
    const intl = tmp5(1236).intl;
    return intl.string(tmp5(1236).t.wFpwSk);
  } else {
    return tmp9.DEFAULT === activeThemeType ? themeName : undefined;
  }
  const obj3 = require(8399) /* useActiveThemeType */;
}
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE,
  getComponent() {
    return require(14506).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
