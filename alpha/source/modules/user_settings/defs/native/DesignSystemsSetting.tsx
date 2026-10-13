// Module ID: 16436
// Function ID: 16437
// Name: DesignSystemsSetting
// Dependencies: [1085, 10663, 15870, 16437, 16233, 2]

// Module 16436 (DesignSystemsSetting)
import Constants from "Constants" /* 1085 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15870 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16437 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
