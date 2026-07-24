// Module ID: 14200
// Function ID: 109204
// Name: useAppearanceSettingTrailing
// Dependencies: [3942, 1281, 653, 4066, 1324, 566, 3973, 8870, 1212, 2396, 10127, 7503, 14201, 2]
// Exports: useAppearanceSettingTrailing

// Module 14200 (useAppearanceSettingTrailing)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault(4066)();
  const tmp2 = importDefault(1324)("AppearanceSettingTrailing");
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.gradientPreset);
  const obj = require(566) /* initialize */;
  let themeName = require(3973) /* getThemeForColor */.getThemeName(tmp, tmp2);
  const obj3 = require(3973) /* getThemeForColor */;
  const activeThemeType = require(8870) /* useActiveThemeType */.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2396).KSBBpC);
  } else if (ActiveThemeType.CLIENT === activeThemeType) {
    let name;
    if (null != stateFromStores) {
      if (null != stateFromStores.getName) {
        name = stateFromStores.getName();
      }
    }
    if (null != name) {
      themeName = name;
    }
    return themeName;
  } else if (ActiveThemeType.SYSTEM === activeThemeType) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
  const obj4 = require(8870) /* useActiveThemeType */;
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["iHH+ky"]);
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.APPEARANCE,
  getComponent() {
    return require(14201).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
