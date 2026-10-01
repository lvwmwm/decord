// Module ID: 14400
// Function ID: 14401
// Name: FamilyCenterSetting
// Dependencies: [19, 1074, 21, 14401, 14402, 8048, 576, 1115, 2487, 11006, 5403, 14405, 2]

// Module 14400 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import _modDef2487 from "module_2487" /* 2487 */;
import GroupIcon from "GroupIcon" /* 5403 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 14401 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14402 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2487.RZqaJn);
  },
  parent: null,
  IconComponent: GroupIcon.GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
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
          const WarningIcon = tmp(8048).WarningIcon;
          const intl = tmp(1115).intl;
          tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2487.wucWfE)} />;
        }
      }
    }
    return tmp6;
  },
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
