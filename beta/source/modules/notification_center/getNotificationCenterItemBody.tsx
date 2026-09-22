// Module ID: 16767
// Function ID: 16768
// Name: getNotificationCenterItemBody
// Dependencies: [7773, 2067, 4409, 1376, 1078, 1119, 4603, 7881, 2013, 38, 2]
// Exports: default, getFriendRequestSentBody

// Module 16767 (getNotificationCenterItemBody)
import util from "util" /* 1119 */;
import UserUtilsDefault from "UserUtils" /* 4603 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7881 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7773 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const isGuildEventEnded = fn(7773).isGuildEventEnded;
const Constants = fn(1078);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, RelationshipTypes: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

export default function getNotificationCenterItemBody(arg0) {
  ({ item, renderApplication } = arg0);
  let applicationId = renderApplication;
  renderApplication = undefined;
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  if (id == null) {
    id = closure_1_8;
  }
  const other_user2 = item.other_user;
  let id1;
  if (other_user2 != null) {
    id1 = other_user2.id;
  }
  const name1 = UserUtilsDefault.getName(UserStore.getUser(id1));
  applicationId = item.applicationId;
  renderApplication = applicationId;
  const type = item.type;
  if (NotificationCenterItemsTypes.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    const other_users = item.other_users;
    let id2;
    if (other_users != null) {
      const first = other_users[0];
      if (first != null) {
        id2 = first.id;
      }
    }
    const name2 = tmp2(4603).getName(obj2.getUser(id2));
    const tmp2Result = tmp2(4603);
    const other_users2 = item.other_users;
    let id3;
    if (other_users2 != null) {
      if (other_users2[1] != null) {
        id3 = tmp37.id;
      }
    }
    const other_users1 = item.other_users;
    let num;
    const name3 = tmp2(4603).getName(obj2.getUser(id3));
    if (other_users1 != null) {
      num = other_users1.length;
    }
    if (num == null) {
      num = 0;
    }
    const bound = Math.max(num - 2, 0);
    const intl12 = tmp6(1119).intl;
    const obj3 = { user: name2, user2: name3, count: bound };
    return intl12.format(tmp6(1119).t.g5xyIC, obj3);
  } else if (tmp6(7881).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE === type) {
    let str7;
    if (item.local_id != null) {
      const parts = str6.split("_");
      str7 = parts.pop();
    }
    if (str7 == null) {
      str7 = "unknown";
    }
    const _HermesInternal3 = HermesInternal;
    return "Update to build " + str7 + " available!";
  } else if (tmp6(7881).NotificationCenterItems.FRIEND_SUGGESTION_CREATED === type) {
    if (RelationshipStore.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl11 = tmp6(1119).intl;
      const obj4 = { user: name1 };
      let str5 = intl11.format(tmp6(1119).t.gZVTy2, obj4);
    } else {
      str5 = item.body;
      if (str5 == null) {
        str5 = "";
      }
    }
    return str5;
  } else if (tmp6(7881).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    if (guildScheduledEvent != null) {
      const name = guildScheduledEvent.name;
    }
    let guild_id;
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
    guild = GuildStore.getGuild(guild_id);
    let name4;
    if (guild != null) {
      name4 = guild.name;
    }
    const tmp27Result = isGuildEventEnded(guildScheduledEvent);
    if (!tmp6Result.isNullOrEmpty(name4)) {
      if (!tmp6Result2.isNullOrEmpty(name)) {
        if (tmp27Result) {
          const intl10 = tmp6(1119).intl;
          const obj5 = { event_name: name, guild_name: name4 };
          let formatResult = intl10.format(tmp6(1119).t.AyvfXR, obj5);
        }
        return formatResult;
      }
      tmp6Result2 = tmp6(2013);
    }
    let str4 = item.body;
    if (str4 == null) {
      str4 = "";
    }
    formatResult = str4;
    tmp6Result = tmp6(2013);
  } else if (tmp6(7881).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    if (null != applicationId) {
      const intl9 = tmp6(1119).intl;
      const obj6 = {
        username: name1,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult1 = intl9.format(tmp6(1119).t["9Dgf1L"], obj6);
    } else {
      const intl8 = tmp6(1119).intl;
      const obj7 = { username: name1 };
      formatResult1 = intl8.format(tmp19, obj7);
    }
    return formatResult1;
  } else if (tmp6(7881).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    if (null != applicationId) {
      const intl7 = tmp6(1119).intl;
      const obj8 = {
        username: name1,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult2 = intl7.format(tmp6(1119).t.nnC1q9, obj8);
    } else {
      const intl6 = tmp6(1119).intl;
      const obj9 = { username: name1 };
      formatResult2 = intl6.format(tmp17, obj9);
    }
    return formatResult2;
  } else if (tmp6(7881).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    if (null != applicationId) {
      const intl5 = tmp6(1119).intl;
      const obj10 = {
        username: name1,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      let formatResult3 = intl5.format(tmp6(1119).t.jXlYiF, obj10);
    } else {
      const intl4 = tmp6(1119).intl;
      const obj11 = { username: name1 };
      formatResult3 = intl4.format(tmp15, obj11);
    }
    return formatResult3;
  } else if (tmp6(7881).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl3 = tmp6(1119).intl;
    const obj12 = {
      username: name1,
      applicationName() {
          return applicationId(renderApplication);
        }
    };
    return intl3.format(tmp6(1119).t["BB/0vn"], obj12);
  } else if (tmp6(7881).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    tmp2(38)(null != applicationId, "Expected application id for " + item.type);
    const intl2 = tmp6(1119).intl;
    const obj13 = {
      username: name1,
      applicationName() {
          return applicationId(renderApplication);
        }
    };
    return intl2.format(tmp6(1119).t["7cqOLI"], obj13);
  } else if (tmp6(7881).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    if (null == applicationId) {
      let body = item.body;
    } else {
      const intl = tmp6(1119).intl;
      const obj14 = {
        username: name1,
        applicationName() {
              return applicationId(renderApplication);
            }
      };
      body = intl.format(tmp6(1119).t.Wi64vN, obj14);
    }
    return body;
  } else {
    let str = item.body;
    if (str == null) {
      str = "";
    }
    return str;
  }
};
export const getFriendRequestSentBody = function getFriendRequestSentBody(user) {
  const intl = util.intl;
  return intl.format(util.t.gZVTy2, { user });
};
