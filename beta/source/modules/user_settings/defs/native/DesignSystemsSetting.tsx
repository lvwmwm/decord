// Module ID: 16065
// Function ID: 16066
// Name: DesignSystemsSetting
// Dependencies: [1074, 11725, 15532, 16066, 15894, 2]

// Module 16065 (DesignSystemsSetting)
import Constants from "Constants" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15532 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16066 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: {
    route: Constants.UserSettingsSections.DESIGN_SYSTEM,
    getComponent() {
      return require("UserSettingsDesignSystemsScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
