// Module ID: 14848
// Function ID: 14849
// Name: route
// Dependencies: [676, 10407, 7766, 14849, 13955, 2]

// Module 14848 (route)
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
    return require(13955) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("PaintPaletteIcon").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
