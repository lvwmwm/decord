// Module ID: 15072
// Function ID: 15073
// Name: TinyBroncoSettingsNotices
// Dependencies: [19, 17, 1390, 5927, 7019, 21, 5092, 587, 558, 576, 14941, 9624, 7497, 5918, 1126, 7567, 3152, 14981, 5928, 5921, 5909, 15073, 7737, 2]
// Exports: shouldShowTeenNotice, shouldShowUnconfirmedNotice, useIsEnabled

// Module 15072 (TinyBroncoSettingsNotices)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3152 from "module_3152" /* 3152 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5918 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5921 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5927 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 5928 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7497 */;
import useUserIsTeen from "useUserIsTeen" /* 7737 */;
import useAgeGroupPresentation from "useAgeGroupPresentation" /* 9624 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14941 */;
import handleOpenUnconfirmedAgeGroupSupportArticle from "handleOpenUnconfirmedAgeGroupSupportArticle" /* 14981 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 7019 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
let closure_6 = TinyBroncoConstants.TINY_BRONCO_SETTINGS_LOCATION;
({ SafetySettingsNoticeAction: metroImportDefault, SafetySettingsNoticeType: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function TeenNotice(arg0) {
  let message;
  let noticeType;
  let obj2;
  let tmp21;
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = noticeType(576);
  const cResult = obj.c(19);
  ({ message, noticeType } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] !== noticeType) {
    const fn = function s() {
      const obj = SafetySettingsUtils;
      const result = obj.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.VIEWED);
    };
    const items = [noticeType];
    cResult[0] = noticeType;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] !== noticeType) {
    const fn2 = function u() {
      const obj = useAgeGroupPresentation;
      const result = obj.handleOpenAgeGatedContentArticle();
      const obj2 = SafetySettingsUtils;
      const result1 = obj2.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.LEARN_MORE);
    };
    cResult[3] = noticeType;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] !== noticeType) {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[5] = noticeType;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[7] === tmp9) {
    let tmp14;
    class A {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
      }
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
      const stringResult = obj2.string(noticeType(1126).t.hvVgAZ);
      cResult[10] = stringResult;
      tmp14 = stringResult;
    } else {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
    }
    if (cResult[11] !== tmp8) {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
      tmp17[0] = tmp14;
      tmp17[1] = tmp8;
      cResult[11] = tmp8;
      cResult[12] = tmp17;
    } else {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
    }
    if (cResult[13] === tmp11) {
      class A {
        constructor() {
          const obj = AgeVerificationActionCreatorsDefault;
          const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
          const result = obj.showAgeVerificationGetStartedModal(obj2);
          const obj3 = SafetySettingsUtils;
          const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
        }
      }
      if (cResult[16] === tmp4.container) {
        class A {
          constructor() {
            const obj = AgeVerificationActionCreatorsDefault;
            const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
            const result = obj.showAgeVerificationGetStartedModal(obj2);
            const obj3 = SafetySettingsUtils;
            const result1 = obj3.trackSafetySettingsNoticeAnalytics(noticeType, metroImportDefault.CONFIRM_AGE);
          }
        }
        return tmp21;
      }
      const tmp24 = <View style={tmp10}>{tmp18}</View>;
      cResult[16] = tmp4.container;
      cResult[17] = tmp18;
      cResult[18] = tmp24;
      tmp21 = tmp24;
    }
    cResult[13] = tmp11;
    cResult[14] = tmp16;
    cResult[15] = jsx(noticeType(7567).InlineNotice, { type: "info", message: tmp11, role: "status", action: tmp16 });
    const tmp20 = jsx(noticeType(7567).InlineNotice, { type: "info", message: tmp11, role: "status", action: tmp16 });
  }
  const intl = tmp(1126).intl;
  cResult[7] = tmp9;
  cResult[8] = message;
  cResult[9] = intl.format(message, { handleOnConfirmAgeHook: tmp9 });
  const formatResult = intl.format(message, { handleOnConfirmAgeHook: tmp9 });
}) : (function TeenNotice(noticeType) {
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
  const InlineNotice = noticeType(7567).InlineNotice;
  intl = noticeType(1126).intl;
  obj3 = { text: intl2.string(noticeType(1126).t.hvVgAZ), onClick: callback };
  intl2 = noticeType(1126).intl;
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentFiltersTeenNotice() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = <closure_11 message={_modDef3152.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ContentFiltersTeenNotice() {
  return <closure_11 message={_modDef3152.qbBkFI} noticeType={metroImportAll.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsTeenNotice() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = <closure_11 message={_modDef3152["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function MessageRequestsTeenNotice() {
  return <closure_11 message={_modDef3152["l+jt8J"]} noticeType={metroImportAll.CONTENT_AND_SOCIAL_NOTICE} />;
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnconfirmedNotice(message) {
  let AGE_CONFIRMATION_NOTICE;
  let obj2;
  let tmp12;
  let tmp16;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = AGE_CONFIRMATION_NOTICE(576);
  const cResult = obj.c(12);
  message = message.message;
  const tmp4 = closure_10();
  AGE_CONFIRMATION_NOTICE = constants2.AGE_CONFIRMATION_NOTICE;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = SafetySettingsUtils;
      const result = obj.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.VIEWED);
    };
    const items = [AGE_CONFIRMATION_NOTICE];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = handleOpenUnconfirmedAgeGroupSupportArticle;
        const result = obj.handleOpenUnconfirmedAgeGroupSupportArticle();
        const obj2 = SafetySettingsUtils;
        const result1 = obj2.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.LEARN_MORE);
      }
    }
    cResult[2] = E;
    tmp8 = E;
  } else {
    class E {
      constructor() {
        const obj = handleOpenUnconfirmedAgeGroupSupportArticle;
        const result = obj.handleOpenUnconfirmedAgeGroupSupportArticle();
        const obj2 = SafetySettingsUtils;
        const result1 = obj2.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.LEARN_MORE);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[3] = C;
    tmp9 = C;
  } else {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  const container = tmp4.container;
  if (cResult[4] !== message) {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    let obj3 = { handleOnAgeGatedContentHook: tmp8 };
    cResult[4] = message;
    cResult[5] = obj2.format(message, obj3);
    const formatResult = obj2.format(message, obj3);
  } else {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    const intl = tmp(1126).intl;
    tmp13[0] = intl.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia);
    tmp13[1] = tmp9;
    cResult[6] = tmp13;
    tmp12 = tmp13;
  } else {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[7] !== tmp10) {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    cResult[7] = tmp10;
    cResult[8] = jsx(AGE_CONFIRMATION_NOTICE(7567).InlineNotice, { type: "info", message: tmp10, role: "status", action: tmp12 });
    const tmp15 = jsx(AGE_CONFIRMATION_NOTICE(7567).InlineNotice, { type: "info", message: tmp10, role: "status", action: tmp12 });
  } else {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
  }
  if (cResult[9] === tmp4.container) {
    class C {
      constructor() {
        const obj = AgeVerificationActionCreatorsDefault;
        const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = SafetySettingsUtils;
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(AGE_CONFIRMATION_NOTICE, metroImportDefault.CONFIRM_AGE);
      }
    }
    return tmp16;
  }
  tmp16 = <View style={container}>{tmp14}</View>;
  cResult[9] = tmp4.container;
  cResult[10] = tmp14;
  cResult[11] = tmp16;
}) : (function UnconfirmedNotice(message) {
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
  const InlineNotice = AGE_CONFIRMATION_NOTICE(7567).InlineNotice;
  intl = AGE_CONFIRMATION_NOTICE(1126).intl;
  obj3 = { text: intl2.string(AGE_CONFIRMATION_NOTICE(1126).t.FDSSia), onClick: callback1 };
  intl2 = AGE_CONFIRMATION_NOTICE(1126).intl;
  return <View style={tmp.container}>{null}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentFiltersUnconfirmedNotice() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = <closure_13 message={_modDef3152.HGJo1F} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ContentFiltersUnconfirmedNotice() {
  return <closure_13 message={_modDef3152.HGJo1F} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsUnconfirmedNotice() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = <closure_13 message={_modDef3152.tGsCdS} />;
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function MessageRequestsUnconfirmedNotice() {
  return <closure_13 message={_modDef3152.tGsCdS} />;
});
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageRequestsNoticeVariant() {
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
}) : (function useMessageRequestsNoticeVariant() {
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
});
let closure_15 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestsNotice() {
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_15();
  if ("unconfirmed" === tmp2) {
    let first;
    const _Symbol2 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = <closure_14 />;
      cResult[0] = tmp13;
      first = tmp13;
    } else {
      first = cResult[0];
    }
    return first;
  } else if ("teen" === tmp2) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp8 = <closure_12 />;
      cResult[1] = tmp8;
      tmp5 = tmp8;
    } else {
      tmp5 = cResult[1];
    }
    return tmp5;
  } else if (undefined === tmp2) {
    return null;
  }
}) : (function MessageRequestsNotice() {
  const tmp = closure_15();
  if ("unconfirmed" === tmp) {
    return <closure_14 />;
  } else if ("teen" === tmp) {
    return <closure_12 />;
  } else if (undefined === tmp) {
    return null;
  }
});
function useIsEnabled() {
  const obj = TinyBroncoExperiment;
  return obj.useIsTinyBroncoEnabled(closure_6);
}
let result1 = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNotices.tsx");

export const ContentFiltersTeenNotice = tmp3;
export const MessageRequestsTeenNotice = tmp4;
export const ContentFiltersUnconfirmedNotice = tmp5;
export const MessageRequestsUnconfirmedNotice = tmp6;
export { useIsEnabled };
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
export const useMessageRequestsNoticeVariant = tmp8;
export const MessageRequestsNotice = tmp9;
