// Module ID: 15830
// Function ID: 15831
// Name: FamilyCenterSetting
// Dependencies: [19, 1087, 21, 558, 576, 15831, 15832, 7791, 587, 1128, 2571, 11006, 8442, 15835, 2]

// Module 15830 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import _modDef2571 from "module_2571" /* 2571 */;
import GroupIcon from "GroupIcon" /* 8442 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 15831 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 15832 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
          const WarningIcon = tmp(7791).WarningIcon;
          const intl = tmp(1128).intl;
          const tmp12 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2571.wucWfE)} />;
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
        const WarningIcon = tmp(7791).WarningIcon;
        const intl = tmp(1128).intl;
        tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2571.wucWfE)} />;
      }
    }
  }
  return tmp6;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2571.RZqaJn);
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
