// Module ID: 13260
// Function ID: 13261
// Name: LocalPushNotificationStore
// Dependencies: [2067, 5725, 8504, 1074, 8746, 4421, 1115, 504, 573, 2]

// Module 13260 (LocalPushNotificationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants2 from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import _modDef4421 from "module_4421" /* 4421 */;
import PushNotificationDefault from "PushNotification" /* 8746 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5725 */;
import Constants from "Constants" /* 8504 */;
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
      const found = arr.filter((userInfo) => null != userInfo.userInfo && userInfo.userInfo.type === constants.GUILD_VERIFICATION);
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
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
            obj = _modDef4421(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef4421(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef4421(), "minute")) {
              const obj2 = { type: hasOwnProperty.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj2);
              const obj3 = { userInfo: obj2, fireDate: obj.format(metroRequire), alertTitle: guild.name, alertBody: intl.string(intl2.t["hrDBa+"]), category: "local" };
              const scheduleLocalNotification = tmp16(8746).scheduleLocalNotification;
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
