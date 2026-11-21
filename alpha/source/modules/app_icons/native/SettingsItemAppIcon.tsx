// Module ID: 16941
// Function ID: 16942
// Name: SettingsItemAppIcon
// Dependencies: [19, 10468, 21, 4913, 575, 14049, 4939, 9604, 16412, 2]
// Exports: default

// Module 16941 (SettingsItemAppIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AppIconTypes from "AppIconTypes" /* 4939 */;
import AppIconConstants from "AppIconConstants" /* 10468 */;
import AppIconUtils from "AppIconUtils" /* 14049 */;
import AppIconDefault from "AppIcon" /* 16412 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp4;
const ClydeIcon = tmp4(9604);
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
