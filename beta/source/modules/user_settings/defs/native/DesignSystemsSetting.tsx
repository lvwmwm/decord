// Module ID: 16054
// Function ID: 16055
// Name: DesignSystemsSetting
// Dependencies: [1078, 11594, 15521, 16055, 15883, 2]

// Module 16054 (DesignSystemsSetting)
import Constants from "Constants" /* 1078 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15521 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16055 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
