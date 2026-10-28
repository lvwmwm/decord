// Module ID: 17394
// Function ID: 17395
// Name: DesignSystemsSetting
// Dependencies: [1084, 11248, 16890, 17395, 17249, 2]

// Module 17394 (DesignSystemsSetting)
import Constants from "Constants" /* 1084 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16890 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17395 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
