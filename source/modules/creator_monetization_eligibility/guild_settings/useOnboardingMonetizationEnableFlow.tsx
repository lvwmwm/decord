// Module ID: 16405
// Function ID: 127903
// Name: useOnboardingMonetizationEnableFlow
// Dependencies: [31, 1391, 1849, 653, 5642, 624, 16406, 16407, 16408, 5634, 1212, 1920, 16409, 2]
// Exports: default

// Module 16405 (useOnboardingMonetizationEnableFlow)
import result from "result";
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ GuildFeatures: closure_6, HelpdeskArticles: closure_7, MarketingURLs: closure_8 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx");

export default function useOnboardingMonetizationEnableFlow(features) {
  let createEnableRequest;
  let error;
  let error2;
  let isApplicationRejected;
  let loading;
  let loading2;
  let requestCooldownDuration;
  const _require = features;
  let obj = _require(5642);
  const isExpeditedOnboardingGuild = obj.useIsExpeditedOnboardingGuild(features);
  if (null != features) {
    features = features.features;
    const hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
  }
  if (null != features) {
    const features2 = features.features;
    const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
  }
  let obj1 = _require(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = outer1_4(closure_0, tmp);
    }
    return tmp2;
  });
  let id;
  if (null != features) {
    id = features.id;
  }
  const tmp7Result = refresh(16406)(id);
  const submittedRequest = tmp7Result.submittedRequest;
  ({ error, loading, createEnableRequest } = tmp7Result);
  let id1;
  const tmp7 = refresh(16406);
  if (null != features) {
    id1 = features.id;
  }
  const tmp10Result = refresh(16407)(id1);
  refresh = tmp10Result.refresh;
  const eligibility = tmp10Result.eligibility;
  ({ loading: loading2, error: error2 } = tmp10Result);
  const tmp10 = refresh(16407);
  ({ isApplicationRejected, requestCooldownDuration } = refresh(16408)(eligibility));
  let hasItem2;
  if (null != features) {
    const features3 = features.features;
    hasItem2 = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
  }
  let tmp16 = true === hasItem2;
  if (!tmp16) {
    let hasItem3;
    if (null != features) {
      const features4 = features.features;
      hasItem3 = features4.has(constants.CREATOR_MONETIZABLE_DISABLED);
    }
    tmp16 = true === hasItem3;
  }
  let obj2 = _require(5634);
  let id2;
  if (null != features) {
    id2 = features.id;
  }
  let tmp20 = submittedRequest;
  if (!submittedRequest) {
    let isApplicationPending;
    if (null != eligibility) {
      isApplicationPending = eligibility.isApplicationPending;
    }
    tmp20 = true === isApplicationPending;
  }
  let canApply;
  if (null != eligibility) {
    canApply = eligibility.canApply;
  }
  const intl = _require(1212).intl;
  obj = {};
  const tmp13 = refresh(16408)(eligibility);
  obj.faqUrl = refresh(1920).getArticleURL(constants2.CREATOR_FAQ);
  const obj5 = refresh(1920);
  if (isApplicationRejected) {
    if (obj2.useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled) {
      if (true === hasItem) {
        const intl4 = _require(1212).intl;
        obj = { communityGuidelineUrl: constants3.GUIDELINES };
        let formatResult1 = intl4.format(_require(1212).t["0o1Q+t"], obj);
      } else {
        const intl3 = _require(1212).intl;
        obj1 = { communityGuidelineUrl: constants3.GUIDELINES };
        formatResult1 = intl3.format(_require(1212).t.b6h59n, obj1);
      }
    }
  }
  let tmp25 = isApplicationRejected;
  if (isApplicationRejected) {
    tmp25 = null != requestCooldownDuration;
  }
  let formatResult2;
  if (tmp25) {
    const intl2 = _require(1212).intl;
    obj2 = { requestCooldownDuration, creatorRevenuePolicyUrl: refresh(1920).getArticleURL(constants2.CREATOR_POLICY) };
    formatResult2 = intl2.format(_require(1212).t.TvX207, obj2);
    const obj7 = refresh(1920);
  }
  let tmp39 = isExpeditedOnboardingGuild;
  if (isExpeditedOnboardingGuild) {
    tmp39 = stateFromStores;
  }
  if (tmp39) {
    tmp39 = false === hasItem1;
  }
  const dependencyMap = tmp39;
  let tmp40 = isExpeditedOnboardingGuild;
  if (isExpeditedOnboardingGuild) {
    tmp40 = false === hasItem;
  }
  const formatResult = intl.format(_require(1212).t.aJUdOi, obj);
  let formatResult3;
  const creatorMonetizationAcceptTermsCheckboxText = _require(16409).getCreatorMonetizationAcceptTermsCheckboxText();
  if (isApplicationRejected) {
    if (tmp23) {
      if (stateFromStores) {
        const intl5 = _require(1212).intl;
        formatResult3 = intl5.format(_require(1212).t.wbVIUB, {});
      }
    }
  }
  const items1 = [refresh, tmp39];
  const effect = React.useEffect(() => {
    if (closure_2) {
      refresh();
    }
  }, items1);
  const obj3 = { resubmittingEnableRequest: loading, resubmissionError: error, isGuildOwner: stateFromStores, createEnableRequest, resubmittedRequest: submittedRequest, eligibilityLoading: loading2, eligibilityError: error2, refreshEligibility: refresh, eligibility, eligibleForMonetization: true === canApply, isApplicationPending: tmp20, hasPreviousApplicationRejection: isApplicationRejected, requestRejectedNoticeText: formatResult2, reapplyNoticeText: formatResult3, showAcceptTermsFlow: tmp40 };
  if (tmp40) {
    if (!tmp16) {
      tmp16 = isApplicationRejected;
    }
    tmp40 = tmp16;
  }
  obj3.wasRejectedInV1 = tmp40;
  obj3.requirementsFinePrintText = formatResult;
  obj3.acceptTermsCheckboxText = creatorMonetizationAcceptTermsCheckboxText;
  return obj3;
};
