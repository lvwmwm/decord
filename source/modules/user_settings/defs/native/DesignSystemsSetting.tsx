// Module ID: 14683
// Function ID: 14684
// Name: route
// Dependencies: [676, 10364, 7642, 14684, 13801, 2]

// Module 14683 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: require("PaintPaletteIcon").PaintPaletteIcon,
  usePredicate: require("useDesignSystemsSettingPredicate").useDesignSystemsSettingPredicate,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(13801) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("PaintPaletteIcon").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
