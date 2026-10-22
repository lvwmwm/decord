// Module ID: 16052
// Function ID: 16053
// Name: AgeConfirmationNotice
// Dependencies: [19, 17, 7401, 21, 558, 576, 7383, 15915, 5646, 2067, 7868, 6642, 587, 1128, 5220, 7938, 2]

// Module 16052 (AgeConfirmationNotice)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2067 */;
import Text_Text from "Text/Text" /* 5220 */;
import LinkingDefault from "Linking" /* 5646 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 15915 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 7401 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AgeConfirmationNotice() {
  let obj3;
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let tmp10;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(576);
  const cResult = obj.c(11);
  let obj2 = sensitiveContentFilterHelpArticle(7383);
  sensitiveContentFilterHelpArticle = obj2.useSensitiveContentFilterHelpArticle();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = sensitiveContentFilterHelpArticle(dependencyMap[7]);
      const result = obj.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] !== sensitiveContentFilterHelpArticle) {
    const fn2 = function _() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = HelpdeskUtilsDefault;
      openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
      const obj2 = SafetySettingsUtils;
      const result = obj2.trackSafetySettingsNoticeAnalytics(metroRequire.AGE_CONFIRMATION_NOTICE, hasOwnProperty.LEARN_MORE);
    };
    cResult[2] = sensitiveContentFilterHelpArticle;
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  importDefault = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
    cResult[4] = E;
    tmp9 = E;
  } else {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
    tmp11[0] = nativeDefault.space.PX_8;
    cResult[5] = tmp11;
    tmp10 = tmp11;
  } else {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
  }
  if (cResult[6] !== tmp8) {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
    const obj4 = {
      hook(children) {
          return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
        }
    };
    cResult[6] = tmp8;
    cResult[7] = obj3.format(tmp(1128).t.mFgsfg, obj4);
    const formatResult = obj3.format(tmp(1128).t.mFgsfg, obj4);
  } else {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
    const intl = tmp(1128).intl;
    tmp16[0] = intl.string(tmp(1128).t.FDSSia);
    tmp16[1] = tmp9;
    cResult[8] = tmp16;
  } else {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
  }
  if (cResult[9] !== tmp13) {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
    const tmp19 = <View style={tmp10}>{null}</View>;
    cResult[9] = tmp13;
    cResult[10] = tmp19;
    tmp17 = tmp19;
  } else {
    class E {
      constructor() {
        const obj = onPress(dependencyMap[10]);
        const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        const result = obj.showAgeVerificationGetStartedModal(obj2);
        const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
        const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
      }
    }
  }
  return tmp17;
}) : (function AgeConfirmationNotice() {
  let intl;
  let intl2;
  let obj5;
  let obj6;
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(7383);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = react.useEffect(() => {
    const obj = sensitiveContentFilterHelpArticle(dependencyMap[7]);
    const result = obj.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = react.useCallback(() => {
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = SafetySettingsUtils;
    const result = obj2.trackSafetySettingsNoticeAnalytics(metroRequire.AGE_CONFIRMATION_NOTICE, hasOwnProperty.LEARN_MORE);
  }, items);
  let obj3 = { marginBottom: nativeDefault.space.PX_8 };
  const callback = react.useCallback(() => {
    const obj = onPress(dependencyMap[10]);
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  ({ type: "info", message: intl.format(sensitiveContentFilterHelpArticle(1128).t.mFgsfg, obj5), role: "status", action: obj6 });
  const InlineNotice = sensitiveContentFilterHelpArticle(7938).InlineNotice;
  intl = sensitiveContentFilterHelpArticle(1128).intl;
  obj5 = {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    }
  };
  obj6 = { text: intl2.string(sensitiveContentFilterHelpArticle(1128).t.FDSSia), onPress: callback };
  intl2 = sensitiveContentFilterHelpArticle(1128).intl;
  return <View style={obj3}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default tmp3;
