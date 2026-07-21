// Module ID: 12519
// Function ID: 96044
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12519 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleSchedule(arg0) {
  set.add(arg0);
}
function handleCancel(arg0) {
  const result = importDefault(dependencyMap[9]).cancelLocalNotifications(arg0);
  set.delete(arg0);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ LocalNotificationTypes: closure_10, FIRE_DATE_FORMAT: closure_11 } = arg1(dependencyMap[7]));
const VerificationLevels = arg1(dependencyMap[8]).VerificationLevels;
const set = new Set();
let tmp4 = (Store) => {
  class LocalPushNotificationStore {
    constructor() {
      self = this;
      tmp = closure_3(this, LocalPushNotificationStore);
      obj = closure_6(LocalPushNotificationStore);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = LocalPushNotificationStore;
  callback2(LocalPushNotificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isScheduled",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[1] = obj;
  return callback(LocalPushNotificationStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp4.displayName = "LocalPushNotificationStore";
tmp4 = new tmp4(importDefault(dependencyMap[13]), {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = importDefault(dependencyMap[9]).getScheduledLocalNotifications((arr) => {
      const found = arr.filter((userInfo) => {
        let tmp = null != userInfo.userInfo;
        if (tmp) {
          tmp = userInfo.userInfo.type === constants.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_9.canChatInGuild(guildId)) {
            callback2(userInfo);
          }
        }
        const result = callback(closure_2[9]).cancelLocalNotifications(userInfo);
        callback3(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = guild.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = check.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            let obj = importDefault(dependencyMap[10])(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = importDefault(dependencyMap[10])(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(importDefault(dependencyMap[10])(), "minute")) {
              obj = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              handleSchedule(obj);
              obj = {};
              obj.userInfo = obj;
              obj.fireDate = obj.format(closure_11);
              obj.alertTitle = guild.name;
              const intl = arg1(dependencyMap[11]).intl;
              obj.alertBody = intl.string(arg1(dependencyMap[11]).t.hrDBa+);
              obj.category = "local";
              const result = importDefault(dependencyMap[9]).scheduleLocalNotification(obj);
              const obj3 = importDefault(dependencyMap[9]);
            }
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: constants.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      handleCancel(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = importDefault(dependencyMap[9]).cancelAllLocalNotifications();
  }
});
const obj = {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = importDefault(dependencyMap[9]).getScheduledLocalNotifications((arr) => {
      const found = arr.filter((userInfo) => {
        let tmp = null != userInfo.userInfo;
        if (tmp) {
          tmp = userInfo.userInfo.type === constants.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_9.canChatInGuild(guildId)) {
            callback2(userInfo);
          }
        }
        const result = callback(closure_2[9]).cancelLocalNotifications(userInfo);
        callback3(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = guild.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = check.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            let obj = importDefault(dependencyMap[10])(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = importDefault(dependencyMap[10])(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(importDefault(dependencyMap[10])(), "minute")) {
              obj = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              handleSchedule(obj);
              obj = {};
              obj.userInfo = obj;
              obj.fireDate = obj.format(closure_11);
              obj.alertTitle = guild.name;
              const intl = arg1(dependencyMap[11]).intl;
              obj.alertBody = intl.string(arg1(dependencyMap[11]).t.hrDBa+);
              obj.category = "local";
              const result = importDefault(dependencyMap[9]).scheduleLocalNotification(obj);
              const obj3 = importDefault(dependencyMap[9]);
            }
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: constants.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      handleCancel(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = importDefault(dependencyMap[9]).cancelAllLocalNotifications();
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default tmp4;
