// Module ID: 14026
// Function ID: 106653
// Name: useAppearanceSettingTrailing
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useAppearanceSettingTrailing

// Module 14026 (useAppearanceSettingTrailing)
import closure_3 from "__exportStarResult1";
import { ActiveThemeType } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

function useAppearanceSettingTrailing() {
  const tmp = importDefault(dependencyMap[3])();
  const tmp2 = importDefault(dependencyMap[4])("AppearanceSettingTrailing");
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => gradientPreset.gradientPreset);
  const obj = arg1(dependencyMap[5]);
  let themeName = arg1(dependencyMap[6]).getThemeName(tmp, tmp2);
  const obj3 = arg1(dependencyMap[6]);
  const activeThemeType = arg1(dependencyMap[7]).useActiveThemeType();
  if (ActiveThemeType.CUSTOM === activeThemeType) {
    const intl2 = arg1(dependencyMap[8]).intl;
    return intl2.string(importDefault(dependencyMap[9]).KSBBpC);
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
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.wFpwSk);
  } else {
    return ActiveThemeType.DEFAULT === activeThemeType ? themeName : undefined;
  }
  const obj4 = arg1(dependencyMap[7]);
}
__exportStarResult1 = {
  useTitle() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.iHH+ky);
  },
  parent: null,
  IconComponent: require("__exportStarResult1").PaintPaletteIcon,
  useTrailing: useAppearanceSettingTrailing,
  screen: __exportStarResult1
};
__exportStarResult1 = {
  route: require("__exportStarResult1").UserSettingsSections.APPEARANCE,
  getComponent() {
    return arg1(dependencyMap[12]).default;
  }
};
__exportStarResult1 = __exportStarResult1.createRoute(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/user_settings/defs/native/AppearanceSetting.tsx");

export default __exportStarResult1;
export { useAppearanceSettingTrailing };
