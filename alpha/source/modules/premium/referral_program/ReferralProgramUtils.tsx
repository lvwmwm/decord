// Module ID: 8523
// Function ID: 8524
// Name: ReferralProgramUtils
// Dependencies: [1231, 7632, 4860, 1089, 1113, 5044, 4847, 11, 4848, 8524, 504, 2]
// Exports: getReferralTrialOfferExpirationCopy, isReferralProgramBadgeAcknowledged, markReferralIncentivePopoverSeen, markReferralProgramBadgeAcknowledged, markReferralProgramEntrypointBadgeAcknowledged, markReferralProgramPopoverSeen, useIsReferralProgramBadgeShowable, useIsReferralProgramEntrypointBadgeAcknowledged, useIsReferralProgramPopoverShowable

// Module 8523 (ReferralProgramUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DurationsDefault from "Durations" /* 1089 */;
import intl4 from "intl" /* 1113 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4848 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7632 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export function getReferralTrialOfferExpirationCopy(time) {
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
}
export function useIsReferralProgramEntrypointBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  return obj.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
}
export function markReferralProgramEntrypointBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
}
export function isReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  return obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
export function markReferralProgramBadgeAcknowledged() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
}
export function useIsReferralProgramBadgeShowable(trialOffer) {
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
}
export function markReferralProgramPopoverSeen(promotionId) {
  if (null != promotionId) {
    const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const obj = DismissibleContentUtils;
    const result = obj.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, promotionId, obj2);
  }
}
export function markReferralIncentivePopoverSeen() {
  const obj = DismissibleContentUnsafeUtils;
  const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
}
export function useIsReferralProgramPopoverShowable() {
  let stateFromStores1;
  let obj = stateFromStores1(8524);
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
}
