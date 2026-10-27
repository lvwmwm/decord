// Module ID: 16925
// Function ID: 16926
// Name: SettingsItemAppIcon
// Dependencies: [19, 9867, 21, 4972, 587, 558, 576, 14803, 9868, 10574, 16423, 2]

// Module 16925 (SettingsItemAppIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AppIconConstants from "AppIconConstants" /* 9867 */;
import AppIconTypes from "AppIconTypes" /* 9868 */;
import ClydeIcon from "ClydeIcon" /* 10574 */;
import AppIconUtils from "AppIconUtils" /* 14803 */;
import AppIconDefault from "AppIcon" /* 16423 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const getIconById = AppIconConstants.getIconById;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { borderRadius: nativeDefault.radii.round };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsItemAppIcon(color) {
  let tmp13;
  const obj = react2;
  const cResult = obj.c(5);
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const tmp5 = closure_5();
  const tmpResult = AppIconUtils;
  const currentAppIcon = tmpResult.useCurrentAppIcon();
  const tmp7 = getIconById(currentAppIcon);
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    let tmp9;
    if (null != tmp7) {
      if (cResult[2] === currentAppIcon) {
        if (cResult[3] === tmp5.icon) {
          tmp9 = cResult[4];
        }
      }
      const tmp12 = jsx(AppIconDefault, { style: tmp5.icon, id: currentAppIcon, size: 32 });
      cResult[2] = currentAppIcon;
      cResult[3] = tmp5.icon;
      cResult[4] = tmp12;
      tmp9 = tmp12;
    }
    return tmp9;
  }
  if (cResult[0] !== INTERACTIVE_ICON_DEFAULT) {
    const tmp15 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
    cResult[0] = INTERACTIVE_ICON_DEFAULT;
    cResult[1] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[1];
  }
  tmp9 = tmp13;
}) : (function SettingsItemAppIcon(color) {
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
});
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default tmp3;
