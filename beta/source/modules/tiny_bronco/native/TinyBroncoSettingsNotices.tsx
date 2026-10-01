// Module ID: 14352
// Function ID: 14353
// Name: TinyBroncoSettingsNotices
// Dependencies: [19, 17, 1372, 9231, 7847, 21, 4836, 576, 14246, 14274, 7859, 7861, 1177, 5281, 1115, 3071, 14286, 9235, 5735, 5048, 14353, 8104, 2]
// Exports: ContentFiltersTeenNotice, ContentFiltersUnconfirmedNotice, MessageRequestsNotice, shouldShowTeenNotice, shouldShowUnconfirmedNotice, useIsEnabled, useMessageRequestsNoticeVariant

// Module 14352 (TinyBroncoSettingsNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import _modDef3071 from "module_3071" /* 3071 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5048 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5735 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7859 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7861 */;
import useUserIsTeen from "useUserIsTeen" /* 8104 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 9231 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14246 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 14274 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 14286 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14353 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 7847 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const TinyBroncoExperiment = tmp(9235);
function TeenNotice(noticeType) {
  let intl;
  let intl2;
  noticeType = noticeType.noticeType;
  const message = noticeType.message;
  const items = [noticeType];
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.VIEWED);
  }, items);
  const items1 = [noticeType];
  const items2 = [noticeType];
  const callback = react.useCallback(() => {
    const obj = useAgeGroupPresentation;
    const result = obj.handleOpenAgeGatedContentArticle();
    const obj2 = SafetySettingsUtils;
    const result1 = obj2.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.LEARN_MORE);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = SafetySettingsUtils;
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
  }, items2);
  let obj2 = { messageType: noticeType(1177).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(message, { handleOnConfirmAgeHook: callback1 }) };
  const HelpMessage = noticeType(1177).HelpMessage;
  let obj3 = { variant: "secondary", size: "sm", text: intl.string(noticeType(1115).t.hvVgAZ), onPress: callback };
  const Button = noticeType(5281).Button;
  intl = noticeType(1115).intl;
  intl2 = noticeType(1115).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    return <TeenNotice message={_modDef3071["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
  }
}
function UnconfirmedNotice(message) {
  let intl;
  let intl2;
  message = message.message;
  const AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  const items = [AGE_CONFIRMATION_NOTICE];
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.VIEWED);
  }, items);
  const items1 = [AGE_CONFIRMATION_NOTICE];
  const items2 = [AGE_CONFIRMATION_NOTICE];
  const callback = react.useCallback(() => {
    const obj = handleOpenUnconfirmedAgeGroupSupportArticle;
    const result = obj.handleOpenUnconfirmedAgeGroupSupportArticle();
    const obj2 = SafetySettingsUtils;
    const result1 = obj2.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.LEARN_MORE);
  }, items1);
  const callback1 = react.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = SafetySettingsUtils;
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
  }, items2);
  let obj2 = { messageType: AGE_CONFIRMATION_NOTICE(1177).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(message, { handleOnAgeGatedContentHook: callback }) };
  const HelpMessage = AGE_CONFIRMATION_NOTICE(1177).HelpMessage;
  let obj3 = { variant: "secondary", size: "sm", text: intl.string(AGE_CONFIRMATION_NOTICE(1115).t.FDSSia), onPress: callback1 };
  const Button = AGE_CONFIRMATION_NOTICE(5281).Button;
  intl = AGE_CONFIRMATION_NOTICE(1115).intl;
  intl2 = AGE_CONFIRMATION_NOTICE(1115).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    return <UnconfirmedNotice message={_modDef3071.tGsCdS} />;
  }
}
const View = react_native.View;
let closure_6 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export const ContentFiltersTeenNotice = function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3071.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
};
export { MessageRequestsTeenNotice };
export const ContentFiltersUnconfirmedNotice = function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3071.HGJo1F} />;
};
export { MessageRequestsUnconfirmedNotice };
export const useIsEnabled = function useIsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_6);
};
export const shouldShowUnconfirmedNotice = function shouldShowUnconfirmedNotice() {
  const obj = RegionalFeatureConfigUtils;
  let hasAgeGatedFeaturesResult = obj.hasAgeGatedFeatures();
  if (hasAgeGatedFeaturesResult) {
    const tmpResult = AgeVerificationUtils;
    hasAgeGatedFeaturesResult = !tmpResult.isAgeVerified();
  }
  if (hasAgeGatedFeaturesResult) {
    const tmpResult2 = TinyBroncoExperiment;
    hasAgeGatedFeaturesResult = tmpResult2.isTinyBroncoEnabled(closure_6);
  }
  return hasAgeGatedFeaturesResult;
};
export const shouldShowTeenNotice = function shouldShowTeenNotice() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let isTinyBroncoEnabledResult = false === nsfwAllowed;
  if (isTinyBroncoEnabledResult) {
    const obj = TinyBroncoExperiment;
    isTinyBroncoEnabledResult = obj.isTinyBroncoEnabled(closure_6);
  }
  return isTinyBroncoEnabledResult;
};
export const useMessageRequestsNoticeVariant = function useMessageRequestsNoticeVariant() {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled();
  const obj2 = RegionalFeatureConfigUtils;
  const hasAgeGatedFeatures = obj2.useHasAgeGatedFeatures();
  const obj3 = AgeVerificationUtils;
  const isAgeVerified = obj3.useIsAgeVerified();
  useUserIsTeen;
  if (!isParentallyControlled) {
    let str;
    if (!hasAgeGatedFeatures) {
      if (tmp7) {
        str = "teen";
      }
    } else {
      str = "unconfirmed";
    }
    if (null != str) {
      const tmpResult = TinyBroncoExperiment;
      if (tmpResult.isTinyBroncoEnabled(closure_6)) {
        return str;
      }
    }
  }
};
export const MessageRequestsNotice = function MessageRequestsNotice() {
  const obj = useParentalControlSettings;
  const isParentallyControlled = obj.useIsParentallyControlled();
  const obj2 = RegionalFeatureConfigUtils;
  const hasAgeGatedFeatures = obj2.useHasAgeGatedFeatures();
  const obj3 = AgeVerificationUtils;
  const isAgeVerified = obj3.useIsAgeVerified();
  useUserIsTeen;
  let tmp8;
  if (!isParentallyControlled) {
    let str;
    if (!hasAgeGatedFeatures) {
      if (tmp7) {
        str = "teen";
      }
    } else {
      str = "unconfirmed";
    }
    if (null != str) {
      const tmpResult = TinyBroncoExperiment;
      if (tmpResult.isTinyBroncoEnabled(closure_6)) {
        tmp8 = str;
      }
    }
  }
  if ("unconfirmed" === tmp8) {
    return <MessageRequestsUnconfirmedNotice />;
  } else if ("teen" === tmp8) {
    return <MessageRequestsTeenNotice />;
  } else if (undefined === tmp8) {
    return null;
  }
};
