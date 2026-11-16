// Module ID: 11665
// Function ID: 11666
// Name: GiftCodeRecord
// Dependencies: [1408, 9296, 9624, 2171, 1390, 2169, 1406, 2]

// Module 11665 (GiftCodeRecord)
import PremiumConstants from "PremiumConstants" /* 1390 */;
import _modDef2169 from "module_2169" /* 2169 */;
import Record from "Record" /* 1408 */;
import SubscriptionTrialRecord from "SubscriptionTrialRecord" /* 9296 */;
import PromotionRecord from "PromotionRecord" /* 9624 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 2171 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_6 = PremiumConstants.PremiumSubscriptionSKUToPremiumType;
const frozen = Object.freeze({ PAYMENT_SOURCE_REQUIRED: 1, EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2, NOT_SELF_REDEEMABLE: 4 });
class GiftCodeRecord extends Record {
  constructor(arg0) {
    const tmp = new GiftCodeRecord(new.target, this);
    ({ userId: tmp.userId, code: tmp.code, skuId: tmp.skuId, applicationId: tmp.applicationId, uses: tmp.uses, maxUses: tmp.maxUses, expiresAt: tmp.expiresAt, redeemed: tmp.redeemed, storeListingId: tmp.storeListingId, subscriptionPlanId: tmp.subscriptionPlanId, subscriptionPlan: tmp.subscriptionPlan, revoked: tmp.revoked, entitlementBranches: tmp.entitlementBranches, flags: tmp.flags, subscriptionTrial: tmp.subscriptionTrial, promotion: tmp.promotion, giftStyle: tmp.giftStyle, giftSubscriptionAgreement: tmp.giftSubscriptionAgreement } = arg0);
    return tmp;
  }
  static createFromServer(user) {
    let application_id;
    let code;
    let max_uses;
    let sku_id;
    let subscription_plan_id;
    let tmp12;
    let uses;
    let id = null;
    if (null != user.user) {
      id = user.user.id;
    }
    ({ code, sku_id, application_id, uses, max_uses } = user);
    let id1 = null;
    if (null != user.store_listing) {
      id1 = user.store_listing.id;
    }
    let tmp5 = null;
    if (null != user.expires_at) {
      tmp5 = _modDef2169(user.expires_at);
    }
    const redeemed = user.redeemed;
    if (null != user.subscription_plan) {
      subscription_plan_id = user.subscription_plan.id;
    } else {
      subscription_plan_id = user.subscription_plan_id;
    }
    let fromServer = null;
    if (null != user.subscription_plan) {
      fromServer = SubscriptionPlanRecord.createFromServer(user.subscription_plan);
    }
    let entitlement_branches = null;
    if (null != user.entitlement_branches) {
      entitlement_branches = user.entitlement_branches;
    }
    let num = 0;
    if (null != user.flags) {
      num = user.flags;
    }
    let fromServer1 = null;
    const gift_style = user.gift_style;
    if (null != user.subscription_trial) {
      tmp12 = SubscriptionTrialRecord;
      fromServer1 = SubscriptionTrialRecord.createFromServer(user.subscription_trial);
    }
    let fromServer2 = null;
    if (null != user.promotion) {
      tmp12 = PromotionRecord;
      fromServer2 = PromotionRecord.createFromServer(user.promotion);
    }
    if (typeof GiftCodeRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp17 = new GiftCodeRecord(tmp, tmp12, tmp13, GiftCodeRecord, this, id, code, sku_id, application_id, uses, max_uses, tmp5, redeemed, id1, subscription_plan_id, fromServer, entitlement_branches, num, fromServer1);
      tmp17.userId = id;
      tmp17.code = code;
      tmp17.skuId = sku_id;
      tmp17.applicationId = application_id;
      tmp17.uses = uses;
      tmp17.maxUses = max_uses;
      tmp17.expiresAt = tmp5;
      tmp17.redeemed = redeemed;
      tmp17.storeListingId = id1;
      tmp17.subscriptionPlanId = subscription_plan_id;
      tmp17.subscriptionPlan = fromServer;
      tmp17.revoked = false;
      tmp17.entitlementBranches = entitlement_branches;
      tmp17.flags = num;
      tmp17.subscriptionTrial = fromServer1;
      tmp17.promotion = fromServer2;
      tmp17.giftStyle = gift_style;
      tmp17.giftSubscriptionAgreement = tmp15;
      return tmp17;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isExpired() {
    const expiresAt = this.expiresAt;
    let isAfterResult = null != expiresAt;
    if (isAfterResult) {
      const obj = _modDef2169();
      isAfterResult = obj.isAfter(expiresAt);
    }
    return isAfterResult;
  }
  toString() {
    return this.code;
  }
}
const prototype = GiftCodeRecord.prototype;
Object.defineProperty(prototype, "hasMultipleCopies", {
  get: function hasMultipleCopies() {
    return this.maxUses > 1;
  },
  set: undefined
});
Object.defineProperty(prototype, "isClaimed", {
  get: function isClaimed() {
    return this.uses >= this.maxUses;
  },
  set: undefined
});
Object.defineProperty(prototype, "remainingUses", {
  get: function remainingUses() {
    return this.maxUses - this.uses;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSubscription", {
  get: function isSubscription() {
    return null != this.subscriptionPlanId;
  },
  set: undefined
});
Object.defineProperty(prototype, "premiumSubscriptionType", {
  get: function premiumSubscriptionType() {
    let tmp2 = null;
    if (this.isSubscription) {
      let tmp4 = closure_6[tmp.skuId];
      if (tmp4 == null) {
        tmp4 = null;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSelfRedeemable", {
  get: function isSelfRedeemable() {
    const obj = require("FlagUtils");
    return !obj.hasFlag(this.flags, frozen.NOT_SELF_REDEEMABLE);
  },
  set: undefined
});
Object.defineProperty(prototype, "isExistingPremiumSubscriptionDisallowed", {
  get: function isExistingPremiumSubscriptionDisallowed() {
    const obj = require("FlagUtils");
    return obj.hasFlag(this.flags, frozen.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsData", {
  get: function analyticsData() {
    return { gift_code: this.code, gift_code_max_uses: this.maxUses };
  },
  set: undefined
});
const result = size.fileFinishedImporting("records/GiftCodeRecord.tsx");

export default GiftCodeRecord;
export const GiftCodeFlags = frozen;
