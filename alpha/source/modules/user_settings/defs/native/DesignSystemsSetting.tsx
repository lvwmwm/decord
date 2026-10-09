// Module ID: 16044
// Function ID: 16045
// Name: DesignSystemsSetting
// Dependencies: [1085, 10629, 15470, 16045, 15835, 2]

// Module 16044 (DesignSystemsSetting)
import Constants from "Constants" /* 1085 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 15470 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16045 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
