// Module ID: 16745
// Function ID: 16746
// Name: DesignSystemsSetting
// Dependencies: [1087, 11006, 16236, 16746, 16599, 2]

// Module 16745 (DesignSystemsSetting)
import Constants from "Constants" /* 1087 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16236 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16746 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
