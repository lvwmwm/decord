// Module ID: 17633
// Function ID: 17634
// Name: DesignSystemsSetting
// Dependencies: [1084, 11302, 17129, 17634, 17488, 2]

// Module 17633 (DesignSystemsSetting)
import Constants from "Constants" /* 1084 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17129 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17634 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
