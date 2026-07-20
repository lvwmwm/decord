// Module ID: 16265
// Function ID: 125595
// Name: useOnboardingMonetizationEnableFlow
// Dependencies: []
// Exports: default

// Module 16265 (useOnboardingMonetizationEnableFlow)
let closure_3 = importAll(dependencyMap[0]);
const isGuildOwner = arg1(dependencyMap[1]).isGuildOwner;
let closure_5 = importDefault(dependencyMap[2]);
({ GuildFeatures: closure_6, HelpdeskArticles: closure_7, MarketingURLs: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx");

export default function useOnboardingMonetizationEnableFlow(features) {
  let createEnableRequest;
  let error;
  let error2;
  let isApplicationRejected;
  let loading;
  let loading2;
  let requestCooldownDuration;
  const arg1 = features;
  let obj = arg1(dependencyMap[4]);
  const isExpeditedOnboardingGuild = obj.useIsExpeditedOnboardingGuild(features);
  if (null != features) {
    features = features.features;
    const hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
  }
  if (null != features) {
    const features2 = features.features;
    const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
  }
  let obj1 = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let tmp2 = null != arg0;
    if (tmp2) {
      tmp2 = callback(arg0, tmp);
    }
    return tmp2;
  });
  let id;
  if (null != features) {
    id = features.id;
  }
  const tmp7Result = importDefault(dependencyMap[6])(id);
  const submittedRequest = tmp7Result.submittedRequest;
  ({ error, loading, createEnableRequest } = tmp7Result);
  let id1;
  const tmp7 = importDefault(dependencyMap[6]);
  if (null != features) {
    id1 = features.id;
  }
  const tmp10Result = importDefault(dependencyMap[7])(id1);
  const refresh = tmp10Result.refresh;
  const importDefault = refresh;
  const eligibility = tmp10Result.eligibility;
  ({ loading: loading2, error: error2 } = tmp10Result);
  const tmp10 = importDefault(dependencyMap[7]);
  ({ isApplicationRejected, requestCooldownDuration } = importDefault(dependencyMap[8])(eligibility));
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
  let obj2 = arg1(dependencyMap[9]);
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
  const intl = arg1(dependencyMap[10]).intl;
  obj = {};
  const tmp13 = importDefault(dependencyMap[8])(eligibility);
  obj.faqUrl = importDefault(dependencyMap[11]).getArticleURL(constants2.CREATOR_FAQ);
  const obj5 = importDefault(dependencyMap[11]);
  if (isApplicationRejected) {
    if (obj2.useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled) {
      if (true === hasItem) {
        const intl4 = arg1(dependencyMap[10]).intl;
        obj = { communityGuidelineUrl: constants3.GUIDELINES };
        let formatResult1 = intl4.format(arg1(dependencyMap[10]).t.0o1Q+t, obj);
      } else {
        const intl3 = arg1(dependencyMap[10]).intl;
        obj1 = { communityGuidelineUrl: constants3.GUIDELINES };
        formatResult1 = intl3.format(arg1(dependencyMap[10]).t.b6h59n, obj1);
      }
    }
  }
  let tmp25 = isApplicationRejected;
  if (isApplicationRejected) {
    tmp25 = null != requestCooldownDuration;
  }
  let formatResult2;
  if (tmp25) {
    const intl2 = arg1(dependencyMap[10]).intl;
    obj2 = { requestCooldownDuration, creatorRevenuePolicyUrl: importDefault(dependencyMap[11]).getArticleURL(constants2.CREATOR_POLICY) };
    formatResult2 = intl2.format(arg1(dependencyMap[10]).t.TvX207, obj2);
    const obj7 = importDefault(dependencyMap[11]);
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
  const formatResult = intl.format(arg1(dependencyMap[10]).t.aJUdOi, obj);
  let formatResult3;
  const creatorMonetizationAcceptTermsCheckboxText = arg1(dependencyMap[12]).getCreatorMonetizationAcceptTermsCheckboxText();
  if (isApplicationRejected) {
    if (tmp23) {
      if (stateFromStores) {
        const intl5 = arg1(dependencyMap[10]).intl;
        formatResult3 = intl5.format(arg1(dependencyMap[10]).t.wbVIUB, {});
      }
    }
  }
  const items1 = [refresh, tmp39];
  const effect = React.useEffect(() => {
    if (tmp39) {
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
