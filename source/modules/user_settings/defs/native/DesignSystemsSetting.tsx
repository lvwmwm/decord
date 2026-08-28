// Module ID: 15282
// Function ID: 15283
// Name: route
// Dependencies: [676, 11006, 12972, 15283, 15147, 2]

// Module 15282 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 12972 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15283 */;
import createToggle from "createToggle" /* 11006 */;

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
    return require(15147) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
