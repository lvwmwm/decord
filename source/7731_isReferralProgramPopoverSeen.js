// Module ID: 7731
// Function ID: 61449
// Name: isReferralProgramPopoverSeen
// Dependencies: []
// Exports: getReferralTrialOfferExpirationCopy, isReferralProgramBadgeAcknowledged, markReferralProgramBadgeAcknowledged, markReferralProgramEntrypointBadgeAcknowledged, markReferralProgramPopoverSeen, useIsReferralProgramBadgeShowable, useIsReferralProgramEntrypointBadgeAcknowledged, useIsReferralProgramPopoverShowable

// Module 7731 (isReferralProgramPopoverSeen)
function isReferralProgramPopoverSeen() {
  return arg1(dependencyMap[4]).UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_POPOVER);
}
let closure_3 = importDefault(dependencyMap[0]);
const ContentDismissActionType = arg1(dependencyMap[1]).ContentDismissActionType;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(arg0) {
  const diff = arg0 - Date.now();
  const result = diff / importDefault(dependencyMap[2]).Millis.HOUR;
  if (result > 24) {
    const intl3 = arg1(dependencyMap[3]).intl;
    let obj = {};
    const _Math3 = Math;
    obj.numDays = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[3]).t.g9s+dA, obj);
  } else if (result >= 1) {
    const intl2 = arg1(dependencyMap[3]).intl;
    obj = {};
    const _Math2 = Math;
    obj.numHours = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[3]).t.k9v33y, obj);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    obj = {};
    const _Math = Math;
    obj.numMinutes = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[3]).t./d0GmT, obj);
  }
  return formatToPlainStringResult;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return arg1(dependencyMap[4]).useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const result = arg1(dependencyMap[4]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  return arg1(dependencyMap[4]).UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const result = arg1(dependencyMap[4]).UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let tmp = undefined !== trialOffer.referrer_id;
    const _Date = Date;
    const date = new Date(importDefault(dependencyMap[6]).extractTimestamp(trialOffer.id));
    const _Date2 = Date;
    const date1 = new Date();
    if (tmp) {
      tmp = tmp2;
    }
    if (tmp) {
      tmp = date1 >= date;
    }
    return tmp;
  }
};
export const markReferralProgramPopoverSeen = function markReferralProgramPopoverSeen(promotionId) {
  if (null != promotionId) {
    let obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const result = arg1(dependencyMap[7]).markSnowflakeBoundDismissibleContentAsDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj);
    const obj2 = arg1(dependencyMap[7]);
  } else {
    obj = arg1(dependencyMap[4]);
    const result1 = obj.UNSAFE_markDismissibleContentAsDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
};
export { isReferralProgramPopoverSeen };
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = arg1(dependencyMap[8]).useIsEligibleSenderForReferralProgram(false);
  const obj = arg1(dependencyMap[8]);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[9]).useStateFromStores(items, () => store.getReferralsRemaining());
  const obj2 = arg1(dependencyMap[9]);
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[9]).useStateFromStores(items1, () => store.getReminderStateId());
  const obj3 = arg1(dependencyMap[9]);
  if (obj4.useIsReferralReminderDCExperimentEnabled({ location: "ReferralProgramUtils" })) {
    let tmp7 = null != stateFromStores1;
    if (tmp7) {
      tmp7 = !arg1(dependencyMap[4]).UNSAFE_isSnowflakeBoundDismissibleContentDismissed(arg1(dependencyMap[5]).DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, stateFromStores1).isDismissed;
      const obj5 = arg1(dependencyMap[4]);
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = !isReferralProgramPopoverSeen();
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = tmp5;
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = null != stateFromStores;
  }
  if (isEligibleSenderForReferralProgram) {
    isEligibleSenderForReferralProgram = stateFromStores > 0;
  }
  return isEligibleSenderForReferralProgram;
};
