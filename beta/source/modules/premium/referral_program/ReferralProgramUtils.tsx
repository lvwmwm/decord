// Module ID: 7499
// Function ID: 7500
// Name: ReferralProgramUtils
// Dependencies: [1220, 6872, 2042, 1091, 1115, 4654, 2029, 11, 2031, 7500, 504, 2]
// Exports: getReferralTrialOfferExpirationCopy, isReferralProgramBadgeAcknowledged, markReferralIncentivePopoverSeen, markReferralProgramBadgeAcknowledged, markReferralProgramEntrypointBadgeAcknowledged, markReferralProgramPopoverSeen, useIsReferralProgramBadgeShowable, useIsReferralProgramEntrypointBadgeAcknowledged, useIsReferralProgramPopoverShowable

// Module 7499 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1091 */;
import intl4 from "intl" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6872 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(time) {
  let formatToPlainString3Result;
  const diff = time - Date.now();
  const result = diff / DurationsDefault.Millis.HOUR;
  if (result > 24) {
    const intl3 = intl4.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const _Math3 = Math;
    const obj2 = { numDays: Math.floor(result / 24) };
    const prop = intl4.t["g9s+dA"];
    formatToPlainString3Result = formatToPlainString3(prop, obj2);
  } else if (result >= 1) {
    const intl2 = intl4.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const _Math2 = Math;
    const obj3 = { numHours: Math.floor(result) };
    const k9v33y = intl4.t.k9v33y;
    formatToPlainString3Result = formatToPlainString2(k9v33y, obj3);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const _Math = Math;
    const obj = { numMinutes: Math.floor(60 * result) };
    const prop1 = intl4.t["/d0GmT"];
    formatToPlainString3Result = formatToPlainString(prop1, obj);
  }
  return formatToPlainString3Result;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  return obj.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  return obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let isReferralTrial = trialOffer.isReferralTrial;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const tmp = !trialOffer.isRedeemed;
    const obj = SnowflakeUtilsDefault;
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date(obj.extractTimestamp(trialOffer.id));
    const date1 = new Date();
    if (isReferralTrial) {
      isReferralTrial = tmp;
    }
    if (isReferralTrial) {
      isReferralTrial = date1 >= date;
    }
    return isReferralTrial;
  }
};
export const markReferralProgramPopoverSeen = function markReferralProgramPopoverSeen(promotionId) {
  if (null != promotionId) {
    const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const obj = DismissibleContentUtils;
    const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj2);
  }
};
export const markReferralIncentivePopoverSeen = function markReferralIncentivePopoverSeen() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
};
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let stateFromStores1;
  let obj = stateFromStores1(7500);
  let isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram(false);
  const items = [ReferralTrialStore];
  const obj2 = stateFromStores1(504);
  const stateFromStores = obj2.useStateFromStores(items, () => ReferralTrialStore.getReferralsRemaining());
  const items1 = [ReferralTrialStore];
  const obj3 = stateFromStores1(504);
  stateFromStores1 = obj3.useStateFromStores(items1, () => ReferralTrialStore.getReminderStateId());
  const items2 = [UserSettingsProtoStore];
  let tmp4 = null != stateFromStores1;
  const obj4 = stateFromStores1(504);
  if (tmp4) {
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = !obj4.useStateFromStores(items2, () => {
        let isDismissed = null != stateFromStores1;
        if (isDismissed) {
          const obj = DismissibleContentUnsafeUtils;
          isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, tmp).isDismissed;
        }
        return isDismissed;
      });
    }
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = null != stateFromStores;
    }
    if (isEligibleSenderForReferralProgram) {
      isEligibleSenderForReferralProgram = stateFromStores > 0;
    }
    tmp4 = isEligibleSenderForReferralProgram;
  }
  return tmp4;
};
