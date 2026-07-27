// Module ID: 14212
// Function ID: 109336
// Name: useAppearanceSettingTrailing
// Dependencies: [3943, 1281, 653, 4067, 1324, 566, 3974, 8758, 1212, 2397, 10059, 6587, 14213, 2]
// Exports: useAppearanceSettingTrailing

// Module 14212 (useAppearanceSettingTrailing)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ActiveThemeType } from "SystemThemeState";
import createToggle from "createToggle";

const require = arg1;
function useAppearanceSettingTrailing() {
  const tmp = importDefault(4067)();
  const tmp2 = importDefault(1324)("AppearanceSettingTrailing");
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.gradientPreset);
  const obj = require(566) /* initialize */;
  let themeName = require(3974) /* getThemeForColor */.getThemeName(tmp, tmp2);
  const obj3 = require(3974) /* getThemeForColor */;
  const activeThemeType = require(8758) /* useActiveThemeType */.useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(importDefault(2397).KSBBpC);
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
  const obj4 = require(8758) /* useActiveThemeType */;
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
    return require(14213).default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default createToggle;
export { useAppearanceSettingTrailing };
