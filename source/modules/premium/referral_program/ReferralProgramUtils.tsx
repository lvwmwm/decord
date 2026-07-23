// Module ID: 7742
// Function ID: 61520
// Name: isReferralProgramPopoverSeen
// Dependencies: [6689, 1345, 664, 1212, 3946, 1334, 21, 1336, 7423, 566, 7743, 2]
// Exports: getReferralTrialOfferExpirationCopy, isReferralProgramBadgeAcknowledged, markReferralProgramBadgeAcknowledged, markReferralProgramEntrypointBadgeAcknowledged, markReferralProgramPopoverSeen, useIsReferralProgramBadgeShowable, useIsReferralProgramEntrypointBadgeAcknowledged, useIsReferralProgramPopoverShowable

// Module 7742 (isReferralProgramPopoverSeen)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
function isReferralProgramPopoverSeen() {
  return require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
}
let result = require("set").fileFinishedImporting("modules/premium/referral_program/ReferralProgramUtils.tsx");

export const getReferralTrialOfferExpirationCopy = function getReferralTrialOfferExpirationCopy(arg0) {
  const diff = arg0 - Date.now();
  const result = diff / importDefault(664).Millis.HOUR;
  if (result > 24) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const _Math3 = Math;
    obj.numDays = Math.floor(result / 24);
    let formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["g9s+dA"], obj);
  } else if (result >= 1) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math2 = Math;
    obj.numHours = Math.floor(result);
    formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.k9v33y, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    obj.numMinutes = Math.floor(60 * result);
    formatToPlainStringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["/d0GmT"], obj);
  }
  return formatToPlainStringResult;
};
export const useIsReferralProgramEntrypointBadgeAcknowledged = function useIsReferralProgramEntrypointBadgeAcknowledged() {
  return require(3946) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const markReferralProgramEntrypointBadgeAcknowledged = function markReferralProgramEntrypointBadgeAcknowledged() {
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_TAB_BADGE);
};
export const isReferralProgramBadgeAcknowledged = function isReferralProgramBadgeAcknowledged() {
  return require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const markReferralProgramBadgeAcknowledged = function markReferralProgramBadgeAcknowledged() {
  const result = require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
};
export const useIsReferralProgramBadgeShowable = function useIsReferralProgramBadgeShowable(trialOffer) {
  trialOffer = trialOffer.trialOffer;
  if (null == trialOffer) {
    return false;
  } else {
    let tmp = undefined !== trialOffer.referrer_id;
    const _Date = Date;
    const date = new Date(importDefault(21).extractTimestamp(trialOffer.id));
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
export const markReferralProgramPopoverSeen = function markReferralProgramPopoverSeen(closure_0) {
  if (null != closure_0) {
    let obj = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
    const result = require(1336) /* addVersionedDismissedContent */.markSnowflakeBoundDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, closure_0, obj);
    const obj2 = require(1336) /* addVersionedDismissedContent */;
  } else {
    obj = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
    const result1 = obj.UNSAFE_markDismissibleContentAsDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER);
  }
};
export { isReferralProgramPopoverSeen };
export const useIsReferralProgramPopoverShowable = function useIsReferralProgramPopoverShowable() {
  let isEligibleSenderForReferralProgram = require(7423) /* useIsEligibleSenderForReferralProgram */.useIsEligibleSenderForReferralProgram(false);
  const obj = require(7423) /* useIsEligibleSenderForReferralProgram */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getReferralsRemaining());
  const obj2 = require(566) /* initialize */;
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = require(566) /* initialize */.useStateFromStores(items1, () => outer1_3.getReminderStateId());
  const obj3 = require(566) /* initialize */;
  if (obj4.useIsReferralReminderDCExperimentEnabled({ location: "ReferralProgramUtils" })) {
    let tmp7 = null != stateFromStores1;
    if (tmp7) {
      tmp7 = !require(3946) /* UNSAFE_isDismissibleContentDismissed */.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(require(1334) /* DismissibleContent */.DismissibleContent.REFERRAL_PROGRAM_POPOVER_V2, stateFromStores1).isDismissed;
      const obj5 = require(3946) /* UNSAFE_isDismissibleContentDismissed */;
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
