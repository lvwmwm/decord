// Module ID: 16707
// Function ID: 16708
// Name: TinyBroncoSettingsNotices
// Dependencies: [19, 17, 1383, 6737, 7490, 21, 5014, 575, 16574, 10132, 7955, 6729, 8025, 1113, 3128, 16614, 6738, 5693, 6726, 16708, 8368, 2]
// Exports: ContentFiltersTeenNotice, ContentFiltersUnconfirmedNotice, MessageRequestsNotice, shouldShowTeenNotice, shouldShowUnconfirmedNotice, useIsEnabled, useMessageRequestsNoticeVariant

// Module 16707 (TinyBroncoSettingsNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3128 from "module_3128" /* 3128 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5693 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6726 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6729 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 6737 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7955 */;
import useUserIsTeen from "useUserIsTeen" /* 8368 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 10132 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 16574 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 16614 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16708 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 7490 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let tmp;
const TinyBroncoExperiment = tmp(6738);
function TeenNotice(noticeType) {
  let intl;
  let intl2;
  let obj3;
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
  let obj2 = { type: "info", message: intl.format(message, { handleOnConfirmAgeHook: callback1 }), role: "status", action: obj3 };
  const InlineNotice = noticeType(8025).InlineNotice;
  intl = noticeType(1113).intl;
  obj3 = { text: intl2.string(noticeType(1113).t.hvVgAZ), onPress: callback };
  intl2 = noticeType(1113).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsTeenNotice {
  constructor() {
    return <TeenNotice message={_modDef3128["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
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
  const InlineNotice = AGE_CONFIRMATION_NOTICE(8025).InlineNotice;
  intl = AGE_CONFIRMATION_NOTICE(1113).intl;
  obj3 = { text: intl2.string(AGE_CONFIRMATION_NOTICE(1113).t.FDSSia), onPress: callback1 };
  intl2 = AGE_CONFIRMATION_NOTICE(1113).intl;
  return <View style={tmp.container}>{null}</View>;
}
class MessageRequestsUnconfirmedNotice {
  constructor() {
    return <UnconfirmedNotice message={_modDef3128.tGsCdS} />;
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

export function ContentFiltersTeenNotice() {
  return <TeenNotice message={_modDef3128.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
}
export { MessageRequestsTeenNotice };
export function ContentFiltersUnconfirmedNotice() {
  return <UnconfirmedNotice message={_modDef3128.HGJo1F} />;
}
export { MessageRequestsUnconfirmedNotice };
export function useIsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_6);
}
export function shouldShowUnconfirmedNotice() {
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
}
export function shouldShowTeenNotice() {
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
      const tmpResult = TinyBroncoExperiment;
      if (tmpResult.isTinyBroncoEnabled(closure_6)) {
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
}
