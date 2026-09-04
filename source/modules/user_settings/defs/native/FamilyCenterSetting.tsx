// Module ID: 14789
// Function ID: 14790
// Name: route
// Dependencies: [19, 673, 21, 14790, 14791, 8518, 709, 1233, 2368, 11400, 5050, 14794, 2]

// Module 14789 (route)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import useIsParentalConsentBannerActive from "useIsParentalConsentBannerActive" /* 14790 */;
import useParentalConsentWarning from "useParentalConsentWarning" /* 14791 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
noopAll;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = useIsParentalConsentBannerActive;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = useParentalConsentWarning.useParentalConsentWarning();
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
          obj = { size: "sm", color: null, accessible: true, accessibilityLabel: null };
          obj[1] = ThemesDefault.colors.ICON_FEEDBACK_WARNING;
          const intl = tmp(1233).intl;
          obj[3] = intl.string(messagesProxyDefault.wucWfE);
          tmp6 = jsx(tmp(8518).WarningIcon, { size: "sm", color: null, accessible: true, accessibilityLabel: null });
        }
      }
    }
    return tmp6;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER,
  getComponent() {
    return require(14794) /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;
