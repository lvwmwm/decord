// Module ID: 4164
// Function ID: 35332
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4164 (_isNativeReflectConstruct)
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
const EntitlementTypes = arg1(dependencyMap[8]).EntitlementTypes;
const importDefaultResult = importDefault(dependencyMap[5]);
const tmp3 = (importDefaultResult) => {
  class EntitlementRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, EntitlementRecord);
      obj = closure_6(EntitlementRecord);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, skuId: tmp6.skuId, applicationId: tmp6.applicationId, user: tmp6.user, userId: tmp6.userId, gifterId: tmp6.gifterId, type: tmp6.type, branches: tmp6.branches, startsAt: tmp6.startsAt, endsAt: tmp6.endsAt, subscriptionId: tmp6.subscriptionId, subscriptionPlanId: tmp6.subscriptionPlanId, parentId: tmp6.parentId, consumed: tmp6.consumed, giftCodeBatchId: tmp6.giftCodeBatchId, giftStyle: tmp6.giftStyle, guildId: tmp6.guildId, deleted: tmp6.deleted, sourceType: tmp6.sourceType, fulfillmentStatus: tmp6.fulfillmentStatus } = importDefaultResult);
      return tmp2Result;
    }
  }
  const arg1 = EntitlementRecord;
  callback2(EntitlementRecord, importDefaultResult);
  let obj = {
    key: "isGiftable",
    get() {
      let tmp = this.type === constants.USER_GIFT;
      if (tmp) {
        tmp = null == this.gifterId;
      }
      return tmp;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isValid",
    value(isPremiumWithFractionalPremiumOnly, get) {
      let tmp = arg2;
      const self = this;
      if (arg2 === undefined) {
        tmp = null;
      }
      if (!self.isGiftable) {
        if (!self.deleted) {
          if (self.type === constants.PREMIUM_SUBSCRIPTION) {
            const value = get.get(self.skuId);
            if (null != value) {
              if (!value.premium) {
                return false;
              }
            }
            if (!obj.canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly)) {
              return false;
            }
            const obj = callback(closure_2[9]);
          }
          const _Date = Date;
          const date = new Date();
          if (null != self.startsAt) {
            if (date < self.startsAt) {
              return false;
            }
          }
          if (null != self.endsAt) {
            if (date >= self.endsAt) {
              return false;
            }
          }
          if (null != tmp) {
            if (0 === self.branches.length) {
              if (self.applicationId !== tmp) {
                return false;
              }
            } else {
              const branches = self.branches;
              if (!branches.includes(tmp)) {
                return false;
              }
            }
          }
          return true;
        }
      }
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFulfilled",
    value() {
      return this.fulfillmentStatus === EntitlementRecord(closure_2[10]).EntitlementTenantFulfillmentStatus.FULFILLED;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "createFromServer",
      value(id) {
        let branches;
        let tmp = EntitlementRecord;
        const obj = { id: id.id, skuId: id.sku_id, applicationId: id.application_id };
        let tmp2 = null;
        if (null != id.user) {
          const prototype = ctor.prototype;
          tmp2 = new ctor(id.user);
        }
        obj.user = tmp2;
        ({ user_id: obj.userId, gifter_user_id: obj.gifterId, type: obj.type, branches } = id);
        if (null == branches) {
          branches = [];
        }
        obj.branches = branches;
        let date = null;
        if (null != id.starts_at) {
          const _Date = Date;
          date = new Date(id.starts_at);
        }
        obj.startsAt = date;
        let date1 = null;
        if (null != id.ends_at) {
          const _Date2 = Date;
          date1 = new Date(id.ends_at);
        }
        obj.endsAt = date1;
        obj.subscriptionId = id.subscription_id;
        id = null;
        if (null != id.subscription_plan) {
          id = id.subscription_plan.id;
        }
        obj.subscriptionPlanId = id;
        let parent_id = null;
        if (null != id.parent_id) {
          parent_id = id.parent_id;
        }
        obj.parentId = parent_id;
        let consumed = null;
        if (null != id.consumed) {
          consumed = id.consumed;
        }
        obj.consumed = consumed;
        const gift_code_batch_id = id.gift_code_batch_id;
        let tmp17 = null;
        if (null != gift_code_batch_id) {
          tmp17 = gift_code_batch_id;
        }
        obj.giftCodeBatchId = tmp17;
        ({ gift_style: obj.giftStyle, guild_id: obj.guildId, deleted: obj.deleted } = id);
        let fromServer = null;
        if (null != id.sku) {
          fromServer = closure_8.createFromServer(id.sku);
        }
        obj.sku = fromServer;
        const source_type = id.source_type;
        let tmp20 = null;
        if (null != source_type) {
          tmp20 = source_type;
        }
        obj.sourceType = tmp20;
        const fulfillment_status = id.fulfillment_status;
        let tmp21 = null;
        if (null != fulfillment_status) {
          tmp21 = fulfillment_status;
        }
        obj.fulfillmentStatus = tmp21;
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(EntitlementRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[11]).fileFinishedImporting("records/EntitlementRecord.tsx");

export default tmp3;
