// Module ID: 19864
// Function ID: 19865
// Name: useOnboardingMonetizationEnableFlow
// Dependencies: [19, 4876, 1384, 1072, 7429, 563, 19865, 19866, 19867, 7421, 1114, 2062, 19868, 2]
// Exports: default

// Module 19864 (useOnboardingMonetizationEnableFlow)
import GuildRecord from "GuildRecord" /* 4876 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: metroRequire, HelpdeskArticles: metroImportDefault, MarketingURLs: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx");

export default function useOnboardingMonetizationEnableFlow(features) {
  let canApply;
  let closure_2;
  let createEnableRequest;
  let eligibility;
  let error;
  let error2;
  let formatResult2;
  let hasItem;
  let isApplicationRejected;
  let loading;
  let loading2;
  let refresh;
  let requestCooldownDuration;
  let submittedRequest;
  let tmp9Result4;
  _require = features;
  let tmp = _require;
  const tmp2 = dependencyMap;
  const obj = require("CreatorMonetizationEligibilityExperimentUtils");
  let isExpeditedOnboardingGuild = obj.useIsExpeditedOnboardingGuild(features);
  if (features != null) {
    features = features.features;
    hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
  }
  if (features != null) {
    const features2 = features.features;
    const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
  }
  const items = [UserStore];
  const tmpResult = tmp(563);
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    const tmp3 = null != features && isGuildOwner(tmp2, tmp);
    return tmp3;
  });
  let id;
  const tmp10 = refresh(19865);
  if (features != null) {
    id = features.id;
  }
  ({ submittedRequest, error, loading, createEnableRequest } = tmp10(id));
  let id1;
  tmp10(id);
  const tmp9Result = refresh(19866);
  if (features != null) {
    id1 = features.id;
  }
  const tmp9ResultResult = tmp9Result(id1);
  refresh = tmp9ResultResult.refresh;
  ({ eligibility, loading: loading2, error: error2 } = tmp9ResultResult);
  ({ isApplicationRejected, requestCooldownDuration } = refresh(19867)(eligibility));
  let hasItem2;
  refresh(19867)(eligibility);
  if (features != null) {
    const features3 = features.features;
    hasItem2 = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
  }
  let tmp19 = true === hasItem2;
  if (!tmp19) {
    let hasItem3;
    if (features != null) {
      const features4 = features.features;
      hasItem3 = features4.has(constants.CREATOR_MONETIZABLE_DISABLED);
    }
    tmp19 = true === hasItem3;
  }
  let id2;
  const useIsMonetizationReapplicationDisabled = tmp(7421).useIsMonetizationReapplicationDisabled;
  tmp(7421);
  if (features != null) {
    id2 = features.id;
  }
  let tmp24 = submittedRequest;
  const isMonetizationReapplicationDisabled = useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled;
  if (!submittedRequest) {
    let isApplicationPending;
    if (eligibility != null) {
      isApplicationPending = eligibility.isApplicationPending;
    }
    tmp24 = true === isApplicationPending;
  }
  if (eligibility != null) {
    canApply = eligibility.canApply;
  }
  const intl = tmp(1114).intl;
  const aJUdOi = tmp(1114).t.aJUdOi;
  const tmp9Result3 = refresh(2062);
  ({ faqUrl: null }.faqUrl) = tmp9Result3.getArticleURL(constants2.CREATOR_FAQ);
  const tmp26 = constants2;
  if (isApplicationRejected) {
    if (isMonetizationReapplicationDisabled) {
      let formatResult;
      if (true === hasItem) {
        const intl4 = tmp(1114).intl;
        const obj2 = { communityGuidelineUrl: constants3.GUIDELINES };
        formatResult = intl4.format(tmp(1114).t["0o1Q+t"], obj2);
      } else {
        const intl3 = tmp(1114).intl;
        const obj3 = { communityGuidelineUrl: constants3.GUIDELINES };
        formatResult = intl3.format(tmp(1114).t.b6h59n, obj3);
      }
      formatResult2 = formatResult;
    }
    dependencyMap = tmp33;
    if (isExpeditedOnboardingGuild) {
      isExpeditedOnboardingGuild = false === hasItem;
    }
    let formatResult1;
    const tmpResult4 = tmp(19868);
    const creatorMonetizationAcceptTermsCheckboxText = tmpResult4.getCreatorMonetizationAcceptTermsCheckboxText();
    if (isApplicationRejected) {
      if (true === canApply) {
        if (stateFromStores) {
          const intl5 = tmp(1114).intl;
          formatResult1 = intl5.format(tmp(1114).t.wbVIUB, {});
        }
      }
    }
    const items1 = [refresh, tmp33];
    const effect = react.useEffect(() => {
      const tmp = closure_2;
      if (tmp) {
        refresh();
      }
    }, items1);
    const obj4 = { resubmittingEnableRequest: loading, resubmissionError: error, isGuildOwner: stateFromStores, createEnableRequest, resubmittedRequest: submittedRequest, eligibilityLoading: loading2, eligibilityError: error2, refreshEligibility: refresh, eligibility, eligibleForMonetization: true === canApply, isApplicationPending: tmp24, hasPreviousApplicationRejection: isApplicationRejected, requestRejectedNoticeText: formatResult2, reapplyNoticeText: formatResult1, showAcceptTermsFlow: isExpeditedOnboardingGuild, wasRejectedInV1: isExpeditedOnboardingGuild, requirementsFinePrintText: tmp27, acceptTermsCheckboxText: creatorMonetizationAcceptTermsCheckboxText };
    if (isExpeditedOnboardingGuild) {
      if (!tmp19) {
        tmp19 = isApplicationRejected;
      }
      isExpeditedOnboardingGuild = tmp19;
    }
    return obj4;
  }
  const tmp28 = isApplicationRejected && null != requestCooldownDuration;
  if (tmp28) {
    const intl2 = tmp(1114).intl;
    const format = intl2.format;
    const obj5 = { requestCooldownDuration, creatorRevenuePolicyUrl: tmp9Result4.getArticleURL(tmp26.CREATOR_POLICY) };
    const TvX207 = tmp(1114).t.TvX207;
    tmp9Result4 = refresh(2062);
    formatResult2 = format(TvX207, obj5);
  }
};
