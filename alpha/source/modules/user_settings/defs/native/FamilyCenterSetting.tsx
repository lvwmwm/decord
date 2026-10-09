// Module ID: 15061
// Function ID: 15062
// Name: FamilyCenterSetting
// Dependencies: [19, 1085, 21, 558, 576, 15062, 15063, 5004, 587, 1126, 2565, 10629, 8200, 15066, 2]

// Module 15061 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef2565 from "module_2565" /* 2565 */;
import GroupIcon from "GroupIcon" /* 8200 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 15062 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 15063 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFamilyCenterTrailing() {
  const obj = react2;
  const cResult = obj.c(1);
  const obj2 = useIsParentalConsentBannerActive;
  const isParentalConsentBannerActive = obj2.useIsParentalConsentBannerActive();
  const obj3 = useParentalConsentWarning;
  const parentalConsentWarning = obj3.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  let tmp7 = null;
  if (isParentalConsentBannerActive) {
    tmp7 = null;
    if (null != daysRemaining) {
      tmp7 = null;
      if (daysRemaining >= 0) {
        let first;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const WarningIcon = tmp(5004).WarningIcon;
          const intl = tmp(1126).intl;
          const tmp12 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2565.wucWfE)} />;
          cResult[0] = tmp12;
          first = tmp12;
        } else {
          first = cResult[0];
        }
        tmp7 = first;
      }
    }
  }
  return tmp7;
}) : (function useFamilyCenterTrailing() {
  const obj = useIsParentalConsentBannerActive;
  const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
  const obj2 = useParentalConsentWarning;
  const parentalConsentWarning = obj2.useParentalConsentWarning();
  let daysRemaining;
  if (parentalConsentWarning != null) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  if (daysRemaining == null) {
    daysRemaining = null;
  }
  let tmp6 = null;
  if (isParentalConsentBannerActive) {
    tmp6 = null;
    if (null != daysRemaining) {
      tmp6 = null;
      if (daysRemaining >= 0) {
        const WarningIcon = tmp(5004).WarningIcon;
        const intl = tmp(1126).intl;
        tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2565.wucWfE)} />;
      }
    }
  }
  return tmp6;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2565.RZqaJn);
  },
  parent: null,
  IconComponent: GroupIcon.GroupIcon,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.FAMILY_CENTER,
    getComponent() {
      return require("UserSettingsFamilyCenter").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
