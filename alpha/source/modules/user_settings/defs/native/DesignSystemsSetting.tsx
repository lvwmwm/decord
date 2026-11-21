// Module ID: 17200
// Function ID: 17201
// Name: DesignSystemsSetting
// Dependencies: [1071, 11937, 16667, 17201, 17035, 2]

// Module 17200 (DesignSystemsSetting)
import Constants from "Constants" /* 1071 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16667 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17201 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
