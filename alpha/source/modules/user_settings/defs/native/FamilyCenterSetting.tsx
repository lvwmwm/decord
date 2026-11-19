// Module ID: 16079
// Function ID: 16080
// Name: FamilyCenterSetting
// Dependencies: [19, 1072, 21, 16080, 16081, 7644, 575, 1113, 2723, 11875, 6919, 16084, 2]

// Module 16079 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2723 from "module_2723" /* 2723 */;
import GroupIcon from "GroupIcon" /* 6919 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 16080 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 16081 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2723.RZqaJn);
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
          const WarningIcon = tmp(7644).WarningIcon;
          const intl = tmp(1113).intl;
          tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2723.wucWfE)} />;
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
