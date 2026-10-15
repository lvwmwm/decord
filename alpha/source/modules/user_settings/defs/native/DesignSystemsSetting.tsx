// Module ID: 16712
// Function ID: 16713
// Name: DesignSystemsSetting
// Dependencies: [1085, 10991, 16203, 16713, 16566, 2]

// Module 16712 (DesignSystemsSetting)
import Constants from "Constants" /* 1085 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16203 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16713 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
