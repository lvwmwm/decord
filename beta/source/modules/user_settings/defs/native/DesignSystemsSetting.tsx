// Module ID: 17210
// Function ID: 17211
// Name: DesignSystemsSetting
// Dependencies: [1071, 11942, 16675, 17211, 17043, 2]

// Module 17210 (DesignSystemsSetting)
import Constants from "Constants" /* 1071 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16675 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17211 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
