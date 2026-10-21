// Module ID: 16951
// Function ID: 16952
// Name: DesignSystemsSetting
// Dependencies: [1087, 11155, 16444, 16952, 16805, 2]

// Module 16951 (DesignSystemsSetting)
import Constants from "Constants" /* 1087 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 16444 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 16952 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
