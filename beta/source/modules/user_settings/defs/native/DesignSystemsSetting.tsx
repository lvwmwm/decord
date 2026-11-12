// Module ID: 18123
// Function ID: 18124
// Name: DesignSystemsSetting
// Dependencies: [1072, 11717, 17608, 18124, 17973, 2]

// Module 18123 (DesignSystemsSetting)
import Constants from "Constants" /* 1072 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17608 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 18124 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
