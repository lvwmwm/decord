// Module ID: 11524
// Function ID: 89791
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 4038, 4017, 11525, 566, 686, 2]

// Module 11524 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_10 = {};
let tmp2 = ((PersistedStore) => {
  class GuildPowerupsNotificationStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildPowerupsNotificationStore);
      obj = outer1_5(GuildPowerupsNotificationStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildPowerupsNotificationStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      return outer1_10;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(outer1_8, outer1_9, outer1_7);
      if (null != arg0) {
        const outer1_10 = arg0;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getNotificationStateForGuild",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  return callback(GuildPowerupsNotificationStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "GuildPowerupsNotificationStore";
tmp2.persistKey = "GuildPowerupsNotificationStore";
let items = [
  (arg0) => {
    let closure_0 = arg0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      closure_0[tmp] = tmp2;
    });
    return arg0;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_POWERUPS_ACK_NOTIFICATION: function handleAckNotification(guildId) {
    guildId = guildId.guildId;
    guild = guild.getGuild(guildId);
    let prop;
    if (null != guild) {
      prop = guild.premiumSubscriberCount;
    }
    let num = 0;
    if (null != prop) {
      num = prop;
    }
    const stateForGuild = stateForGuild2.getStateForGuild(guildId);
    const stateForGuild1 = stateForGuild.getStateForGuild(guildId);
    let obj = require(11525) /* getExpiringGuildEntitlements */;
    let unlockedPowerups;
    if (null != stateForGuild) {
      unlockedPowerups = stateForGuild.unlockedPowerups;
    }
    if (null == unlockedPowerups) {
      unlockedPowerups = {};
    }
    const items = [...Object.values(unlockedPowerups)];
    let entitlements;
    if (null != stateForGuild1) {
      entitlements = stateForGuild1.entitlements;
    }
    if (null == entitlements) {
      entitlements = {};
    }
    HermesBuiltin.arraySpread(Object.values(entitlements), tmp5);
    const expiringGuildEntitlements = obj.getExpiringGuildEntitlements(items);
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    let ends_at;
    if (null != expiringGuildEntitlements[expiringGuildEntitlements.length - 1]) {
      ends_at = tmp8.ends_at;
    }
    if (null == ends_at) {
      const _Date = Date;
      ends_at = Date.now();
    }
    obj.lastSeenWarningNotification = new Date(ends_at).getTime();
    obj.lastBoostCount = num;
    obj[guildId] = obj;
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function handleResetNotifications() {
    let closure_10 = {};
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/premium/powerups/GuildPowerupsNotificationStore.tsx");

export default tmp2;
