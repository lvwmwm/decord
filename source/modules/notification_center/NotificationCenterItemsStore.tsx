// Module ID: 6882
// Function ID: 54539
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4044, 6758, 3768, 3767, 1849, 653, 6883, 4351, 6884, 21, 566, 686, 2]

// Module 6882 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import initialize from "initialize";
import closure_6 from "set";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import { isGuildEventEnded } from "_isNativeReflectConstruct";
import closure_10 from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
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
function _validate(id) {
  return null != id.id && null != id.type;
}
function handleReset() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.keepLocalItems;
  if (flag === undefined) {
    flag = false;
  }
  obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [], notifCenterIds: new Set() };
  if (flag) {
    let prop = obj.notifCenterLocalItems;
  } else {
    prop = [];
  }
  obj.notifCenterLocalItems = prop;
  obj.paginationHasMore = true;
  obj.paginationCursor = undefined;
  obj.notifCenterActive = false;
  obj.notifCenterTabFocused = false;
}
function handleResetRemoteState() {
  handleReset({ keepLocalItems: true });
}
function toNotificationCenterItem(item) {
  let tmp = item.item_enum === require(6883) /* NotificationCenterScenes */.ItemEnum.FIRST_MESSAGE;
  if (tmp) {
    tmp = item.type === require(6883) /* NotificationCenterScenes */.NotificationCenterItems.LIFECYCLE_ITEM;
  }
  if (tmp) {
    item.deeplink = "https://discord.com/feature/composeMessage";
  }
  const obj = {};
  const merged = Object.assign(item);
  obj["kind"] = "notification-center-item";
  let messageRecord;
  if (null != item.message) {
    messageRecord = require(4351) /* createMinimalMessageRecord */.createMessageRecord(item.message);
    const obj2 = require(4351) /* createMinimalMessageRecord */;
  }
  obj["message"] = messageRecord;
  let id;
  if (null != item.application) {
    id = item.application.id;
  }
  obj["applicationId"] = id;
  return obj;
}
function handleAddItem(type) {
  if ("NOTIFICATION_CENTER_ITEM_CREATE" === type.type) {
    let item = toNotificationCenterItem(type.item);
  } else {
    item = type.item;
  }
  if (obj.initialized) {
    if (_validate(item)) {
      const notifCenterIds = obj.notifCenterIds;
      if (!notifCenterIds.has(item.id)) {
        const notifCenterIds2 = obj.notifCenterIds;
        notifCenterIds2.add(item.id);
        const items = [item];
        HermesBuiltin.arraySpread(obj.notifCenterItems, 1);
        obj.notifCenterItems = items;
        const notifCenterItems = obj.notifCenterItems;
        const sorted = notifCenterItems.sort((id, id2) => outer1_1(outer1_2[14]).compare(id2.id, id.id));
      }
    }
  }
  return false;
}
function updateItemsAck(ids, arg1) {
  let closure_0 = ids;
  let closure_1 = arg1;
  const notifCenterItems = obj.notifCenterItems;
  const mapped = notifCenterItems.map((id) => {
    let tmp = id;
    if (ids.includes(id.id)) {
      const obj = {};
      const merged = Object.assign(id);
      obj["acked"] = closure_1;
      tmp = obj;
    }
    return tmp;
  });
  obj.notifCenterItems = mapped.filter(_validate);
}
function isItem(type, arg1, arg2) {
  let tmp = type.type === arg1;
  if (tmp) {
    const other_user = type.other_user;
    let id;
    if (null != other_user) {
      id = other_user.id;
    }
    tmp = id === arg2;
  }
  return tmp;
}
function isGameRelationshipItem(applicationId) {
  let tmp = isItem(applicationId, arg1, arg2);
  if (tmp) {
    tmp = applicationId.applicationId === arg3;
  }
  return tmp;
}
function handleRelationshipAddOrUpdate(relationship) {
  let importDefault;
  let type;
  let user;
  let userIgnored;
  relationship = relationship.relationship;
  ({ id: importDefault, type, userIgnored, user } = relationship);
  const since = relationship.since;
  if (type === RelationshipTypes.PENDING_INCOMING) {
    if (!relationship.isSpamRequest) {
      if (!userIgnored) {
        if (null == since) {
          return null;
        } else if (null != user) {
          user = authStore.getUser(user.id);
          if (null != user) {
            const items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0);
            obj = relationship(user[13]);
            items[arraySpreadResult] = obj.incomingFriendRequestLocalItem(user, since, tmp);
            const sum = arraySpreadResult + 1;
            obj.notifCenterLocalItems = items;
          }
        }
      }
    }
  }
  let tmp11 = type !== RelationshipTypes.FRIEND;
  if (!tmp11) {
    tmp11 = null == relationship.user;
  }
  if (!tmp11) {
    tmp11 = userIgnored;
  }
  if (!tmp11) {
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.map((id) => {
      let tmp = id;
      if (outer1_21(id, relationship(user[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, relationship.user.id)) {
        const obj = {};
        const merged = Object.assign(id);
        obj["acked"] = true;
        obj["forceUnacked"] = false;
        const _HermesInternal = HermesInternal;
        obj["local_id"] = "incoming_friend_requests_accepted_" + user.id + "_" + id.id;
        obj["type"] = relationship(user[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED;
        tmp = obj;
      }
      return tmp;
    });
  }
  if (tmp14) {
    const prop1 = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop1.filter((arg0) => {
      let tmp = outer1_21(arg0, relationship(user[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, closure_1);
      if (!tmp) {
        tmp = outer1_21(arg0, relationship(user[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, closure_1);
      }
      if (!tmp) {
        tmp = outer1_21(arg0, relationship(user[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, closure_1);
      }
      if (!tmp) {
        tmp = outer1_21(arg0, relationship(user[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, closure_1);
      }
      return !tmp;
    });
  }
}
function updateGuildEvent(guildScheduledEvent) {
  let closure_0 = guildScheduledEvent;
  if (isGuildEventEnded(guildScheduledEvent)) {
    const notifCenterItems = obj.notifCenterItems;
    obj.notifCenterItems = notifCenterItems.map((type) => {
      let tmp = type;
      if (type.type === guildScheduledEvent(outer1_2[11]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED) {
        tmp = type;
        if (type.guild_scheduled_event_id === guildScheduledEvent.id) {
          const obj = {};
          const merged = Object.assign(type);
          obj["disable_action"] = true;
          tmp = obj;
        }
      }
      return tmp;
    });
  }
}
let obj = { loading: false, initialized: false, errored: false, isDataStale: false, notifCenterItems: [], staleNotifCenterItems: [] };
let set = new Set();
obj.notifCenterIds = set;
obj.notifCenterLocalItems = [];
obj.paginationHasMore = true;
obj.paginationCursor = undefined;
obj.notifCenterActive = false;
obj.notifCenterTabFocused = false;
let tmp3 = ((PersistedStore) => {
  class NotificationCenterItemsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, NotificationCenterItemsStore);
      obj = outer1_6(NotificationCenterItemsStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
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
  callback2(NotificationCenterItemsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(notifCenterItems) {
      this.waitFor(outer1_12, outer1_11, outer1_8);
      if (null != notifCenterItems) {
        notifCenterItems = notifCenterItems.notifCenterItems;
        const mapped = notifCenterItems.map((message) => {
          const obj = {};
          const merged = Object.assign(message);
          let tmp2;
          if (null != message.message) {
            const prototype = outer2_10.prototype;
            tmp2 = new outer2_10(message.message);
          }
          obj["message"] = tmp2;
          return obj;
        });
        if (mapped.length > 0) {
          let obj = {};
          let merged = Object.assign(outer1_14);
          obj["initialized"] = true;
          obj["isDataStale"] = true;
          obj["notifCenterItems"] = [];
          obj["staleNotifCenterItems"] = mapped;
          outer1_14 = obj;
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      function pack(message) {
        const obj = {};
        const merged = Object.assign(message);
        let toJSResult;
        if (null != message.message) {
          message = message.message;
          toJSResult = message.toJS();
        }
        obj["message"] = toJSResult;
        return obj;
      }
      let obj = {};
      let merged = Object.assign(outer1_14);
      const notifCenterItems = outer1_14.notifCenterItems;
      obj["notifCenterItems"] = notifCenterItems.map(pack);
      const prop = outer1_14.staleNotifCenterItems;
      obj["staleNotifCenterItems"] = prop.map(pack);
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "loading",
    get() {
      return outer1_14.loading;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "initialized",
    get() {
      return outer1_14.initialized;
    }
  };
  items[4] = {
    key: "items",
    get() {
      return outer1_14.isDataStale ? outer1_14.staleNotifCenterItems : outer1_14.notifCenterItems;
    }
  };
  items[5] = {
    key: "hasMore",
    get() {
      return outer1_14.paginationHasMore;
    }
  };
  items[6] = {
    key: "cursor",
    get() {
      return outer1_14.paginationCursor;
    }
  };
  items[7] = {
    key: "errored",
    get() {
      return outer1_14.errored;
    }
  };
  items[8] = {
    key: "active",
    get() {
      return outer1_14.notifCenterActive;
    }
  };
  items[9] = {
    key: "localItems",
    get() {
      return outer1_14.notifCenterLocalItems;
    }
  };
  items[10] = {
    key: "tabFocused",
    get() {
      return outer1_14.notifCenterTabFocused;
    }
  };
  return callback(NotificationCenterItemsStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "NotificationCenterItemsStore";
tmp3.persistKey = "NotificationCenterItemsStore_v2";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    const items = [];
    const set = new Set();
    relationships = relationships.relationships;
    let item = relationships.forEach((arg0) => {
      let id;
      let is_spam_request;
      let origin_application_id;
      let since;
      let type;
      let user_ignored;
      ({ id, since, user_ignored, type, is_spam_request, origin_application_id } = arg0);
      if (user_ignored) {
        set.add(id);
      }
      if (type === outer1_13.PENDING_INCOMING) {
        if (!is_spam_request) {
          if (!user_ignored) {
            if (null != since) {
              const user = outer1_12.getUser(id);
              if (null == user) {
                return null;
              } else {
                items.push(items(outer1_2[13]).incomingFriendRequestLocalItem(user, since, origin_application_id));
              }
            }
          }
        }
      }
      return null;
    });
    const gameRelationships = relationships.gameRelationships;
    const item1 = gameRelationships.forEach((id) => {
      id = id.id;
      if (id.type === outer1_13.PENDING_INCOMING) {
        if (!set.has(id)) {
          const user = outer1_12.getUser(id);
          if (null != user) {
            items.push(items(outer1_2[13]).incomingGameFriendRequestLocalItem(user, tmp2, tmp));
            const obj = items(outer1_2[13]);
          }
        }
      }
    });
    const guilds = relationships.guilds;
    const item2 = guilds.forEach((guild_scheduled_events) => {
      const prop = guild_scheduled_events.guild_scheduled_events;
      const item = prop.forEach((arg0) => {
        outer2_23(arg0);
      });
    });
    obj.notifCenterLocalItems = items;
  },
  LOGOUT() {
    handleReset();
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function handleAck(ids) {
    updateItemsAck(ids.ids, true);
  },
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function handleAckFailure(ids) {
    updateItemsAck(ids.ids, false);
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleGuildScheduledEventUpdate(guildScheduledEvent) {
    updateGuildEvent(guildScheduledEvent.guildScheduledEvent);
  },
  NOTIFICATION_CENTER_ITEM_CREATE: handleAddItem,
  NOTIFICATION_CENTER_ITEM_DELETE: function handleDelete(id) {
    id = id.id;
    const notifCenterIds = obj.notifCenterIds;
    if (notifCenterIds.has(id)) {
      const notifCenterIds2 = obj.notifCenterIds;
      notifCenterIds2.delete(id);
      const notifCenterItems = obj.notifCenterItems;
      obj.notifCenterItems = notifCenterItems.filter((id) => id.id !== id);
    } else {
      return false;
    }
  },
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: handleAddItem,
  LOAD_NOTIFICATION_CENTER_ITEMS: function handleLoad() {
    obj.loading = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function handleLoadFailure() {
    obj.loading = false;
    obj.initialized = true;
    obj.errored = true;
  },
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function handleLoadSuccess(arg0) {
    let cursor;
    let items;
    ({ items, cursor } = arg0);
    if (obj.loading) {
      obj.loading = false;
      obj.initialized = true;
      obj.errored = false;
      obj.isDataStale = false;
      let hasItem = null != cursor;
      if (hasItem) {
        let notifCenterIds = obj.notifCenterIds;
        hasItem = notifCenterIds.has(cursor);
      }
      if (!hasItem) {
        let tmp10 = items.length > 0;
        if (tmp10) {
          tmp10 = tmp;
        }
        obj.paginationHasMore = tmp10;
        let tmp12;
        if (items.length > 0) {
          tmp12 = cursor;
        }
        obj.paginationCursor = tmp12;
        const tmp11 = obj;
        const tmp9 = obj;
      }
      items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterItems, 0);
      const mapped = items.map(toNotificationCenterItem);
      arraySpreadResult = HermesBuiltin.arraySpread(mapped.filter((id) => {
        const notifCenterIds = outer1_14.notifCenterIds;
        return !notifCenterIds.has(id.id);
      }), arraySpreadResult);
      obj.notifCenterItems = items;
      const notifCenterItems = obj.notifCenterItems;
      const sorted = notifCenterItems.sort((id, id2) => outer1_1(outer1_2[14]).compare(id2.id, id.id));
      const item = items.forEach((id) => {
        const notifCenterIds = outer1_14.notifCenterIds;
        return notifCenterIds.add(id.id);
      });
    }
  },
  RESET_NOTIFICATION_CENTER() {
    handleResetRemoteState();
  },
  NOTIFICATION_CENTER_SET_ACTIVE: function handleSetActive(active) {
    obj.notifCenterActive = active.active;
  },
  NOTIFICATION_CENTER_TAB_FOCUSED: function handleTabFocused(focused) {
    obj.notifCenterTabFocused = focused.focused;
  },
  RELATIONSHIP_ADD: handleRelationshipAddOrUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipAddOrUpdate,
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(arg0) {
    let closure_0 = arg0;
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((arg0) => {
      const tmp = outer1_21(arg0, lib(outer1_2[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, lib.relationship.id);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !outer1_21(arg0, lib(outer1_2[11]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED, lib.relationship.id);
      }
      return tmp2;
    });
  },
  GAME_RELATIONSHIP_ADD: function handleGameRelationshipAddOrUpdate(gameRelationship) {
    let applicationId;
    let since;
    let type;
    gameRelationship = gameRelationship.gameRelationship;
    const id = gameRelationship.id;
    ({ type, since, applicationId } = gameRelationship);
    if (blockedOrIgnored.isBlockedOrIgnored(id)) {
      return false;
    } else if (type === RelationshipTypes.PENDING_INCOMING) {
      const user = authStore.getUser(id);
      if (tmp7) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(obj.notifCenterLocalItems, 0);
        obj = id(6884);
        items[arraySpreadResult] = obj.incomingGameFriendRequestLocalItem(user, since, applicationId);
        const sum = arraySpreadResult + 1;
        obj.notifCenterLocalItems = items;
      }
      tmp7 = null != since && null != user;
    } else if (type !== RelationshipTypes.FRIEND) {
      return false;
    } else {
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.map((id) => {
        let tmp = id;
        if (outer1_22(id, id(outer1_2[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, id, applicationId)) {
          const obj = {};
          const merged = Object.assign(id);
          obj["acked"] = true;
          obj["forceUnacked"] = false;
          const _HermesInternal = HermesInternal;
          obj["local_id"] = "incoming_game_friend_requests_accepted_" + id + "_" + id.id;
          obj["type"] = id(outer1_2[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
          tmp = obj;
        }
        return tmp;
      });
    }
  },
  GAME_RELATIONSHIP_REMOVE: function handleGameRelationshipRemove(arg0) {
    let importDefault;
    let require;
    ({ userId: require, applicationId: importDefault } = arg0);
    const prop = obj.notifCenterLocalItems;
    obj.notifCenterLocalItems = prop.filter((arg0) => {
      const tmp = outer1_22(arg0, outer1_0(outer1_2[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, closure_0, closure_1);
      let tmp2 = !tmp;
      if (!tmp) {
        tmp2 = !outer1_22(arg0, outer1_0(outer1_2[11]).NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, closure_0, closure_1);
      }
      return tmp2;
    });
  },
  NOTIFICATION_CENTER_ITEM_COMPLETED: function handleCompleted(item_enum) {
    item_enum = item_enum.item_enum;
    const notifCenterItems = obj.notifCenterItems;
    const mapped = notifCenterItems.map((item_enum) => {
      let tmp = item_enum;
      if (item_enum.item_enum === item_enum) {
        const obj = {};
        const merged = Object.assign(item_enum);
        obj["completed"] = true;
        obj["acked"] = true;
        tmp = obj;
      }
      return tmp;
    });
    obj.notifCenterItems = mapped.filter(_validate);
  },
  SET_RECENT_MENTIONS_FILTER() {
    handleResetRemoteState();
  },
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function handleMobileNativeUpdate(newBuild) {
    newBuild = newBuild.newBuild;
    let _require;
    if (null !== newBuild) {
      const obj = _require(6884);
      const result = obj.mobileNativeUpdateAvailableLocalItem(newBuild);
      _require = result;
      const prop = obj.notifCenterLocalItems;
      if (undefined === prop.find((local_id) => local_id.local_id === _undefined.local_id)) {
        const prop1 = obj.notifCenterLocalItems;
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(prop1.filter((type) => type.type !== _undefined.type), 0);
        items[arraySpreadResult] = result;
        const sum = arraySpreadResult + 1;
        obj.notifCenterLocalItems = items;
      }
    }
  },
  APPLICATIONS_FETCH_SUCCESS: function handleFetchApplicationsSuccess(unknownApplicationIds) {
    unknownApplicationIds = unknownApplicationIds.unknownApplicationIds;
    let set;
    if (null != unknownApplicationIds) {
      const _Set = Set;
      set = new Set(unknownApplicationIds);
      const prop = obj.notifCenterLocalItems;
      obj.notifCenterLocalItems = prop.filter((applicationId) => {
        let tmp = null == applicationId.applicationId;
        if (!tmp) {
          tmp = !set.has(applicationId.applicationId);
        }
        return tmp;
      });
    }
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/notification_center/NotificationCenterItemsStore.tsx");

export default tmp3;
