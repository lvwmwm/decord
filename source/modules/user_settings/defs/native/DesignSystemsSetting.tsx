// Module ID: 15673
// Function ID: 15674
// Name: route
// Dependencies: [673, 11400, 13306, 15674, 15538, 2]

// Module 15673 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import PaintPaletteIcon from "PaintPaletteIcon" /* 13306 */;
import useDesignSystemsSettingPredicate from "useDesignSystemsSettingPredicate" /* 15674 */;
import createToggle from "createToggle" /* 11400 */;

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
    return require(15538) /* SettingsDesignSystemsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsSetting.tsx");

export default route;
