// Module ID: 9989
// Function ID: 9990
// Name: ThirdPartyPerkUtils
// Dependencies: [1390, 1072, 9627, 2174, 1113, 9626, 9990, 5328, 2]
// Exports: formatThirdPartyPromotionEndDateForPerkCard, getMarketingComponentAsset, getPartnerMarketingComponentAssetUrl, getThirdPartyPerkClaimState, isUserEligibleForThirdPartyPerks

// Module 9989 (ThirdPartyPerkUtils)
import Constants from "Constants" /* 1072 */;
import intl from "intl" /* 1113 */;
import PremiumUtils from "PremiumUtils" /* 2174 */;
import themes from "themes" /* 5328 */;
import MarketingSurfaceTypeUtils from "MarketingSurfaceTypeUtils" /* 9626 */;
import MarketingSurfaceType from "MarketingSurfaceType" /* 9627 */;
import getPartnerMarketingComponentDefault from "getPartnerMarketingComponent" /* 9990 */;
import PremiumConstants from "PremiumConstants" /* 1390 */;
import size from "module_2" /* 2 */;

let PREMIUM_TIER_2_AUTH3_TRIAL_ID;
let PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID;
let PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID;
let PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID;
let PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID;
let PREMIUM_TIER_2_REACTIVATION_TRIAL_ID;
let PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
let PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
let c3;
let closure_4;
({ PremiumTypes: c3, SubscriptionPlanInfo: closure_4, PREMIUM_TIER_2_AUTH3_TRIAL_ID, PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID, PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_REFERRAL_TRIAL_ID, PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID } = PremiumConstants);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
const items = [MarketingSurfaceType.MarketingSurfaceType.PREMIUM_HOME_REWARDS_PERK_CARD, MarketingSurfaceType.MarketingSurfaceType.MARKETING_PAGE_REWARDS_BENTO_BOX, MarketingSurfaceType.MarketingSurfaceType.OUTBOUND_PROMOTION_POPOVER, MarketingSurfaceType.MarketingSurfaceType.OUTBOUND_PROMOTION_CLAIM_MODAL_CARD];
const items1 = [PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID, PREMIUM_TIER_2_REFERRAL_TRIAL_ID, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID, PREMIUM_TIER_2_HFU_ONE_WEEK_TRIAL_ID, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID, PREMIUM_TIER_2_HFU_ONE_MONTH_TRIAL_ID, PREMIUM_TIER_2_AUTH3_TRIAL_ID, PREMIUM_TIER_2_GOOGLE_PLAY_SIX_MONTH_TRIAL_ID, PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID];
const set = new Set(items1);
const ThirdPartyPerkIneligibilityReason = { NO_SUBSCRIPTION: "no_subscription", NOT_TIER_2_SUBSCRIPTION: "not_tier_2_subscription", SUBSCRIPTION_STATUS_NOT_ALLOWED: "subscription_status_not_allowed", TRIAL_USER_NOT_ELIGIBLE: "trial_user_not_eligible" };
let obj2 = { CAN_CLAIM: "CAN_CLAIM", BLOCK_CLAIM: "BLOCKED", UPSELL: "UPSELL" };
const result = size.fileFinishedImporting("modules/premium/partner_perks/ThirdPartyPerkUtils.tsx");

export const THIRD_PARTY_PERKS_ELIGIBLE_TRIAL_IDS = set;
export { ThirdPartyPerkIneligibilityReason };
export function isUserEligibleForThirdPartyPerks(stateFromStores, stateFromStores1) {
  let obj;
  if (null == stateFromStores1) {
    let isPremiumGroupMemberResult;
    if (stateFromStores != null) {
      isPremiumGroupMemberResult = stateFromStores.isPremiumGroupMember();
    }
    if (true === isPremiumGroupMemberResult) {
      obj2 = { isEligible: true, reason: null };
    } else {
      obj2 = { isEligible: false, reason: obj.NO_SUBSCRIPTION };
    }
    return obj2;
  } else {
    const obj5 = PremiumUtils;
    const premiumPlanItem = obj5.getPremiumPlanItem(stateFromStores1);
    if (null != premiumPlanItem) {
      let premiumType;
      if (React3[premiumPlanItem.planId] != null) {
        premiumType = tmp17.premiumType;
      }
      if (premiumType === TIER_2.TIER_2) {
        let obj3;
        let tmp4 = stateFromStores1.status === SubscriptionStatusTypes.PAUSED;
        if (tmp4) {
          let isFractionalPremiumResult;
          if (stateFromStores != null) {
            isFractionalPremiumResult = stateFromStores.isFractionalPremium();
          }
          tmp4 = true === isFractionalPremiumResult;
        }
        if (!stateFromStores1.statusAllowsPerks) {
          if (!tmp4) {
            obj = { isEligible: false, reason: obj.SUBSCRIPTION_STATUS_NOT_ALLOWED };
          }
          return obj;
        }
        const hasItem = null == stateFromStores1.trialId || !stateFromStores1.hasActiveTrial || set.has(stateFromStores1.trialId);
        if (hasItem) {
          obj3 = { isEligible: true, reason: null };
        } else {
          obj3 = { isEligible: false, reason: obj.TRIAL_USER_NOT_ELIGIBLE };
        }
        obj = obj3;
      }
    }
    return { isEligible: false, reason: obj.NOT_TIER_2_SUBSCRIPTION };
  }
}
export const ThirdPartyPerkClaimState = obj2;
export function getThirdPartyPerkClaimState(reason) {
  if (null === reason) {
    return obj2.CAN_CLAIM;
  } else {
    if (obj.NO_SUBSCRIPTION !== reason) {
      if (obj.NOT_TIER_2_SUBSCRIPTION !== reason) {
        if (obj.SUBSCRIPTION_STATUS_NOT_ALLOWED !== reason) {
          if (obj.TRIAL_USER_NOT_ELIGIBLE === reason) {
            return obj2.BLOCK_CLAIM;
          }
        }
      }
    }
    return obj2.UPSELL;
  }
}
export function formatThirdPartyPromotionEndDateForPerkCard(arg0) {
  if (null != arg0) {
    const _Intl = Intl;
    const self = this;
    const self2 = this;
    const dateTimeFormat = new Intl.DateTimeFormat(intl.intl.currentLocale, { day: "numeric", month: "short", timeZone: "UTC" });
    return dateTimeFormat.format(arg0);
  }
}
export function getMarketingComponentAsset(surface) {
  const obj = MarketingSurfaceTypeUtils;
  if (obj.isMarketingSurface(surface, items)) {
    return surface.surface.asset;
  }
}
export function getPartnerMarketingComponentAssetUrl(arg0, arg1, arg2) {
  const tmp2 = getPartnerMarketingComponentDefault(arg0, arg1);
  let tmp3;
  if (null != tmp2) {
    let asset;
    const obj = MarketingSurfaceTypeUtils;
    if (obj.isMarketingSurface(tmp2, items)) {
      asset = tmp2.surface.asset;
    }
    tmp3 = asset;
  }
  if (null != tmp3) {
    obj2 = themes;
    return obj2.isThemeDark(arg2) ? tmp3.darkUrl : tmp3.lightUrl;
  }
}
