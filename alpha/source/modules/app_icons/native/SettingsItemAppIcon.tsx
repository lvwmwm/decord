// Module ID: 16818
// Function ID: 16819
// Name: SettingsItemAppIcon
// Dependencies: [19, 10348, 21, 4794, 575, 13927, 4820, 9484, 16289, 2]
// Exports: default

// Module 16818 (SettingsItemAppIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AppIconTypes from "AppIconTypes" /* 4820 */;
import AppIconConstants from "AppIconConstants" /* 10348 */;
import AppIconUtils from "AppIconUtils" /* 13927 */;
import AppIconDefault from "AppIcon" /* 16289 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp4;
const ClydeIcon = tmp4(9484);
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
