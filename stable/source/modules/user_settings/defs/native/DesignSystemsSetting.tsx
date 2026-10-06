// Module ID: 15342
// Function ID: 15343
// Name: DesignSystemsSetting
// Dependencies: [1086, 10874, 14795, 15343, 15158, 2]

// Module 15342 (DesignSystemsSetting)
import Constants from "Constants" /* 1086 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 14795 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15343 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: {
    route: UserSettingsSections.DESIGN_SYSTEM,
    getComponent() {
      return require("UserSettingsDesignSystemsScreen").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
