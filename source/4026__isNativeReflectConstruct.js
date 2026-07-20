// Module ID: 4026
// Function ID: 33538
// Name: _isNativeReflectConstruct
// Dependencies: [5, 6, 7, 1891, 1884, 2, 6]

// Module 4026 (_isNativeReflectConstruct)
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_1 from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_1884 from "module_1884";
import _classCallCheck from "_classCallCheck";

function _isNativeReflectConstruct() {
  let asyncGeneratorStep = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return asyncGeneratorStep;
  }
  const result = _isNativeReflectConstruct();
}
const result = _classCallCheck.fileFinishedImporting("records/GuildBoostSlotRecord.tsx");

export default (arg0) => {
  class GuildBoostSlotRecord {
    constructor(arg0) {
      self = this;
      tmp = GuildBoostSlotRecord(this, GuildBoostSlotRecord);
      obj = _createForOfIteratorHelperLoose(GuildBoostSlotRecord);
      tmp2 = _defineProperties;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = _createForOfIteratorHelperLoose;
        constructResult = Reflect.construct(obj, [], _createForOfIteratorHelperLoose(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, subscriptionId: tmp6.subscriptionId, premiumGuildSubscription: tmp6.premiumGuildSubscription, canceled: tmp6.canceled, cooldownEndsAt: tmp6.cooldownEndsAt, subscription: tmp6.subscription } = arg0);
      return tmp2Result;
    }
  }
  let asyncGeneratorStep = GuildBoostSlotRecord;
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
}(require("keys"));
