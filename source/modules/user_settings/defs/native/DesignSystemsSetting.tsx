// Module ID: 14699
// Function ID: 14700
// Name: route
// Dependencies: [676, 10380, 7661, 14700, 13815, 2]

// Module 14699 (route)
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
    return require(13815) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("PaintPaletteIcon").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
