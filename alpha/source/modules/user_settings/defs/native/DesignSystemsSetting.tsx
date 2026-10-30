// Module ID: 17704
// Function ID: 17705
// Name: DesignSystemsSetting
// Dependencies: [1072, 11505, 17183, 17705, 17542, 2]

// Module 17704 (DesignSystemsSetting)
import Constants from "Constants" /* 1072 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 17183 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 17705 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
