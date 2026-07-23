// Module ID: 5516
// Function ID: 46970
// Name: _callSuper
// Dependencies: [6, 7, 15, 17, 18, 5, 1858, 653, 507, 1392, 1390, 1387, 2]

// Module 5516 (_callSuper)
import Record from "Record";
import closure_4 from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import asyncGeneratorStep from "asyncGeneratorStep";
import importDefaultResult from "Record";
import ME from "ME";

let closure_10;
let closure_9;
const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    const _Reflect = Reflect;
    const items = [];
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, undefined);
  }
  return _possibleConstructorReturn(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getEmojiSourceData() {
  return _getEmojiSourceData(...arguments);
}
async function _getEmojiSourceData(arg0, arg1) {
  const HTTP = outer2_0(outer2_2[8]).HTTP;
  let obj = { url: outer2_9.EMOJI_SOURCE_DATA(arg0), oldFormErrors: true, timeout: 5000, rejectWithError: true };
  const body = yield HTTP.get(obj).body;
  let type;
  if (null != body) {
    type = tmp2.type;
  }
  if (type === outer2_11.GUILD) {
    obj = { guild: outer2_12.createFromServer(body.guild), type: body.type };
  } else {
    let type1;
    if (null != tmp2) {
      type1 = tmp2.type;
    }
    if (type1 === outer2_11.APPLICATION) {
      obj = { application: outer2_13.createFromServer(tmp2.application), type: tmp2.type };
    }
  }
}
({ Endpoints: closure_9, GuildFeatures: closure_10 } = ME);
let obj = { GUILD: "GUILD", APPLICATION: "APPLICATION" };
const tmp4 = ((importDefaultResult) => {
  class ExpressionSourceGuildRecord {
    constructor(arg0) {
      tmp = outer1_3(this, ExpressionSourceGuildRecord);
      tmp2 = outer1_14(this, ExpressionSourceGuildRecord);
      ({ id: tmp2.id, name: tmp2.name, icon: tmp2.icon, description: tmp2.description, features: tmp2.features, premiumTier: tmp2.premiumTier, premiumSubscriberCount: tmp2.premiumSubscriberCount, presenceCount: tmp2.presenceCount, memberCount: tmp2.memberCount, emojis: tmp2.emojis } = importDefaultResult);
      return tmp2;
    }
  }
  callback3(ExpressionSourceGuildRecord, importDefaultResult);
  let obj = {
    key: "getIconURL",
    value(size) {
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      let obj = ExpressionSourceGuildRecord(outer1_2[9]);
      obj = { id: self.id, size, icon: self.icon, canAnimate: flag };
      return obj.getGuildIconURL(obj);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getIconSource",
    value(arg0, flag) {
      const self = this;
      let closure_1 = arg0;
      if (flag === undefined) {
        flag = false;
      }
      return ExpressionSourceGuildRecord(outer1_2[9]).getAnimatableSourceWithFallback(flag, (canAnimate) => {
        let obj = ExpressionSourceGuildRecord(outer2_2[9]);
        obj = { id: self.id, size: closure_1, icon: self.icon, canAnimate };
        return obj.getGuildIconSource(obj);
      });
    }
  };
  items[1] = obj;
  obj = {
    key: "hasFeature",
    value(arg0) {
      const features = this.features;
      return features.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isDiscoverable",
    value() {
      return this.hasFeature(outer1_10.DISCOVERABLE);
    }
  };
  const obj2 = { key: "getGuildFromEmojiId" };
  let closure_0 = callback4(async (arg0) => {
    const tmp = yield outer2_16(arg0);
    let guild = null;
    if (null != tmp) {
      let type;
      if (null != tmp) {
        type = tmp.type;
      }
      guild = null;
      if (type === outer2_11.GUILD) {
        guild = tmp.guild;
      }
    }
    return guild;
  });
  obj2.value = function getGuildFromEmojiId() {
    return callback(...arguments);
  };
  const items1 = [
    obj2,
    {
      key: "_mapCommon",
      value(id) {
        const obj = { id: id.id, name: id.name, icon: id.icon, description: id.description, features: callback(outer1_2[10]).toSetInplace(id.features) };
        return obj;
      }
    },
    {
      key: "createFromGuildRecord",
      value(premiumTier) {
        const obj = {};
        const merged = Object.assign(ExpressionSourceGuildRecord._mapCommon(premiumTier));
        obj["premiumTier"] = premiumTier.premiumTier;
        obj["premiumSubscriberCount"] = premiumTier.premiumSubscriberCount;
        obj["presenceCount"] = null;
        obj["memberCount"] = null;
        obj["emojis"] = null;
        return new ExpressionSourceGuildRecord(obj);
      }
    },
    {
      key: "createFromDiscoverableGuild",
      value(premiumSubscriptionCount) {
        const obj = {};
        const merged = Object.assign(ExpressionSourceGuildRecord._mapCommon(premiumSubscriptionCount));
        obj["premiumTier"] = null;
        obj["premiumSubscriberCount"] = premiumSubscriptionCount.premiumSubscriptionCount;
        obj["presenceCount"] = premiumSubscriptionCount.presenceCount;
        obj["memberCount"] = premiumSubscriptionCount.memberCount;
        obj["emojis"] = premiumSubscriptionCount.emojis;
        return new ExpressionSourceGuildRecord(obj);
      }
    },
    {
      key: "createFromServer",
      value(premium_tier) {
        const obj = {};
        const merged = Object.assign(ExpressionSourceGuildRecord._mapCommon(premium_tier));
        obj["premiumTier"] = premium_tier.premium_tier;
        obj["premiumSubscriberCount"] = premium_tier.premium_subscription_count;
        obj["presenceCount"] = premium_tier.approximate_presence_count;
        obj["memberCount"] = premium_tier.approximate_member_count;
        obj["emojis"] = premium_tier.emojis;
        return new ExpressionSourceGuildRecord(obj);
      }
    },
    {
      key: "createFromGuildType",
      value(guild) {
        if (guild instanceof ExpressionSourceGuildRecord) {
          return guild;
        } else {
          if (obj.isGuildRecord(guild)) {
            let fromGuildRecord = obj2.createFromGuildRecord(guild);
          } else {
            fromGuildRecord = obj2.createFromDiscoverableGuild(guild);
          }
          obj = callback(outer1_2[11]);
        }
      }
    }
  ];
  return callback(ExpressionSourceGuildRecord, items, items1);
})(importDefaultResult);
let closure_12 = tmp4;
const tmp5 = ((importDefaultResult) => {
  class ExpressionSourceApplicationRecord {
    constructor(arg0) {
      tmp = outer1_3(this, ExpressionSourceApplicationRecord);
      tmp2 = outer1_14(this, ExpressionSourceApplicationRecord);
      ({ id: tmp2.id, name: tmp2.name } = importDefaultResult);
      return tmp2;
    }
  }
  callback3(ExpressionSourceApplicationRecord, importDefaultResult);
  const items = [
    {
      key: "createFromServer",
      value(id) {
        return new ExpressionSourceApplicationRecord({ id: id.id, name: id.name });
      }
    }
  ];
  return callback(ExpressionSourceApplicationRecord, null, items);
})(importDefaultResult);
let closure_13 = tmp5;
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/emojis/records/ExpressionSourceRecord.tsx");

export const EmojiSourceDataTypes = obj;
export { getEmojiSourceData };
export const ExpressionSourceGuildRecord = tmp4;
export const ExpressionSourceApplicationRecord = tmp5;
