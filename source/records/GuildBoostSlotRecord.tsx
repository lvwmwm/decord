// Module ID: 4026
// Function ID: 33545
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4026 (_isNativeReflectConstruct)
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
const tmp2 = (arg0) => {
  class GuildBoostSlotRecord {
    constructor(arg0) {
      self = this;
      tmp = GuildBoostSlotRecord(this, GuildBoostSlotRecord);
      obj = closure_3(GuildBoostSlotRecord);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, subscriptionId: tmp6.subscriptionId, premiumGuildSubscription: tmp6.premiumGuildSubscription, canceled: tmp6.canceled, cooldownEndsAt: tmp6.cooldownEndsAt, subscription: tmp6.subscription } = arg0);
      return tmp2Result;
    }
  }
  let closure_0 = GuildBoostSlotRecord;
  callback2(GuildBoostSlotRecord, arg0);
  let obj = {
    key: "isOnCooldown",
    value() {
      let tmp2 = null != this.cooldownEndsAt;
      if (tmp2) {
        const _Date = Date;
        const date = new Date(tmp.cooldownEndsAt);
        const _Date2 = Date;
        const time = date.getTime();
        tmp2 = time >= Date.now();
      }
      return tmp2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "isAvailable",
    value() {
      const self = this;
      return null == this.premiumGuildSubscription && !self.isOnCooldown();
    }
  };
  items[1] = obj;
  obj = {
    key: "createFromServer",
    value(id, subscription) {
      let tmp = GuildBoostSlotRecord;
      let obj = { id: id.id, subscriptionId: id.subscription_id };
      let tmp2 = null;
      if (null != id.premium_guild_subscription) {
        obj = { id: id.premium_guild_subscription.id, guildId: id.premium_guild_subscription.guild_id };
        tmp2 = obj;
      }
      obj.premiumGuildSubscription = tmp2;
      ({ canceled: obj.canceled, cooldown_ends_at: obj.cooldownEndsAt } = id);
      obj.subscription = subscription;
      tmp = new tmp(obj);
      return tmp;
    }
  };
  const items1 = [obj];
  return callback(GuildBoostSlotRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("records/GuildBoostSlotRecord.tsx");

export default tmp2;
