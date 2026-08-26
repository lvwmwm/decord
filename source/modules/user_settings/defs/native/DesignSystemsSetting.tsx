// Module ID: 15066
// Function ID: 15067
// Name: route
// Dependencies: [676, 10584, 7933, 15067, 14166, 2]

// Module 15066 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 7933 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15067 */;
import createToggle from "createToggle" /* 10584 */;

obj = {
  useTitle() {
    return "Design System";
  },
  parent: null,
  IconComponent: PaintPaletteIcon.PaintPaletteIcon,
  usePredicate: useDesignSystemsSettingPredicate.useDesignSystemsSettingPredicate,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.DESIGN_SYSTEM,
  getComponent() {
    return require(14166) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
