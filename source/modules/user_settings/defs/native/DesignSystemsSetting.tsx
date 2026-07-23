// Module ID: 14415
// Function ID: 110167
// Name: route
// Dependencies: [653, 10095, 13547, 14416, 13549, 2]

// Module 14415 (route)
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
    return require(13549) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("PaintPaletteIcon").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
