// Module ID: 8679
// Function ID: 68754
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8679 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function parseRewardConfig(discount) {
  let tmp = null;
  if (null != discount) {
    let obj = {};
    let tmp2 = null;
    if (null != discount.discount) {
      obj = { id: discount.discount.id, type: discount.discount.type, amount: discount.discount.amount };
      tmp2 = obj;
    }
    obj.discount = tmp2;
    tmp = obj;
  }
  return tmp;
}
function parseSkuIds(arg0) {
  let length;
  if (null == arg0) {
    return null;
  } else {
    let obj = {};
    const _Object = Object;
    const entries = Object.entries(arg0);
    let num4 = 0;
    if (0 < entries.length) {
      do {
        let tmp2 = closure_0;
        let tmp3 = closure_0(entries[num4], 2);
        obj = { priceTiers: tmp3[1].price_tiers };
        obj[tmp3[0]] = obj;
        num4 = num4 + 1;
        length = entries.length;
      } while (num4 < length);
    }
    return obj;
  }
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class StorefrontPromotionRecord {
    constructor(arg0) {
      self = this;
      tmp = closure_1(this, StorefrontPromotionRecord);
      obj = closure_4(StorefrontPromotionRecord);
      tmp2 = closure_3;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_4;
        constructResult = Reflect.construct(obj, [], closure_4(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, applicationId: tmp6.applicationId, displayName: tmp6.displayName, rewardType: tmp6.rewardType, rewardConfig: tmp6.rewardConfig, skuIds: tmp6.skuIds, appliesToAllSkus: tmp6.appliesToAllSkus, startsAt: tmp6.startsAt, endsAt: tmp6.endsAt } = arg0);
      return tmp2Result;
    }
  }
  let closure_0 = StorefrontPromotionRecord;
  callback2(StorefrontPromotionRecord, arg0);
  const items = [
    {
      key: "createFromServer",
      value(id) {
        let tmp = StorefrontPromotionRecord;
        const obj = { id: id.id, applicationId: id.application_id };
        const display_name = id.display_name;
        let tmp2 = null;
        if (null != display_name) {
          tmp2 = display_name;
        }
        obj.displayName = tmp2;
        obj.rewardType = id.reward_type;
        let tmp3 = null;
        if (null != id.reward_config) {
          tmp3 = callback4(id.reward_config);
        }
        obj.rewardConfig = tmp3;
        obj.skuIds = callback5(id.sku_ids);
        obj.appliesToAllSkus = id.applies_to_all_skus;
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
        tmp = new tmp(obj);
        return tmp;
      }
    }
  ];
  return callback(StorefrontPromotionRecord, null, items);
}(importDefault(dependencyMap[6]));
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/storefront/records/StorefrontPromotionRecord.tsx");

export default tmp2;
