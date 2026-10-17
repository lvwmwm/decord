// Module ID: 16823
// Function ID: 16824
// Name: DesignSystemsSetting
// Dependencies: [1087, 11065, 16316, 16824, 16677, 2]

// Module 16823 (DesignSystemsSetting)
import Constants from "Constants" /* 1087 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16316 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16824 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
