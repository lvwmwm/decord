// Module ID: 13767
// Function ID: 105589
// Name: route
// Dependencies: [31, 653, 33, 13768, 13769, 7576, 689, 1212, 2198, 10095, 4646, 13772, 2]

// Module 13767 (route)
import "result";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2198).RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = require(13768) /* useIsParentalConsentBannerActive */;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = require(13769) /* useParentalConsentWarning */.useParentalConsentWarning();
    let daysRemaining;
    if (null != parentalConsentWarning) {
      daysRemaining = parentalConsentWarning.daysRemaining;
    }
    let tmp4 = null;
    if (null != daysRemaining) {
      tmp4 = daysRemaining;
    }
    let tmp5 = null;
    if (isParentalConsentBannerActive) {
      tmp5 = null;
      if (null != tmp4) {
        tmp5 = null;
        if (tmp4 >= 0) {
          obj = { size: "sm", color: importDefault(689).colors.ICON_FEEDBACK_WARNING, accessible: true };
          const intl = require(1212) /* getSystemLocale */.intl;
          obj.accessibilityLabel = intl.string(importDefault(2198).wucWfE);
          tmp5 = jsx(require(7576) /* WarningIcon */.WarningIcon, { size: "sm", color: importDefault(689).colors.ICON_FEEDBACK_WARNING, accessible: true });
        }
      }
    }
    return tmp5;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER,
  getComponent() {
    return require(13772) /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;
