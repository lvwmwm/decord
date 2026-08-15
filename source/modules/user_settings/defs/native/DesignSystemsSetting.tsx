// Module ID: 14893
// Function ID: 14894
// Name: route
// Dependencies: [676, 10669, 8005, 14894, 13990, 2]

// Module 14893 (route)
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
    return require(13990) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("PaintPaletteIcon").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
