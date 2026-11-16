// Module ID: 18404
// Function ID: 18405
// Name: DesignSystemsSetting
// Dependencies: [1072, 12406, 17883, 18405, 18248, 2]

// Module 18404 (DesignSystemsSetting)
import Constants from "Constants" /* 1072 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17883 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 18405 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
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
