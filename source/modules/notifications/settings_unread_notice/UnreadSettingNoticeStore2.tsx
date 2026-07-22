// Module ID: 10418
// Function ID: 80270
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10418 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function trackChannel() {
  if (null == closure_21) {
    return false;
  } else if (shouldTrackChannel(closure_21)) {
    const tmp3 = getOrCreateChannelState(closure_21);
    const _Date = Date;
    const timestamp = Date.now();
    if (tmp3.lastActionTime > timestamp - importDefault(dependencyMap[13]).Millis.DAY) {
      if (tmp3.viewDuration > closure_17) {
        return false;
      }
    }
    const _Date2 = Date;
    const timestamp1 = Date.now();
    tmp3.lastActionTime = timestamp1;
    tmp3.viewDuration = tmp3.viewDuration + (timestamp1 - closure_22);
    closure_22 = timestamp1;
    return true;
  } else {
    return false;
  }
}
function startInterval() {
  if (0 !== interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    let interval = 0;
  }
  if (store2.useNewNotifications) {
    const _setInterval = setInterval;
    interval = setInterval(() => {
      if (callback()) {
        closure_24.emitChange();
      }
    }, 15 * importDefault(dependencyMap[13]).Millis.SECOND);
  }
  return false;
}
function getOrCreateChannelState(arg0) {
  if (!(arg0 in closure_19.channels)) {
    closure_19.channels[arg0] = { base: "spring", min: 0.4, max: 1 };
  }
  return closure_19.channels[arg0];
}
function shouldTrackChannel(channelId) {
  if (store2.useNewNotifications) {
    if (set.has(channelId)) {
      return false;
    } else {
      const basicChannel = basicChannel.getBasicChannel(channelId);
      if (null != basicChannel) {
        if (null != basicChannel.guild_id) {
          if (store2.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
            return false;
          } else if (hasAnyOverride(basicChannel.guild_id, basicChannel.id)) {
            return false;
          } else if (hasAnyOverride(basicChannel.guild_id, basicChannel.parent_id)) {
            return false;
          } else {
            const unreadSetting = store2.resolveUnreadSetting(basicChannel);
            let tmp11 = store2.getChannelUnreadSetting(basicChannel.guild_id, basicChannel.id) === UnreadSetting.UNSET;
            if (tmp11) {
              tmp11 = unreadSetting !== UnreadSetting.ALL_MESSAGES;
            }
            return tmp11;
          }
        }
      }
      return false;
    }
  } else {
    return false;
  }
}
function hasAnyOverride(guild_id, id) {
  if (null == id) {
    return false;
  } else {
    const tmp11 = store2.getChannelOverrides(guild_id)[id];
    let tmp8 = null != tmp11;
    if (tmp8) {
      let tmp = null != tmp11.message_notifications;
      if (tmp) {
        tmp = tmp11.message_notifications !== UserNotificationSettings.NULL;
      }
      if (!tmp) {
        let tmp3 = null == tmp11.flags;
        if (!tmp3) {
          tmp3 = !id(dependencyMap[15]).hasAnyFlag(tmp11.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
          const obj = id(dependencyMap[15]);
        }
        tmp = !tmp3;
      }
      tmp8 = tmp;
    }
    return tmp8;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const UserNotificationSettings = arg1(dependencyMap[10]).UserNotificationSettings;
const UnreadSetting = arg1(dependencyMap[11]).UnreadSetting;
let closure_15 = arg1(dependencyMap[12]).ChannelNotificationSettingsFlags;
let obj = { timeSinceJoin: importDefault(dependencyMap[13]).Millis.HOUR, sends: 1, viewTime: importDefault(dependencyMap[13]).Millis.MINUTE };
const items = [obj, , , ];
obj = { timeSinceJoin: importDefault(dependencyMap[13]).Millis.DAY, sends: 2, viewTime: 2 * importDefault(dependencyMap[13]).Millis.MINUTE };
items[1] = obj;
obj = { timeSinceJoin: importDefault(dependencyMap[13]).Millis.WEEK, sends: 5, viewTime: 5 * importDefault(dependencyMap[13]).Millis.MINUTE };
items[2] = obj;
items[3] = { timeSinceJoin: importDefault(dependencyMap[13]).Millis.DAYS_30, sends: 10, viewTime: 30 * importDefault(dependencyMap[13]).Millis.MINUTE };
let closure_17 = 5 * items[items.length - 1].viewTime;
const WEEK = importDefault(dependencyMap[13]).Millis.WEEK;
let closure_19 = { channels: {} };
const set = new Set();
let closure_21 = null;
let closure_22 = 0;
let closure_23 = 0;
let tmp3 = (PersistedStore) => {
  class UnreadSettingNoticeStore2Class {
    constructor() {
      self = this;
      tmp = closure_3(this, UnreadSettingNoticeStore2Class);
      obj = closure_6(UnreadSettingNoticeStore2Class);
      tmp2 = closure_5;
      if (closure_25()) {
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
  const arg1 = UnreadSettingNoticeStore2Class;
  callback2(UnreadSettingNoticeStore2Class, PersistedStore);
  let obj = {
    key: "initialize",
    value(channels) {
      const self = this;
      if (null != channels) {
        closure_19.channels = channels.channels;
      }
      const items = [closure_12];
      self.syncWith(items, closure_27);
      self.waitFor(closure_8, closure_9, closure_10, closure_11, closure_12);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastActionTime",
    value(arg0) {
      let lastActionTime;
      if (null != closure_19.channels[arg0]) {
        lastActionTime = tmp.lastActionTime;
      }
      let num = 0;
      if (null != lastActionTime) {
        num = lastActionTime;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "maybeAutoUpgradeChannel",
    value(arg0) {
      if (callback5(arg0)) {
        const basicChannel = basicChannel.getBasicChannel(arg0);
        let tmp4 = null != basicChannel && null != basicChannel.guild_id;
        if (tmp4) {
          const guild = guild.getGuild(basicChannel.guild_id);
          let joinedAt;
          if (null != guild) {
            joinedAt = guild.joinedAt;
          }
          if (null == joinedAt) {
            const _Date = Date;
            joinedAt = new Date();
          }
          const _Date2 = Date;
          callback(closure_2[14]).age(basicChannel.id);
          const timestamp = Date.now();
          const _Math = Math;
          let flag2 = false;
          if (null != closure_19.channels[basicChannel.id]) {
            const _Date3 = Date;
            flag2 = false;
            if (tmp18.lastActionTime >= Date.now() - closure_18) {
              let num2 = 0;
              flag2 = false;
              if (0 < length.length) {
                while (true) {
                  let tmp20 = arr[num2];
                  if (tmp16 >= tmp20.timeSinceJoin) {
                    num2 = num2 + 1;
                    flag2 = false;
                    if (num2 >= arr.length) {
                      break;
                    }
                  } else {
                    flag2 = true;
                    if (tmp18.numSends >= tmp20.sends) {
                      break;
                    } else {
                      flag2 = true;
                      if (tmp18.viewDuration >= tmp20.viewTime) {
                        break;
                      }
                    }
                  }
                  break;
                }
              }
            }
          }
          let flag3 = flag2;
          if (flag2) {
            const channels = closure_19.channels;
            delete r4[r7];
            set.add(arg0);
            const result = UnreadSettingNoticeStore2Class(closure_2[16]).updateChannelUnreadSetting(basicChannel.guild_id, basicChannel.id, constants.ALL_MESSAGES);
            flag3 = true;
            const obj2 = UnreadSettingNoticeStore2Class(closure_2[16]);
          }
          tmp4 = flag3;
          const obj = callback(closure_2[14]);
        }
        return tmp4;
      } else {
        return false;
      }
    }
  };
  return callback(UnreadSettingNoticeStore2Class, items);
}(importDefault(dependencyMap[17]).PersistedStore);
tmp3.displayName = "UnreadSettingNoticeStore2";
tmp3.persistKey = "UnreadSettingNoticeStore2";
tmp3 = new tmp3(importDefault(dependencyMap[18]), {
  CHANNEL_SELECT: function handleChannelSelect() {
    const channelId = store.getChannelId();
    let closure_22 = Date.now();
    return trackChannel();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const channelId = store.getChannelId();
    let closure_22 = Date.now();
    startInterval();
    let closure_0 = Date.now() - WEEK;
    const item = importDefault(dependencyMap[14]).forEach(closure_19.channels, (lastActionTime) => {
      if (lastActionTime.lastActionTime < closure_0) {
        const channels = channels.channels;
        delete r1[r0];
      }
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const author = optimistic.message.author;
        let id;
        if (null != author) {
          id = author.id;
        }
        if (id !== id.getId()) {
          return false;
        } else if (shouldTrackChannel(optimistic.channelId)) {
          const tmp6 = getOrCreateChannelState(optimistic.channelId);
          const _Date = Date;
          tmp6.lastActionTime = Date.now();
          tmp6.numSends = tmp6.numSends + 1;
        } else {
          return false;
        }
      }
    }
    return false;
  }
});
const obj1 = { timeSinceJoin: importDefault(dependencyMap[13]).Millis.DAYS_30, sends: 10, viewTime: 30 * importDefault(dependencyMap[13]).Millis.MINUTE };
const obj2 = {
  CHANNEL_SELECT: function handleChannelSelect() {
    const channelId = store.getChannelId();
    let closure_22 = Date.now();
    return trackChannel();
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const channelId = store.getChannelId();
    let closure_22 = Date.now();
    startInterval();
    let closure_0 = Date.now() - WEEK;
    const item = importDefault(dependencyMap[14]).forEach(closure_19.channels, (lastActionTime) => {
      if (lastActionTime.lastActionTime < closure_0) {
        const channels = channels.channels;
        delete r1[r0];
      }
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        const author = optimistic.message.author;
        let id;
        if (null != author) {
          id = author.id;
        }
        if (id !== id.getId()) {
          return false;
        } else if (shouldTrackChannel(optimistic.channelId)) {
          const tmp6 = getOrCreateChannelState(optimistic.channelId);
          const _Date = Date;
          tmp6.lastActionTime = Date.now();
          tmp6.numSends = tmp6.numSends + 1;
        } else {
          return false;
        }
      }
    }
    return false;
  }
};
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx");

export default tmp3;
