// Module ID: 8186
// Function ID: 64710
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8186 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = arg1(dependencyMap[8]).PremiumSubscriptionSKUToPremiumType;
const frozen = Object.freeze({});
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp4 = (importDefaultResult) => {
  class GiftCodeRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, GiftCodeRecord);
      obj = closure_6(GiftCodeRecord);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ userId: tmp6.userId, code: tmp6.code, skuId: tmp6.skuId, applicationId: tmp6.applicationId, uses: tmp6.uses, maxUses: tmp6.maxUses, expiresAt: tmp6.expiresAt, redeemed: tmp6.redeemed, storeListingId: tmp6.storeListingId, subscriptionPlanId: tmp6.subscriptionPlanId, subscriptionPlan: tmp6.subscriptionPlan, revoked: tmp6.revoked, entitlementBranches: tmp6.entitlementBranches, flags: tmp6.flags, subscriptionTrial: tmp6.subscriptionTrial, promotion: tmp6.promotion, giftStyle: tmp6.giftStyle } = importDefaultResult);
      return tmp2Result;
    }
  }
  const arg1 = GiftCodeRecord;
  callback2(GiftCodeRecord, importDefaultResult);
  let obj = {
    key: "isExpired",
    value() {
      const expiresAt = this.expiresAt;
      let isAfterResult = null != expiresAt;
      if (isAfterResult) {
        isAfterResult = callback(closure_2[9])().isAfter(expiresAt);
        const obj = callback(closure_2[9])();
      }
      return isAfterResult;
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "hasMultipleCopies",
    get() {
      return this.maxUses > 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "isClaimed",
    get() {
      return this.uses >= this.maxUses;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "remainingUses",
    get() {
      return this.maxUses - this.uses;
    }
  };
  items[4] = {
    key: "isSubscription",
    get() {
      return null != this.subscriptionPlanId;
    }
  };
  items[5] = {
    key: "premiumSubscriptionType",
    get() {
      let tmp2 = null;
      if (this.isSubscription) {
        tmp2 = null;
        if (null != closure_10[tmp.skuId]) {
          tmp2 = tmp4;
        }
      }
      return tmp2;
    }
  };
  items[6] = {
    key: "isSelfRedeemable",
    get() {
      return !GiftCodeRecord(closure_2[10]).hasFlag(this.flags, constants.NOT_SELF_REDEEMABLE);
    }
  };
  items[7] = {
    key: "isExistingPremiumSubscriptionDisallowed",
    get() {
      return GiftCodeRecord(closure_2[10]).hasFlag(this.flags, constants.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED);
    }
  };
  items[8] = {
    key: "analyticsData",
    get() {
      return { gift_code: this.code, gift_code_max_uses: this.maxUses };
    }
  };
  items[9] = {
    key: "toString",
    value() {
      return this.code;
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(user) {
        let tmp = GiftCodeRecord;
        let obj = {};
        let id = null;
        if (null != user.user) {
          id = user.user.id;
        }
        obj.userId = id;
        ({ code: obj.code, sku_id: obj.skuId, application_id: obj.applicationId, uses: obj.uses, max_uses: obj.maxUses } = user);
        let id1 = null;
        if (null != user.store_listing) {
          id1 = user.store_listing.id;
        }
        obj.storeListingId = id1;
        let tmp4 = null;
        if (null != user.expires_at) {
          tmp4 = callback(closure_2[9])(user.expires_at);
        }
        obj.expiresAt = tmp4;
        obj.redeemed = user.redeemed;
        if (null != user.subscription_plan) {
          let subscription_plan_id = user.subscription_plan.id;
        } else {
          subscription_plan_id = user.subscription_plan_id;
        }
        obj.subscriptionPlanId = subscription_plan_id;
        let fromServer = null;
        if (null != user.subscription_plan) {
          fromServer = closure_9.createFromServer(user.subscription_plan);
        }
        obj.subscriptionPlan = fromServer;
        obj.revoked = false;
        let entitlement_branches = null;
        if (null != user.entitlement_branches) {
          entitlement_branches = user.entitlement_branches;
        }
        obj.entitlementBranches = entitlement_branches;
        let num2 = 0;
        if (null != user.flags) {
          num2 = user.flags;
        }
        obj.flags = num2;
        obj.giftStyle = user.gift_style;
        let tmp10 = null;
        if (null != user.subscription_trial) {
          obj = { id: user.subscription_trial.id, interval: user.subscription_trial.interval, intervalCount: user.subscription_trial.interval_count, skuId: user.subscription_trial.sku_id };
          tmp10 = obj;
        }
        obj.subscriptionTrial = tmp10;
        let fromServer1 = null;
        if (null != user.promotion) {
          fromServer1 = closure_8.createFromServer(user.promotion);
        }
        obj.promotion = fromServer1;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(GiftCodeRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[11]).fileFinishedImporting("records/GiftCodeRecord.tsx");

export default tmp4;
export const GiftCodeFlags = frozen;
