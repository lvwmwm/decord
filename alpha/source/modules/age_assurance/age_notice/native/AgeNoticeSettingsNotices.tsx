// Module ID: 17345
// Function ID: 17346
// Name: AgeNoticeSettingsNotices
// Dependencies: [19, 17, 1388, 6841, 6910, 21, 5306, 575, 17212, 10812, 8159, 1113, 3353, 17252, 8190, 6833, 6842, 5995, 6830, 17346, 12029, 2]
// Exports: ContentFiltersTeenNotice, ContentFiltersUnconfirmedNotice, MessageRequestsNotice, shouldShowTeenNotice, shouldShowUnconfirmedNotice, useIsEnabled, useMessageRequestsNoticeVariant

// Module 17345 (AgeNoticeSettingsNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3353 from "module_3353" /* 3353 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5995 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6830 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6833 */;
import AgeNoticeConstants from "AgeNoticeConstants" /* 6841 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8190 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10812 */;
import useUserIsTeen from "useUserIsTeen" /* 12029 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 17212 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 17252 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17346 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 6910 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const AgeNoticeExperiment = tmp(6842);
function TeenNotice(noticeType) {
  let intl;
  noticeType = noticeType.noticeType;
  const message = noticeType.message;
  const items = [noticeType];
  const tmp = closure_10();
  const effect = react.useEffect(() => {
    const obj = SafetySettingsUtils;
    const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.VIEWED);
  }, items);
  const items1 = [noticeType];
  const callback = react.useCallback(() => {
    const obj = useAgeGroupPresentation;
    const result = obj.handleOpenAgeGatedContentArticle();
    const obj2 = SafetySettingsUtils;
    const result1 = obj2.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.LEARN_MORE);
  }, items1);
  let obj2 = { type: "info", message: intl.format(message, { handleOnAgeGatedContentHook: callback }), role: "status" };
  const InlineNotice = noticeType(8159).InlineNotice;
  intl = noticeType(1113).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    return <TeenNotice message={_modDef3353["5KHq55"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
  }
}
function UnconfirmedNotice(message) {
  let intl;
  let intl2;
  let obj3;
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
  let obj2 = { type: "info", message: intl.format(message, { handleOnAgeGatedContentHook: callback }), role: "status", action: obj3 };
  const InlineNotice = AGE_CONFIRMATION_NOTICE(8159).InlineNotice;
  intl = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj3 = { text: intl2.string(AGE_CONFIRMATION_NOTICE(1113).t.FDSSia), onPress: callback1 };
  intl2 = AGE_CONFIRMATION_NOTICE(1113).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    return <UnconfirmedNotice message={_modDef3353.tGsCdS} />;
  }
}
const View = react_native.View;
let closure_6 = AgeNoticeConstants.AGE_NOTICE_SETTINGS_LOCATION;
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/age_assurance/age_notice/native/AgeNoticeSettingsNotices.tsx");

export function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3353.HBnyJM} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
}
export { MessageRequestsTeenNotice };
export function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3353.HGJo1F} />;
}
export { MessageRequestsUnconfirmedNotice };
export function useIsEnabled() {
  const obj = AgeNoticeExperiment;
  return obj.useIsAgeNoticeEnabled(closure_6);
}
export function shouldShowUnconfirmedNotice() {
  const obj = RegionalFeatureConfigUtils;
  let hasAgeGatedFeaturesResult = obj.hasAgeGatedFeatures();
  if (hasAgeGatedFeaturesResult) {
    const tmpResult = AgeVerificationUtils;
    hasAgeGatedFeaturesResult = !tmpResult.isAgeVerified();
  }
  if (hasAgeGatedFeaturesResult) {
    const tmpResult2 = AgeNoticeExperiment;
    hasAgeGatedFeaturesResult = tmpResult2.isAgeNoticeEnabled(closure_6);
  }
  return hasAgeGatedFeaturesResult;
}
export function shouldShowTeenNotice() {
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let isAgeNoticeEnabledResult = false === nsfwAllowed;
  if (isAgeNoticeEnabledResult) {
    const obj = AgeNoticeExperiment;
    isAgeNoticeEnabledResult = obj.isAgeNoticeEnabled(closure_6);
  }
  return isAgeNoticeEnabledResult;
}
export function useMessageRequestsNoticeVariant() {
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
      const tmpResult = AgeNoticeExperiment;
      if (tmpResult.isAgeNoticeEnabled(closure_6)) {
        return str;
      }
    }
  }
}
export function MessageRequestsNotice() {
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
      const tmpResult = AgeNoticeExperiment;
      if (tmpResult.isAgeNoticeEnabled(closure_6)) {
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
}
