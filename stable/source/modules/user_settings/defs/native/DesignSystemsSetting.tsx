// Module ID: 15842
// Function ID: 15843
// Name: DesignSystemsSetting
// Dependencies: [1074, 11605, 15346, 15843, 15703, 2]

// Module 15842 (DesignSystemsSetting)
import Constants from "Constants" /* 1074 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15346 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15843 */;
import SettingBuilders from "SettingBuilders" /* 11605 */;
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
