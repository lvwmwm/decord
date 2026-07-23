// Module ID: 10428
// Function ID: 80320
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 1838, 1906, 4325, 653, 4326, 662, 664, 21, 1360, 10288, 566, 686, 2]

// Module 10428 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import hasFlag from "hasFlag";
import initialize from "initialize";
import dispatcher from "dispatcher";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_15 } from "MAX_FAVORITES";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function trackChannel() {
  if (null == c21) {
    return false;
  } else if (shouldTrackChannel(c21)) {
    const tmp3 = getOrCreateChannelState(c21);
    const _Date = Date;
    const timestamp = Date.now();
    if (tmp3.lastActionTime > timestamp - importDefault(664).Millis.DAY) {
      if (tmp3.viewDuration > closure_17) {
        return false;
      }
    }
    const _Date2 = Date;
    const timestamp1 = Date.now();
    tmp3.lastActionTime = timestamp1;
    tmp3.viewDuration = tmp3.viewDuration + (timestamp1 - timestamp1);
    return true;
  } else {
    return false;
  }
}
function startInterval() {
  if (0 !== interval) {
    const _clearInterval = clearInterval;
    clearInterval(interval);
    interval = 0;
  }
  if (store2.useNewNotifications) {
    const _setInterval = setInterval;
    interval = setInterval(() => {
      if (outer1_26()) {
        outer1_24.emitChange();
      }
    }, 15 * importDefault(664).Millis.SECOND);
  }
  return false;
}
function getOrCreateChannelState(arg0) {
  if (!(arg0 in closure_19.channels)) {
    closure_19.channels[arg0] = { lastActionTime: 0, viewDuration: 0, numSends: 0 };
  }
  return closure_19.channels[arg0];
}
function shouldTrackChannel(c21) {
  if (store2.useNewNotifications) {
    if (set.has(c21)) {
      return false;
    } else {
      basicChannel = basicChannel.getBasicChannel(c21);
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
          tmp3 = !require(1360) /* hasFlag */.hasAnyFlag(tmp11.flags, constants.UNREADS_ALL_MESSAGES | constants.UNREADS_ONLY_MENTIONS);
          const obj = require(1360) /* hasFlag */;
        }
        tmp = !tmp3;
      }
      tmp8 = tmp;
    }
    return tmp8;
  }
}
let obj = { timeSinceJoin: require("set").Millis.HOUR, sends: 1, viewTime: require("set").Millis.MINUTE };
let items = [obj, , , ];
obj = { timeSinceJoin: require("set").Millis.DAY, sends: 2, viewTime: 2 * require("set").Millis.MINUTE };
items[1] = obj;
obj = { timeSinceJoin: require("set").Millis.WEEK, sends: 5, viewTime: 5 * require("set").Millis.MINUTE };
items[2] = obj;
items[3] = { timeSinceJoin: require("set").Millis.DAYS_30, sends: 10, viewTime: 30 * require("set").Millis.MINUTE };
let closure_17 = 5 * items[items.length - 1].viewTime;
const WEEK = require("set").Millis.WEEK;
let closure_19 = { channels: {} };
let set = new Set();
let c21 = null;
let c22 = 0;
let c23 = 0;
let tmp3 = ((PersistedStore) => {
  class UnreadSettingNoticeStore2Class {
    constructor() {
      self = this;
      tmp = outer1_3(this, UnreadSettingNoticeStore2Class);
      obj = outer1_6(UnreadSettingNoticeStore2Class);
      tmp2 = outer1_5;
      if (outer1_25()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UnreadSettingNoticeStore2Class, PersistedStore);
  let obj = {
    key: "initialize",
    value(channels) {
      const self = this;
      if (null != channels) {
        outer1_19.channels = channels.channels;
      }
      const items = [outer1_12];
      self.syncWith(items, outer1_27);
      self.waitFor(outer1_8, outer1_9, outer1_10, outer1_11, outer1_12);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_19;
    }
  };
  items[1] = obj;
  obj = {
    key: "getLastActionTime",
    value(arg0) {
      let lastActionTime;
      if (null != outer1_19.channels[arg0]) {
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
      if (outer1_29(arg0)) {
        const basicChannel = outer1_9.getBasicChannel(arg0);
        let tmp6 = null != basicChannel && null != basicChannel.guild_id;
        if (tmp6) {
          const guild = outer1_10.getGuild(basicChannel.guild_id);
          let joinedAt;
          if (null != guild) {
            joinedAt = guild.joinedAt;
          }
          if (null == joinedAt) {
            const _Date = Date;
            joinedAt = new Date();
          }
          const _Date2 = Date;
          outer1_1(outer1_2[14]).age(basicChannel.id);
          const timestamp = Date.now();
          const _Math = Math;
          let flag2 = false;
          if (null != outer1_19.channels[basicChannel.id]) {
            const _Date3 = Date;
            flag2 = false;
            if (tmp20.lastActionTime >= Date.now() - outer1_18) {
              let num2 = 0;
              flag2 = false;
              if (0 < outer1_16.length) {
                while (true) {
                  let tmp22 = arr[num2];
                  if (tmp18 >= tmp22.timeSinceJoin) {
                    num2 = num2 + 1;
                    flag2 = false;
                    if (num2 >= arr.length) {
                      break;
                    }
                  } else {
                    flag2 = true;
                    if (tmp20.numSends >= tmp22.sends) {
                      break;
                    } else {
                      flag2 = true;
                      if (tmp20.viewDuration >= tmp22.viewTime) {
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
            const channels = outer1_19.channels;
            delete tmp[tmp2];
            outer1_20.add(arg0);
            const result = UnreadSettingNoticeStore2Class(outer1_2[16]).updateChannelUnreadSetting(basicChannel.guild_id, basicChannel.id, outer1_14.ALL_MESSAGES);
            flag3 = true;
            const obj2 = UnreadSettingNoticeStore2Class(outer1_2[16]);
          }
          tmp6 = flag3;
          const obj = outer1_1(outer1_2[14]);
        }
        return tmp6;
      } else {
        return false;
      }
    }
  };
  return callback(UnreadSettingNoticeStore2Class, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "UnreadSettingNoticeStore2";
tmp3.persistKey = "UnreadSettingNoticeStore2";
tmp3 = new tmp3(require("dispatcher"), {
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
    const item = importDefault(21).forEach(closure_19.channels, (lastActionTime) => {
      if (lastActionTime.lastActionTime < closure_0) {
        const channels = outer1_19.channels;
        delete tmp2[tmp];
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
let closure_24 = tmp3;
let result = set.fileFinishedImporting("modules/notifications/settings_unread_notice/UnreadSettingNoticeStore2.tsx");

export default tmp3;
