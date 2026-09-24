// Module ID: 16064
// Function ID: 16065
// Name: DesignSystemsSetting
// Dependencies: [1078, 11630, 15531, 16065, 15893, 2]

// Module 16064 (DesignSystemsSetting)
import Constants from "Constants" /* 1078 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15531 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16065 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
