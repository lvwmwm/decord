// Module ID: 14119
// Function ID: 14120
// Name: route
// Dependencies: [19, 676, 21, 14120, 14121, 7964, 712, 1236, 2303, 10452, 4817, 14124, 2]

// Module 14119 (route)
import "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2303).RZqaJn);
  },
  parent: null,
  IconComponent: require("GroupIcon").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = require(14120) /* useIsParentalConsentBannerActive */;
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = require(14121) /* useParentalConsentWarning */.useParentalConsentWarning();
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
          obj[1] = importDefault(712).colors.ICON_FEEDBACK_WARNING;
          const intl = tmp(1236).intl;
          obj[3] = intl.string(importDefault(2303).wucWfE);
          tmp6 = jsx(tmp(7964).WarningIcon, { size: "sm", color: null, accessible: true, accessibilityLabel: null });
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
    return require(14124) /* FamilyCenterLoading */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default createToggle;
