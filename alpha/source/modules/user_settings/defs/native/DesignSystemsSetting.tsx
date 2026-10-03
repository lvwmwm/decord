// Module ID: 15629
// Function ID: 15630
// Name: DesignSystemsSetting
// Dependencies: [1085, 11129, 15076, 15630, 15440, 2]

// Module 15629 (DesignSystemsSetting)
import Constants from "Constants" /* 1085 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15076 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15630 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
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
