// Module ID: 15811
// Function ID: 15812
// Name: SettingsItemAppIcon
// Dependencies: [19, 9443, 21, 4757, 576, 13728, 9444, 11086, 15812, 2]
// Exports: default

// Module 15811 (SettingsItemAppIcon)
import nativeDefault from "native" /* 576 */;
import AppIconTypes from "AppIconTypes" /* 9444 */;
import AppIconUtils from "AppIconUtils" /* 13728 */;
import AppIconDefault from "AppIcon" /* 15812 */;
import noop from "module_19" /* 19 */;

const ClydeIcon = tmp4(11086);
require = fn;
const getIconById = fn(9443).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { icon: { borderRadius: nativeDefault.radii.round } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const tmp3 = closure_5();
  const currentAppIcon = AppIconUtils.useCurrentAppIcon();
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      const obj2 = { style: tmp3.icon, id: currentAppIcon, size: 32 };
      let tmp11 = jsx(AppIconDefault, { style: tmp3.icon, id: currentAppIcon, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};
