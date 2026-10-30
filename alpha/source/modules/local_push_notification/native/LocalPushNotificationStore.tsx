// Module ID: 15563
// Function ID: 15564
// Name: LocalPushNotificationStore
// Dependencies: [4880, 6702, 10878, 1072, 10889, 2044, 1114, 504, 572, 2]

// Module 15563 (LocalPushNotificationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants2 from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import PushNotificationDefault from "PushNotification" /* 10889 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6702 */;
import Constants from "Constants" /* 10878 */;
import size from "module_2" /* 2 */;

let userInfo;

let hasOwnProperty;
let metroRequire;
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = Constants2.VerificationLevels;
const set = new Set();
const Store = get_initializedDefault.Store;
class LocalPushNotificationStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildVerificationStore);
  }
  isScheduled(arg0) {
    return set.has(arg0);
  }
}
const prototype = LocalPushNotificationStore.prototype;
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
let obj = {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    let obj = PushNotificationDefault;
    const scheduledLocalNotifications = obj.getScheduledLocalNotifications((arr) => {
      let guild;
      const item = arr.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const tmp = null != userInfo && userInfo.type === constants.GUILD_VERIFICATION;
        if (tmp) {
          const guildId = userInfo.guildId;
          if (null != guild.getGuild(guildId)) {
            if (!closure_1_4.canChatInGuild(guildId)) {
              set.add(userInfo);
            }
          }
          const obj = closure_1_1(closure_1_2[4]);
          const result = obj.cancelLocalNotifications(userInfo);
          const obj2 = closure_1_1(closure_1_2[4]);
          const result1 = obj2.cancelLocalNotifications(userInfo);
          set.delete(userInfo);
        }
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    let intl;
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = GuildVerificationStore.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          let obj;
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            obj = _modDef2044(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef2044(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef2044(), "minute")) {
              const obj2 = { type: hasOwnProperty.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj2);
              const obj3 = { userInfo: obj2, fireDate: obj.format(metroRequire), alertTitle: guild.name, alertBody: intl.string(intl2.t["hrDBa+"]), category: "local" };
              const scheduleLocalNotification = tmp16(10889).scheduleLocalNotification;
              PushNotificationDefault;
              intl = intl2.intl;
              const result = scheduleLocalNotification(obj3);
            }
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: hasOwnProperty.GUILD_VERIFICATION, guildId: guild.guild.id };
    const obj2 = set;
    if (set.has(obj)) {
      const obj3 = PushNotificationDefault;
      const result = obj3.cancelLocalNotifications(obj);
      obj2.delete(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const obj = PushNotificationDefault;
    const result = obj.cancelAllLocalNotifications();
  }
};
const localPushNotificationStore = new LocalPushNotificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
