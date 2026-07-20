// Module ID: 3781
// Function ID: 29431
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3781 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function createSubscriptionItemFromServer(id) {
  return { id: id.id, planId: id.plan_id, quantity: id.quantity };
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ PaymentGateways: closure_10, SubscriptionStatusTypes: closure_11, SubscriptionStatusTypesSets: closure_12, SubscriptionTypes: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ SubscriptionPauseReason: closure_14, SubscriptionPauseReasonSets: closure_15 } = arg1(dependencyMap[9]));
const tmp4 = arg1(dependencyMap[9]);
({ PREMIUM_PLANS: closure_16, SubscriptionPlanInfo: closure_17, SubscriptionPlans: closure_18 } = arg1(dependencyMap[10]));
const tmp6 = (importDefaultResult) => {
  class SubscriptionRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, SubscriptionRecord);
      obj = closure_6(SubscriptionRecord);
      tmp2 = closure_5;
      if (closure_19()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, type: tmp6.type, items: tmp6.items, createdAt: tmp6.createdAt, canceledAt: tmp6.canceledAt, currentPeriodStart: tmp6.currentPeriodStart, currentPeriodEnd: tmp6.currentPeriodEnd, status: tmp6.status, paymentSourceId: tmp6.paymentSourceId, paymentGateway: tmp6.paymentGateway, paymentGatewayPlanId: tmp6.paymentGatewayPlanId, paymentGatewaySubscriptionId: tmp6.paymentGatewaySubscriptionId, trialId: tmp6.trialId, trialEndsAt: tmp6.trialEndsAt, renewalMutations: tmp6.renewalMutations, currency: tmp6.currency, pauseEndsAt: tmp6.pauseEndsAt, pauseReason: tmp6.pauseReason, metadata: tmp6.metadata, latestInvoice: tmp6.latestInvoice, useStorekitResubscribe: tmp6.useStorekitResubscribe, price: tmp6.price, userId: tmp6.userId, streakStartedAt: tmp6.streakStartedAt, eligiblePaymentGateways: tmp6.eligiblePaymentGateways, priceChange: tmp6.priceChange } = importDefaultResult);
      renewalMutations = tmp2Result.renewalMutations;
      planId = importDefaultResult.items[0].planId;
      SubscriptionRecord = planId;
      planId = null;
      if (importDefaultResult.type === closure_13.PREMIUM) {
        tmp10 = closure_17;
        ({ interval, intervalCount } = closure_17[importDefaultResult.items[0].planId]);
        tmp11 = SubscriptionRecord;
        tmp12 = closure_2;
        num = 11;
        obj2 = SubscriptionRecord(closure_2[11]);
        basePlanIdForSubscriptionItems = obj2.getBasePlanIdForSubscriptionItems(importDefaultResult.items, interval, intervalCount);
        SubscriptionRecord = basePlanIdForSubscriptionItems;
        tmp8 = basePlanIdForSubscriptionItems;
        tmp9 = null;
        if (null != renewalMutations) {
          tmp14 = SubscriptionRecord;
          tmp15 = closure_2;
          obj3 = SubscriptionRecord(closure_2[11]);
          basePlanIdForSubscriptionItems1 = obj3.getBasePlanIdForSubscriptionItems(renewalMutations.items, interval, intervalCount);
          planId = basePlanIdForSubscriptionItems1;
          tmp8 = basePlanIdForSubscriptionItems;
          tmp9 = basePlanIdForSubscriptionItems1;
        }
      } else {
        tmp7 = null != renewalMutations && renewalMutations.items.length > 0;
        tmp8 = planId;
        tmp9 = null;
        if (tmp7) {
          planId2 = renewalMutations.items[0].planId;
          planId = planId2;
          tmp8 = planId;
          tmp9 = planId2;
        }
      }
      tmp2Result.planId = tmp8;
      items = importDefaultResult.items;
      tmp2Result.additionalPlans = items.filter((planId) => planId.planId !== basePlanIdForSubscriptionItems);
      tmp17 = null != renewalMutations && null != tmp9;
      if (tmp17) {
        renewalMutations.planId = tmp9;
        items1 = renewalMutations.items;
        renewalMutations.additionalPlans = items1.filter((planId) => planId.planId !== planId2);
      }
      return tmp2Result;
    }
  }
  const arg1 = SubscriptionRecord;
  callback2(SubscriptionRecord, importDefaultResult);
  let obj = {
    key: "getCurrentSubscriptionPlanIdForGroup",
    value(arg0) {
      const SubscriptionRecord = arg0;
      const items = this.items;
      const found = items.find((planId) => planId.includes(planId.planId));
      let planId;
      if (null != found) {
        planId = found.planId;
      }
      return planId;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isPremium",
    get() {
      return this.type === constants4.PREMIUM;
    }
  };
  items[1] = obj;
  obj = {
    key: "isACOM",
    get() {
      return this.paymentGateway === constants.APPLE_ADVANCED_COMMERCE;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "planIdForCurrencies",
    get() {
      const self = this;
      if (this.isPremium) {
        callback(closure_2[12])(self.planIdFromItems, "Premium subscription has no planId for currencies");
        let planId = self.planIdFromItems;
      } else {
        planId = self.planId;
      }
      return planId;
    }
  };
  items[4] = {
    key: "planIdFromItems",
    get() {
      return this.getCurrentSubscriptionPlanIdForGroup(Object.values(closure_18));
    }
  };
  items[5] = {
    key: "premiumPlanIdFromItems",
    get() {
      const items = [...closure_16];
      return this.getCurrentSubscriptionPlanIdForGroup(items);
    }
  };
  items[6] = {
    key: "isPurchasedViaDesktop",
    get() {
      return null == this.paymentGateway;
    }
  };
  items[7] = {
    key: "isPurchasedViaAppleGeneric",
    get() {
      return this.paymentGateway === constants.APPLE_PARTNER || this.isACOM;
    }
  };
  items[8] = {
    key: "isPurchasedViaApple",
    get() {
      return this.paymentGateway === constants.APPLE || this.isACOM;
    }
  };
  items[9] = {
    key: "isPurchasedViaGoogle",
    get() {
      return this.paymentGateway === constants.GOOGLE;
    }
  };
  items[10] = {
    key: "isPurchasedExternally",
    get() {
      return this.isPurchasedViaApple || this.isPurchasedViaGoogle;
    }
  };
  items[11] = {
    key: "isOnPlatformMatchingExternalPaymentGateway",
    get() {
      let isPurchasedViaApple = this.isPurchasedViaApple;
      if (isPurchasedViaApple) {
        isPurchasedViaApple = SubscriptionRecord(closure_2[13]).isIOS();
        const obj = SubscriptionRecord(closure_2[13]);
      }
      if (!isPurchasedViaApple) {
        let isPurchasedViaGoogle = this.isPurchasedViaGoogle;
        if (isPurchasedViaGoogle) {
          isPurchasedViaGoogle = SubscriptionRecord(closure_2[14]).isGooglePlayBillingSupported();
          const obj2 = SubscriptionRecord(closure_2[14]);
        }
        isPurchasedViaApple = isPurchasedViaGoogle;
      }
      return isPurchasedViaApple;
    }
  };
  items[12] = {
    key: "hasExternalPlanChange",
    get() {
      const self = this;
      let isPurchasedExternally = this.isPurchasedExternally;
      if (isPurchasedExternally) {
        isPurchasedExternally = null != self.renewalMutations;
      }
      if (isPurchasedExternally) {
        isPurchasedExternally = self.paymentGatewayPlanId !== self.renewalMutations.paymentGatewayPlanId;
      }
      return isPurchasedExternally;
    }
  };
  items[13] = {
    key: "hasPremiumNitroMonthly",
    get() {
      const items = this.items;
      return null != items.find((planId) => planId.planId === PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
    }
  };
  items[14] = {
    key: "isBoostOnly",
    get() {
      const items = this.items;
      return items.every((planId) => {
        const items = [, ];
        ({ PREMIUM_MONTH_GUILD: arr[0], PREMIUM_YEAR_GUILD: arr[1] } = closure_18);
        return items.includes(planId.planId);
      });
    }
  };
  items[15] = {
    key: "isPausedOrPausePending",
    get() {
      const ALL_PAUSE = constants3.ALL_PAUSE;
      return ALL_PAUSE.has(this.status);
    }
  };
  items[16] = {
    key: "isPaused",
    get() {
      return this.status === constants2.PAUSED;
    }
  };
  items[17] = {
    key: "isPausedForFractionalPremium",
    get() {
      let tmp = this.status === constants2.PAUSED;
      if (tmp) {
        tmp = this.pauseReason === constants5.FRACTIONAL_PREMIUM;
      }
      return tmp;
    }
  };
  items[18] = {
    key: "isPausedAllowsUpdatesButNotResume",
    get() {
      let hasItem = this.status === constants2.PAUSED;
      if (hasItem) {
        const CAN_MAKE_SUBSCRIPTION_UPDATES = constants6.CAN_MAKE_SUBSCRIPTION_UPDATES;
        hasItem = CAN_MAKE_SUBSCRIPTION_UPDATES.has(tmp.pauseReason);
      }
      return hasItem;
    }
  };
  items[19] = {
    key: "isPausedAllowsResumeButNotUpdates",
    get() {
      const self = this;
      let tmp = this.status === constants2.PAUSED;
      if (tmp) {
        let tmp3 = null === self.pauseReason;
        if (!tmp3) {
          const CAN_MAKE_SUBSCRIPTION_UPDATES = constants6.CAN_MAKE_SUBSCRIPTION_UPDATES;
          tmp3 = !CAN_MAKE_SUBSCRIPTION_UPDATES.has(self.pauseReason);
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[20] = {
    key: "isEnded",
    get() {
      return this.status === constants2.ENDED;
    }
  };
  items[21] = {
    key: "endedAt",
    get() {
      let self = this;
      if (this.status !== constants2.ENDED) {
        return null;
      } else {
        const metadata = self.metadata;
        let ended_at;
        if (null != metadata) {
          ended_at = metadata.ended_at;
        }
        if (null != ended_at) {
          const _Date = Date;
          self = new Date(self.metadata.ended_at);
          let currentPeriodEnd = self;
        } else {
          currentPeriodEnd = self.currentPeriodEnd;
        }
      }
    }
  };
  items[22] = {
    key: "isActive",
    get() {
      return this.status === constants2.ACTIVE;
    }
  };
  items[23] = {
    key: "statusAllowsPerks",
    get() {
      const ALLOW_PERKS = constants3.ALLOW_PERKS;
      return ALLOW_PERKS.has(this.status);
    }
  };
  items[24] = {
    key: "hasActiveTrial",
    get() {
      const self = this;
      let tmp = null != this.trialId && null != self.trialEndsAt;
      if (tmp) {
        const _Date = Date;
        const date = new Date();
        tmp = date < self.trialEndsAt;
      }
      return tmp;
    }
  };
  items[25] = {
    key: "hasActiveDiscount",
    get() {
      const self = this;
      if (null == this.metadata) {
        return false;
      } else {
        const active_discount_expires_at = self.metadata.active_discount_expires_at;
        let tmp = null != self.metadata.active_discount_id && null != active_discount_expires_at;
        if (tmp) {
          const _Date = Date;
          const date = new Date();
          const _Date2 = Date;
          const date1 = new Date(active_discount_expires_at);
          tmp = date <= date1;
        }
        return tmp;
      }
    }
  };
  items[26] = {
    key: "premiumSince",
    get() {
      let createdAt = this.streakStartedAt;
      if (null == createdAt) {
        createdAt = this.createdAt;
      }
      return createdAt;
    }
  };
  items[27] = {
    key: "hasAnyPremiumNitro",
    get() {
      const items = this.items;
      return items.some((planId) => set.has(planId.planId));
    }
  };
  items[28] = {
    key: "hasAnyPremiumGroup",
    get() {
      const items = this.items;
      return items.some((planId) => planId.planId === constants.PREMIUM_GROUP_MONTH);
    }
  };
  items[29] = {
    key: "hasPremiumAtLeast",
    value(arg0) {
      const SubscriptionRecord = arg0;
      const tmp = !this.isPremium;
      let someResult = !tmp;
      if (!tmp) {
        const items = this.items;
        someResult = items.some((arg0) => arg0(closure_2[15]).isPremiumAtLeast(closure_17[arg0.planId].premiumType, arg0));
      }
      return someResult;
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = SubscriptionRecord;
        let obj = { id: id.id, type: id.type, createdAt: new Date(id.created_at) };
        let date1 = null;
        if (null != id.canceled_at) {
          const _Date = Date;
          date1 = new Date(id.canceled_at);
        }
        obj.canceledAt = date1;
        const date = new Date(id.created_at);
        obj.currentPeriodStart = new Date(id.current_period_start);
        const date2 = new Date(id.current_period_start);
        obj.currentPeriodEnd = new Date(id.current_period_end);
        ({ status: obj.status, payment_source_id: obj.paymentSourceId, payment_gateway: obj.paymentGateway, payment_gateway_plan_id: obj.paymentGatewayPlanId, payment_gateway_subscription_id: obj.paymentGatewaySubscriptionId, trial_id: obj.trialId } = id);
        let date4 = null;
        if (null != id.trial_ends_at) {
          const _Date2 = Date;
          date4 = new Date(id.trial_ends_at);
        }
        obj.trialEndsAt = date4;
        const items = id.items;
        obj.items = items.map(closure_20);
        let tmp11 = null;
        if (null != id.renewal_mutations) {
          obj = {};
          const items1 = id.renewal_mutations.items;
          obj.items = items1.map(closure_20);
          obj.paymentGatewayPlanId = id.renewal_mutations.payment_gateway_plan_id;
          tmp11 = obj;
        }
        obj.renewalMutations = tmp11;
        let date5 = null;
        if (null != id.streak_started_at) {
          const _Date3 = Date;
          date5 = new Date(id.streak_started_at);
        }
        obj.streakStartedAt = date5;
        obj.currency = id.currency;
        let date6 = null;
        if (null != id.pause_ends_at) {
          const _Date4 = Date;
          date6 = new Date(id.pause_ends_at);
        }
        obj.pauseEndsAt = date6;
        ({ pause_reason: obj.pauseReason, metadata: obj.metadata, use_storekit_resubscribe: obj.useStorekitResubscribe, price: obj.price, user_id: obj.userId } = id);
        if (null != id.latest_invoice) {
          obj = { latestInvoice: closure_9.createInvoiceFromServer(id.latest_invoice) };
          let obj1 = obj;
        } else {
          obj1 = {};
        }
        const merged = Object.assign(obj1);
        const eligible_payment_gateways = id.eligible_payment_gateways;
        let tmp21 = null;
        if (null != eligible_payment_gateways) {
          tmp21 = eligible_payment_gateways;
        }
        obj["eligiblePaymentGateways"] = tmp21;
        let fromServer = null;
        if (null != id.price_change) {
          fromServer = closure_8.createFromServer(id.price_change);
        }
        obj["priceChange"] = fromServer;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(SubscriptionRecord, items, items1);
}(importDefaultResult);
const tmp5 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("records/SubscriptionRecord.tsx");

export default tmp6;
export const SubscriptionRecord = tmp6;
