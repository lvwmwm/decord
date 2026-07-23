// Module ID: 12638
// Function ID: 98228
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 4946, 12639, 653, 10638, 3712, 1212, 566, 686, 2]

// Module 12638 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "LocalNotificationTypes";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import LocalNotificationTypes from "LocalNotificationTypes";
import { VerificationLevels } from "ME";
import set from "_possibleConstructorReturn";

let closure_10;
let closure_11;
const require = arg1;
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
  const result = importDefault(10638).cancelLocalNotifications(arg0);
  set.delete(arg0);
}
({ LocalNotificationTypes: closure_10, FIRE_DATE_FORMAT: closure_11 } = LocalNotificationTypes);
let set = new Set();
let tmp4 = ((Store) => {
  class LocalPushNotificationStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, LocalPushNotificationStore);
      obj = outer1_6(LocalPushNotificationStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
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
  callback2(LocalPushNotificationStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "isScheduled",
    value(arg0) {
      return outer1_13.has(arg0);
    }
  };
  items[1] = obj;
  return callback(LocalPushNotificationStore, items);
})(require("initialize").Store);
tmp4.displayName = "LocalPushNotificationStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = importDefault(10638).getScheduledLocalNotifications((arr) => {
      const found = arr.filter((userInfo) => {
        let tmp = null != userInfo.userInfo;
        if (tmp) {
          tmp = userInfo.userInfo.type === outer2_10.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != outer2_8.getGuild(guildId)) {
          if (!outer2_9.canChatInGuild(guildId)) {
            outer2_15(userInfo);
          }
        }
        const result = outer2_1(outer2_2[9]).cancelLocalNotifications(userInfo);
        outer2_16(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = guild.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      check = check.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            let obj = importDefault(3712)(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = importDefault(3712)(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(importDefault(3712)(), "minute")) {
              obj = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              handleSchedule(obj);
              obj = {};
              obj.userInfo = obj;
              obj.fireDate = obj.format(closure_11);
              obj.alertTitle = guild.name;
              const intl = require(1212) /* getSystemLocale */.intl;
              obj.alertBody = intl.string(require(1212) /* getSystemLocale */.t["hrDBa+"]);
              obj.category = "local";
              const result = importDefault(10638).scheduleLocalNotification(obj);
              const obj3 = importDefault(10638);
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
    const result = importDefault(10638).cancelAllLocalNotifications();
  }
});
let result = set.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default tmp4;
