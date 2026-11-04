// Module ID: 18012
// Function ID: 18013
// Name: DesignSystemsSetting
// Dependencies: [1072, 11729, 17499, 18013, 17866, 2]

// Module 18012 (DesignSystemsSetting)
import Constants from "Constants" /* 1072 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17499 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 18013 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
