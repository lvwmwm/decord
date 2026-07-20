// Module ID: 13637
// Function ID: 103355
// Name: route
// Dependencies: []

// Module 13637 (route)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[9]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(importDefault(dependencyMap[8]).RZqaJn);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[10]).GroupIcon,
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
          obj = { 0: "black", 0: "platformTypes", 0: "HIDE_MEDIA_DOWNLOAD_OPTIONS", color: importDefault(dependencyMap[6]).colors.ICON_FEEDBACK_WARNING };
          const intl = arg1(dependencyMap[7]).intl;
          obj.accessibilityLabel = intl.string(importDefault(dependencyMap[8]).wucWfE);
          tmp5 = jsx(arg1(dependencyMap[5]).WarningIcon, obj);
        }
      }
    }
    return tmp5;
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[1]).UserSettingsSections.FAMILY_CENTER,
  getComponent() {
    return arg1(dependencyMap[11]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_settings/defs/native/FamilyCenterSetting.tsx");

export default route;
