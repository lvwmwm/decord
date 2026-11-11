// Module ID: 17276
// Function ID: 17277
// Name: FamilyCenterSetting
// Dependencies: [19, 1072, 21, 17277, 17278, 8095, 575, 1113, 2685, 12317, 7372, 17281, 2]

// Module 17276 (FamilyCenterSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import _modDef2685 from "module_2685" /* 2685 */;
import GroupIcon from "GroupIcon" /* 7372 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 17277 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 17278 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2685.RZqaJn);
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
          const WarningIcon = tmp(8095).WarningIcon;
          const intl = tmp(1113).intl;
          tmp6 = <WarningIcon size="sm" color={nativeDefault.colors.ICON_FEEDBACK_WARNING} accessible accessibilityLabel={intl.string(_modDef2685.wucWfE)} />;
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
