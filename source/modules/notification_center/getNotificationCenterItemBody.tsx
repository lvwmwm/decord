// Module ID: 15025
// Function ID: 113200
// Name: escapeMarkdown
// Dependencies: []
// Exports: default

// Module 15025 (escapeMarkdown)
function escapeMarkdown(name) {
  if (undefined !== name) {
    return name.replace(closure_10, "\\$&");
  }
}
function getFriendRequestItemBody(renderApplication) {
  let applicationId;
  let username;
  ({ username, applicationId } = renderApplication);
  const arg1 = applicationId;
  const importDefault = renderApplication.renderApplication;
  if (null != applicationId) {
    const intl2 = arg1(dependencyMap[5]).intl;
    let obj = {
      username,
      applicationName() {
          return renderApplication(applicationId);
        }
    };
    let formatResult = intl2.format(tmp, obj);
  } else {
    const intl = arg1(dependencyMap[5]).intl;
    obj = { username };
    formatResult = intl.format(tmp2, obj);
  }
  return formatResult;
}
let closure_3 = importDefault(dependencyMap[0]);
const isGuildEventEnded = arg1(dependencyMap[0]).isGuildEventEnded;
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, RelationshipTypes: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = /[\\`*_~|<>[\]:]/g;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/notification_center/getNotificationCenterItemBody.tsx");

export default function getNotificationCenterItemBody(arg0) {
  let item;
  let renderApplication;
  ({ item, renderApplication } = arg0);
  const arg1 = renderApplication;
  let importDefault;
  const other_user = item.other_user;
  let id;
  if (null != other_user) {
    id = other_user.id;
  }
  if (null == id) {
    id = closure_8;
  }
  let obj = importDefault(dependencyMap[6]);
  const other_user2 = item.other_user;
  let id1;
  if (null != other_user2) {
    id1 = other_user2.id;
  }
  const tmp2Result = escapeMarkdown(obj.getName(authStore.getUser(id1)));
  const applicationId = item.applicationId;
  importDefault = applicationId;
  const type = item.type;
  if (arg1(dependencyMap[7]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED === type) {
    let other_users = item.other_users;
    let id2;
    if (null != other_users) {
      const first = other_users[0];
      if (null != first) {
        id2 = first.id;
      }
    }
    const obj12 = importDefault(dependencyMap[6]);
    const tmp54 = escapeMarkdown;
    const tmp54Result = escapeMarkdown(importDefault(dependencyMap[6]).getName(authStore.getUser(id2)));
    const tmp61 = escapeMarkdown;
    const other_users2 = item.other_users;
    let id3;
    if (null != other_users2) {
      if (null != other_users2[1]) {
        id3 = tmp66.id;
      }
    }
    other_users = item.other_users;
    let length;
    const obj13 = importDefault(dependencyMap[6]);
    if (null != other_users) {
      length = other_users.length;
    }
    let num15 = 0;
    if (null != length) {
      num15 = length;
    }
    const bound = Math.max(num15 - 2, 0);
    const intl6 = arg1(dependencyMap[5]).intl;
    obj = { user: tmp54Result, user2: tmp61(importDefault(dependencyMap[6]).getName(authStore.getUser(id3))), count: bound };
    return intl6.format(arg1(dependencyMap[5]).t.g5xyIC, obj);
  } else if (arg1(dependencyMap[7]).NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE === type) {
    let arr;
    if (null != item.local_id) {
      const parts = str6.split("_");
      arr = parts.pop();
    }
    let str8 = "unknown";
    if (null != arr) {
      str8 = arr;
    }
    const _HermesInternal3 = HermesInternal;
    return "Update to build " + str8 + " available!";
  } else if (arg1(dependencyMap[7]).NotificationCenterItems.FRIEND_SUGGESTION_CREATED === type) {
    if (relationshipType.getRelationshipType(id) === constants.PENDING_OUTGOING) {
      const intl5 = arg1(dependencyMap[5]).intl;
      obj = { user: tmp2Result };
      let str5 = intl5.format(arg1(dependencyMap[5]).t.gZVTy2, obj);
    } else {
      const body4 = item.body;
      str5 = "";
      if (null != body4) {
        str5 = body4;
      }
    }
    return str5;
  } else if (arg1(dependencyMap[7]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED === type) {
    const guild_scheduled_event_id = item.guild_scheduled_event_id;
    let guildScheduledEvent = null;
    if (null != guild_scheduled_event_id) {
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guild_scheduled_event_id);
    }
    if (null != guildScheduledEvent) {
      let name = guildScheduledEvent.name;
    }
    let guild_id;
    if (null != guildScheduledEvent) {
      guild_id = guildScheduledEvent.guild_id;
    }
    const guild = guild.getGuild(guild_id);
    name = undefined;
    if (null != guild) {
      name = guild.name;
    }
    let tmp38;
    if (null != guildScheduledEvent) {
      tmp38 = guildScheduledEvent;
    }
    let obj7 = arg1(dependencyMap[8]);
    if (!obj7.isNullOrEmpty(name)) {
      if (!obj9.isNullOrEmpty(name)) {
        if (tmp37Result) {
          const intl4 = arg1(dependencyMap[5]).intl;
          const obj1 = { event_name: escapeMarkdown(name), guild_name: escapeMarkdown(name) };
          let formatResult = intl4.format(arg1(dependencyMap[5]).t.AyvfXR, obj1);
        }
        return formatResult;
      }
      const obj9 = arg1(dependencyMap[8]);
    }
    const body3 = item.body;
    let str4 = "";
    if (null != body3) {
      str4 = body3;
    }
    formatResult = str4;
    const tmp37 = isGuildEventEnded;
    const tmp37Result = isGuildEventEnded(tmp38);
  } else if (arg1(dependencyMap[7]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS === type) {
    const obj2 = { username: tmp2Result, applicationId, renderApplication, withApplication: arg1(dependencyMap[5]).t.9Dgf1L, withDefault: arg1(dependencyMap[5]).t.uIomXw };
    return getFriendRequestItemBody(obj2);
  } else if (arg1(dependencyMap[7]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED === type) {
    const obj3 = { username: tmp2Result, applicationId, renderApplication, withApplication: arg1(dependencyMap[5]).t.nnC1q9, withDefault: arg1(dependencyMap[5]).t.5Uzkdp };
    return getFriendRequestItemBody(obj3);
  } else if (arg1(dependencyMap[7]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED === type) {
    const obj4 = { username: tmp2Result, applicationId, renderApplication, withApplication: arg1(dependencyMap[5]).t.jXlYiF, withDefault: arg1(dependencyMap[5]).t.McYRBk };
    return getFriendRequestItemBody(obj4);
  } else if (arg1(dependencyMap[7]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED === type) {
    const _HermesInternal2 = HermesInternal;
    importDefault(dependencyMap[9])(null != applicationId, "Expected application id for " + item.type);
    const intl3 = arg1(dependencyMap[5]).intl;
    const obj5 = {
      username: tmp2Result,
      applicationName() {
          return renderApplication(applicationId);
        }
    };
    return intl3.format(arg1(dependencyMap[5]).t.BB/0vn, obj5);
  } else if (arg1(dependencyMap[7]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS === type) {
    const _HermesInternal = HermesInternal;
    importDefault(dependencyMap[9])(null != applicationId, "Expected application id for " + item.type);
    const intl2 = arg1(dependencyMap[5]).intl;
    const obj6 = {
      username: tmp2Result,
      applicationName() {
          return renderApplication(applicationId);
        }
    };
    return intl2.format(arg1(dependencyMap[5]).t.7cqOLI, obj6);
  } else if (arg1(dependencyMap[7]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED === type) {
    if (null == applicationId) {
      let body2 = item.body;
    } else {
      const intl = arg1(dependencyMap[5]).intl;
      obj7 = {
        username: tmp2Result,
        applicationName() {
              return renderApplication(applicationId);
            }
      };
      body2 = intl.format(arg1(dependencyMap[5]).t.Wi64vN, obj7);
    }
    return body2;
  } else {
    const body = item.body;
    let str = "";
    if (null != body) {
      str = body;
    }
    return str;
  }
};
