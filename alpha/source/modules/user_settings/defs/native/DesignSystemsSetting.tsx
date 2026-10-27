// Module ID: 17164
// Function ID: 17165
// Name: DesignSystemsSetting
// Dependencies: [1084, 11212, 16661, 17165, 17019, 2]

// Module 17164 (DesignSystemsSetting)
import Constants from "Constants" /* 1084 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16661 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17165 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
