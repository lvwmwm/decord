// Module ID: 17086
// Function ID: 17087
// Name: DesignSystemsSetting
// Dependencies: [1087, 11204, 16582, 17087, 16940, 2]

// Module 17086 (DesignSystemsSetting)
import Constants from "Constants" /* 1087 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16582 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17087 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
