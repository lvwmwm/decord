// Module ID: 7107
// Function ID: 57121
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7107 (_isNativeReflectConstruct)
let DiscountUserUsageLimitIntervalTypes;
let SubscriptionIntervalTypes;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = arg1(dependencyMap[6]));
let closure_5 = { [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH, [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR };
const tmp3 = arg1(dependencyMap[6]);
const tmp4 = (importDefaultResult) => {
  class UserDiscountOfferRecord {
    constructor(arg0) {
      self = this;
      tmp = UserDiscountOfferRecord(this, UserDiscountOfferRecord);
      obj = closure_3(UserDiscountOfferRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, discountId: tmp6.discountId, discount: tmp6.discount, userId: tmp6.userId, appliedAt } = importDefaultResult);
      tmp7 = null;
      if (null != appliedAt) {
        tmp7 = appliedAt;
      }
      tmp2Result.appliedAt = tmp7;
      deletedAt = importDefaultResult.deletedAt;
      tmp8 = null;
      if (null != deletedAt) {
        tmp8 = deletedAt;
      }
      tmp2Result.deletedAt = tmp8;
      expiresAt = importDefaultResult.expiresAt;
      tmp9 = null;
      if (null != expiresAt) {
        tmp9 = expiresAt;
      }
      tmp2Result.expiresAt = tmp9;
      return tmp2Result;
    }
  }
  let closure_0 = UserDiscountOfferRecord;
  callback2(UserDiscountOfferRecord, importDefaultResult);
  let obj = {
    key: "hasExpired",
    value() {
      let tmp2 = null != this.expiresAt;
      if (tmp2) {
        const _Date = Date;
        const expiresAt = tmp.expiresAt;
        const timestamp = Date.now();
        tmp2 = timestamp > expiresAt.getTime();
      }
      return tmp2;
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "isApplied",
    value() {
      return null != this.appliedAt;
    }
  };
  items[1] = obj;
  obj = {
    key: "isDeleted",
    value() {
      return null != this.deletedAt;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasAcknowledged",
    value() {
      return null != this.expiresAt;
    }
  };
  items[4] = {
    key: "getFullIntervalCount",
    value() {
      let num = 0;
      if (null != this.discount) {
        num = this.discount.userUsageLimit;
      }
      return num;
    }
  };
  items[5] = {
    key: "getDiscountInterval",
    value() {
      return this.discount.userUsageLimitInterval;
    }
  };
  items[6] = {
    key: "getApplicableSubscriptionInterval",
    value() {
      return closure_5[this.getDiscountInterval(this)];
    }
  };
  items[7] = {
    key: "getIsMultiIntervalDiscount",
    value() {
      return this.getFullIntervalCount() > 1;
    }
  };
  items[8] = {
    key: "getApproximateDiscountAmountOff",
    value(arg0) {
      const discount = this.discount;
      let amount;
      if (null != discount) {
        amount = discount.amount;
      }
      if (null == amount) {
        return null;
      } else {
        const _parseFloat = parseFloat;
        const parsed = parseFloat(this.discount.amount);
        const _Number = Number;
        let rounded = null;
        if (!Number.isNaN(parsed)) {
          const _Math = Math;
          rounded = Math.round(arg0 * (1 - parsed / 100));
        }
        return rounded;
      }
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = UserDiscountOfferRecord;
        let obj = { id: id.id, discountId: id.discount_id, discount: obj, userId: id.user_id };
        obj = { id: id.discount.id, planIds: id.discount.plan_ids, userUsageLimitInterval: id.discount.user_usage_limit_interval, userUsageLimitIntervalCount: id.discount.user_usage_limit_interval_count, userUsageLimit: id.discount.user_usage_limit, amount: id.discount.amount };
        let date = null;
        if (null != id.applied_at) {
          const _Date = Date;
          date = new Date(id.applied_at);
        }
        obj.appliedAt = date;
        let date1 = null;
        if (null != id.deleted_at) {
          const _Date2 = Date;
          date1 = new Date(id.deleted_at);
        }
        obj.deletedAt = date1;
        let date2 = null;
        if (null != id.expires_at) {
          const _Date3 = Date;
          date2 = new Date(id.expires_at);
        }
        obj.expiresAt = date2;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(UserDiscountOfferRecord, items, items1);
}(importDefaultResult);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_offers/records/UserDiscountOfferRecord.tsx");

export default tmp4;
