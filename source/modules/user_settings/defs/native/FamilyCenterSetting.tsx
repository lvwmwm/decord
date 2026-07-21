// Module ID: 13646
// Function ID: 103400
// Name: route
// Dependencies: [0, 0, 0, 4294967295, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0]

// Module 13646 (route)
import "result";
import { jsx } from "result";
import result from "result";
import result from "result";

result = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(importDefault(dependencyMap[8]).RZqaJn);
  },
  parent: null,
  IconComponent: require("result").GroupIcon,
  useTrailing: function useFamilyCenterTrailing() {
    let obj = arg1(dependencyMap[3]);
    const isParentalConsentBannerActive = obj.useIsParentalConsentBannerActive();
    const parentalConsentWarning = arg1(dependencyMap[4]).useParentalConsentWarning();
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
          obj = { "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003067003492, "Null": 6559922923525764000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243991587, color: importDefault(dependencyMap[6]).colors.ICON_FEEDBACK_WARNING };
          const intl = arg1(dependencyMap[7]).intl;
          obj.accessibilityLabel = intl.string(importDefault(dependencyMap[8]).wucWfE);
          tmp5 = jsx(arg1(dependencyMap[5]).WarningIcon, obj);
        }
      }
    }
    return tmp5;
  },
  screen: result
};
result = {
  route: require("result").UserSettingsSections.FAMILY_CENTER,
  getComponent() {
    return arg1(dependencyMap[11]).default;
  }
};
result = result.createRoute(result);
result = result.fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default result;
