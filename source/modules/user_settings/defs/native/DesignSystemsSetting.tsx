// Module ID: 15349
// Function ID: 15350
// Name: route
// Dependencies: [676, 11068, 13039, 15350, 15213, 2]

// Module 15349 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13039 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15350 */;
import createToggle from "createToggle" /* 11068 */;

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
    return require(15213) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
