// Module ID: 11514
// Function ID: 89741
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11514 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
let tmp2 = (PersistedStore) => {
  class GuildPowerupsNotificationStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildPowerupsNotificationStore);
      obj = closure_5(GuildPowerupsNotificationStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildPowerupsNotificationStore;
  callback2(GuildPowerupsNotificationStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      return closure_10;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(closure_8, closure_9, closure_7);
    }
  };
  items[1] = obj;
  obj = {
    key: "getNotificationStateForGuild",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[2] = obj;
  return callback(GuildPowerupsNotificationStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp2.displayName = "GuildPowerupsNotificationStore";
tmp2.persistKey = "GuildPowerupsNotificationStore";
const items = [
  (arg0) => {
    const arg1 = arg0;
    const entries = Object.entries(arg0);
    const item = entries.forEach((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      arg0[tmp] = tmp2;
    });
    return arg0;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  GUILD_POWERUPS_ACK_NOTIFICATION: function handleAckNotification(guildId) {
    guildId = guildId.guildId;
    const guild = guild.getGuild(guildId);
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
    let obj = arg1(dependencyMap[8]);
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
    const merged = Object.assign(closure_10);
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
    closure_10 = obj;
  },
  GUILD_POWERUPS_RESET_NOTIFICATIONS: function handleResetNotifications() {
    let closure_10 = {};
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/powerups/GuildPowerupsNotificationStore.tsx");

export default tmp2;
