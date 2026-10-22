// Module ID: 17042
// Function ID: 17043
// Name: DesignSystemsSetting
// Dependencies: [1087, 11181, 16535, 17043, 16896, 2]

// Module 17042 (DesignSystemsSetting)
import Constants from "Constants" /* 1087 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16535 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17043 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
