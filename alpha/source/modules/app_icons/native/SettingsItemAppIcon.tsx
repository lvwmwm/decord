// Module ID: 17771
// Function ID: 17772
// Name: SettingsItemAppIcon
// Dependencies: [19, 10159, 21, 5141, 575, 15573, 10160, 10863, 17259, 2]
// Exports: default

// Module 17771 (SettingsItemAppIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AppIconConstants from "AppIconConstants" /* 10159 */;
import AppIconTypes from "AppIconTypes" /* 10160 */;
import AppIconUtils from "AppIconUtils" /* 15573 */;
import AppIconDefault from "AppIcon" /* 17259 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp4;
const ClydeIcon = tmp4(10863);
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.round };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const tmp3 = closure_5();
  const obj = AppIconUtils;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp7 = getIconById(currentAppIcon);
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    let tmp11;
    if (null != tmp7) {
      tmp11 = jsx(AppIconDefault, { style: tmp3.icon, id: currentAppIcon, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};
