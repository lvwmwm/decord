// Module ID: 6753
// Function ID: 52624
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: eventScheduledToStartWithin, isGuildEventEnded, scheduledEventSort

// Module 6753 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function scheduledEventSort(status) {
  let id;
  let scheduled_start_time;
  ({ id, scheduled_start_time } = status);
  let str = "\u0001";
  if (isGuildScheduledEventActive(status)) {
    str = "\0";
  }
  return "" + str + "-" + new Date(scheduled_start_time).getTime() + "-" + id;
}
function saveEvent(id) {
  const result = secondaryIndexMap.set(id.id, id);
  closure_14 = closure_14 + 1;
}
function deleteEvent(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  secondaryIndexMap.delete(id);
  delete r4[r3];
  if (flag) {
    delete r1[r3];
  }
  closure_14 = closure_14 + 1;
}
function getEventRecurrenceId(guild_scheduled_event_exception_id) {
  let tmp = guild_scheduled_event_exception_id;
  if (null == guild_scheduled_event_exception_id) {
    tmp = closure_16;
  }
  return tmp;
}
function addGuildEventUser(guild_scheduled_event_id) {
  let flag = arg1;
  let flag2 = arg2;
  if (arg1 === undefined) {
    flag = true;
  }
  if (flag2 === undefined) {
    flag2 = true;
  }
  guild_scheduled_event_id = guild_scheduled_event_id.guild_scheduled_event_id;
  if (null == closure_17[guild_scheduled_event_id]) {
    closure_17[guild_scheduled_event_id] = {};
  }
  const tmp2 = getEventRecurrenceId(guild_scheduled_event_id.guild_scheduled_event_exception_id);
  if (null == closure_17[guild_scheduled_event_id][tmp2]) {
    closure_17[guild_scheduled_event_id][tmp2] = {};
  }
  closure_17[guild_scheduled_event_id][tmp2][guild_scheduled_event_id.user_id] = guild_scheduled_event_id;
  if (flag) {
    let tmp7;
    if (null != closure_18[guild_scheduled_event_id.guild_scheduled_event_id]) {
      tmp7 = tmp6[closure_24(undefined, guild_scheduled_event_id.guild_scheduled_event_exception_id)];
    }
    let num = 0;
    if (null != tmp7) {
      num = tmp7;
    }
    if (null == guild_scheduled_event_id.guild_scheduled_event_exception_id) {
      let num3 = -1;
      if (null == guild_scheduled_event_id.guild_scheduled_event_exception_id) {
        num3 = -1;
      }
      setUserCount(guild_scheduled_event_id.guild_scheduled_event_id, guild_scheduled_event_id.guild_scheduled_event_exception_id, num + num3);
    }
    num3 = 1;
  }
  if (flag2) {
    closure_14 = closure_14 + 1;
  }
}
function removeGuildEventUser(guild_scheduled_event_exception_id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const tmp = getEventRecurrenceId(guild_scheduled_event_exception_id.guild_scheduled_event_exception_id);
  let tmp3;
  if (null != closure_17[guild_scheduled_event_exception_id.guild_scheduled_event_id]) {
    if (null != tmp2[tmp]) {
      tmp3 = tmp4[guild_scheduled_event_exception_id.user_id];
    }
  }
  let tmp6 = !tmp5;
  if (null == tmp3) {
    tmp6 = guild_scheduled_event_exception_id.user_id === id.getId();
  }
  if (!tmp6) {
    let tmp9 = null == tmp8;
    if (!tmp9) {
      tmp9 = null == tmp11;
    }
    if (!tmp9) {
      const user_id = guild_scheduled_event_exception_id.user_id;
      delete r6[r3];
    }
    let tmp16;
    if (null != closure_18[guild_scheduled_event_exception_id.guild_scheduled_event_id]) {
      tmp16 = tmp15[closure_24(undefined, guild_scheduled_event_exception_id.guild_scheduled_event_exception_id)];
    }
    let num = 0;
    if (null != tmp16) {
      num = tmp16;
    }
    if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
      let num3 = 1;
      if (null == guild_scheduled_event_exception_id.guild_scheduled_event_exception_id) {
        num3 = 1;
      }
      setUserCount(guild_scheduled_event_exception_id.guild_scheduled_event_id, guild_scheduled_event_exception_id.guild_scheduled_event_exception_id, num + num3);
      if (flag) {
        closure_14 = closure_14 + 1;
      }
    }
    num3 = -1;
  }
}
function setUserCount(guild_scheduled_event_id, guild_scheduled_event_exception_id, eventCount) {
  if (null == closure_18[guild_scheduled_event_id]) {
    closure_18[guild_scheduled_event_id] = {};
  }
  closure_18[guild_scheduled_event_id][getEventRecurrenceId(guild_scheduled_event_exception_id)] = eventCount;
}
function clearScheduledEventsForGuild(id, arg1) {
  const importDefault = arg1;
  const values = secondaryIndexMap.values(obj.GUILD_EVENT(id));
  const item = values.forEach((id) => {
    callback(id.id, arg1);
  });
}
function handleGuildScheduledEventUpdateOrCreate(guildScheduledEvent) {
  saveEvent(guildScheduledEvent.guildScheduledEvent);
  return true;
}
function handleGuildScheduledEventExceptionCreateOrUpdate(eventException) {
  eventException = eventException.eventException;
  const importDefault = eventException;
  const value = secondaryIndexMap.get(eventException.event_id);
  if (null == value) {
    return false;
  } else {
    const guild_scheduled_event_exceptions = value.guild_scheduled_event_exceptions;
    const findIndexResult = guild_scheduled_event_exceptions.findIndex((event_exception_id) => event_exception_id.event_exception_id === eventException.event_exception_id);
    const items = [];
    HermesBuiltin.arraySpread(value.guild_scheduled_event_exceptions, 0);
    if (findIndexResult < 0) {
      items.push(eventException);
    } else {
      items[findIndexResult] = eventException;
    }
    const obj = {};
    const merged = Object.assign(value);
    obj["guild_scheduled_event_exceptions"] = items;
    saveEvent(obj);
    return true;
  }
}
function isGuildScheduledEventActive(status) {
  let tmp = null != status;
  if (tmp) {
    status = undefined;
    if (null != status) {
      status = status.status;
    }
    tmp = status === constants.ACTIVE;
  }
  return tmp;
}
function isEventUpcoming(guild_scheduled_event) {
  return !set.has(guild_scheduled_event.status);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ GuildScheduledEventStatus: closure_9, GuildScheduledEventStatusDone: closure_10, GuildScheduledEventUserResponses: closure_11 } = arg1(dependencyMap[7]));
let obj = {
  "Bool(true)": null,
  "Bool(true)": null,
  "Bool(true)": null,
  GUILD_EVENT(arg0) {
    return "" + arg0 + "-" + obj.EVENT;
  },
  GUILD_EVENT_ACTIVE(guild_id) {
    return "" + guild_id + "-" + obj.EVENT_ACTIVE;
  },
  GUILD_EVENT_UPCOMING(guild_id) {
    return "" + guild_id + "-" + obj.EVENT_UPCOMING;
  },
  CHANNEL_EVENT(channel_id) {
    return "" + channel_id + "-" + obj.EVENT;
  },
  CHANNEL_EVENT_ACTIVE(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_ACTIVE;
  },
  CHANNEL_EVENT_UPCOMING(channel_id) {
    return "" + channel_id + "-" + obj.EVENT_UPCOMING;
  }
};
const secondaryIndexMap = new arg1(dependencyMap[8]).SecondaryIndexMap(function scheduledEventIndex(status) {
  let channel_id;
  let entity_id;
  let guild_id;
  ({ guild_id, entity_id, channel_id } = status);
  const items = [guild_id];
  if (null != entity_id) {
    items.push(entity_id);
  }
  items.push(obj.GUILD_EVENT(guild_id));
  if (null != channel_id) {
    items.push(obj.CHANNEL_EVENT(channel_id));
  }
  if (isGuildScheduledEventActive(status)) {
    items.push(obj.EVENT_ACTIVE);
    items.push(obj.GUILD_EVENT_ACTIVE(guild_id));
    if (null != channel_id) {
      items.push(obj.CHANNEL_EVENT_ACTIVE(channel_id));
    }
  }
  if (isEventUpcoming(status)) {
    items.push(obj.EVENT_UPCOMING);
    items.push(obj.GUILD_EVENT_UPCOMING(guild_id));
    if (null != channel_id) {
      items.push(obj.CHANNEL_EVENT_UPCOMING(channel_id));
    }
  }
  return items;
}, scheduledEventSort);
let closure_14 = 0;
let closure_15 = [];
let closure_16 = "SERIES";
let closure_17 = {};
let closure_18 = {};
let tmp4 = (Store) => {
  class GuildScheduledEventStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildScheduledEventStore);
      obj = closure_5(GuildScheduledEventStore);
      tmp2 = closure_4;
      if (closure_19()) {
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
  const importDefault = GuildScheduledEventStore;
  callback2(GuildScheduledEventStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8);
    }
  };
  const items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "getGuildScheduledEvent",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = store.get(arg0);
        let tmp4 = null;
        if (null != value) {
          tmp4 = value;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildEventCountByIndex",
    value(arg0) {
      return store.size(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildScheduledEventsForGuild",
    value(arg0) {
      if (null == arg0) {
        let items = [];
      } else {
        items = store.values(arg0);
      }
      return items;
    }
  };
  items[4] = {
    key: "getGuildScheduledEventsByIndex",
    value(arg0) {
      return store.values(arg0);
    }
  };
  items[5] = {
    key: "getRsvpVersion",
    value() {
      return closure_14;
    }
  };
  items[6] = {
    key: "getRsvp",
    value(arg0, arg1, arg2) {
      if (null == arg0) {
        return null;
      } else {
        let tmp5;
        if (null != closure_17[arg0]) {
          if (null != tmp4[closure_24(undefined, arg1)]) {
            tmp5 = tmp6[arg2];
          }
        }
        return tmp5;
      }
    }
  };
  items[7] = {
    key: "isInterestedInEventRecurrence",
    value(arg0, arg1) {
      const id = id.getId();
      const rsvp = this.getRsvp(arg0, null, id);
      const rsvp1 = this.getRsvp(arg0, arg1, id);
      let response;
      if (null != rsvp) {
        response = rsvp.response;
      }
      let tmp5 = response === constants.INTERESTED;
      let response1;
      if (null != rsvp1) {
        response1 = rsvp1.response;
      }
      if (null != rsvp1) {
        response = rsvp1.response;
      }
      if (tmp5) {
        tmp5 = response !== constants.UNINTERESTED;
      }
      if (!tmp5) {
        tmp5 = tmp7;
      }
      return tmp5;
    }
  };
  items[8] = {
    key: "getUserCount",
    value(arg0, arg1) {
      if (null == arg0) {
        return 0;
      } else {
        let tmp3;
        if (null != closure_18[arg0]) {
          tmp3 = tmp2[closure_16];
        }
        let num = 0;
        if (null != tmp3) {
          num = tmp3;
        }
        let diff = num;
        if (null != arg1) {
          let tmp8;
          if (null != closure_18[arg0]) {
            tmp8 = tmp7[arg1];
          }
          let num2 = 0;
          if (null != tmp8) {
            num2 = tmp8;
          }
          diff = num - num2;
        }
        return diff;
      }
    }
  };
  items[9] = {
    key: "hasUserCount",
    value(arg0, arg1) {
      let tmp;
      if (null != closure_18[arg0]) {
        tmp = tmp2[closure_24(undefined, arg1)];
      }
      return null != tmp;
    }
  };
  items[10] = {
    key: "isActive",
    value(arg0) {
      let tmp = null != arg0;
      if (tmp) {
        tmp = callback4(store.get(arg0));
      }
      return tmp;
    }
  };
  items[11] = {
    key: "getActiveEventByChannel",
    value(channel_id) {
      const self = this;
      if (null != channel_id) {
        return self.getGuildScheduledEventsByIndex(closure_12.CHANNEL_EVENT_ACTIVE(channel_id))[0];
      }
    }
  };
  items[12] = {
    key: "getUsersForGuildEvent",
    value(arg0, arg1) {
      if (null == arg0) {
        return {};
      } else {
        let obj;
        if (null != closure_17[arg0]) {
          obj = tmp4[closure_24(undefined, arg1)];
        }
        if (null == obj) {
          obj = {};
        }
        return obj;
      }
    }
  };
  return callback(GuildScheduledEventStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp4.displayName = "GuildScheduledEventStore";
obj = {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    guilds = guilds.guilds;
    secondaryIndexMap.clear();
    let closure_14 = 0;
    let closure_17 = {};
    let closure_18 = {};
    const item = closure_15.forEach(saveEvent);
    const item1 = guilds.forEach((guild_scheduled_events) => {
      const prop = guild_scheduled_events.guild_scheduled_events;
      return prop.forEach((arg0) => {
        callback(arg0);
      });
    });
    return true;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    clearScheduledEventsForGuild(guild.id, false);
    const prop = guild.guild_scheduled_events;
    const item = prop.forEach((arg0) => {
      callback(arg0);
    });
    return true;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearScheduledEventsForGuild(guild.guild.id, true);
    return true;
  },
  FETCH_GUILD_EVENT: function handleFetchGuildEvent(guildScheduledEvent) {
    saveEvent(guildScheduledEvent.guildScheduledEvent);
  },
  FETCH_GUILD_EVENTS_FOR_GUILD: function handleFetchGuildEventsForGuild(guildScheduledEvents) {
    let done;
    guildScheduledEvents = guildScheduledEvents.guildScheduledEvents;
    const values = secondaryIndexMap.values(obj.GUILD_EVENT(guildScheduledEvents.guildId), true);
    const mapped = values.map((id) => id.id);
    const mapped1 = guildScheduledEvents.map((id) => id.id);
    const obj = importDefault(dependencyMap[9]);
    const item = obj.difference(mapped, mapped1).forEach((arg0) => {
      callback(arg0);
    });
    const tmp4 = _createForOfIteratorHelperLoose(guildScheduledEvents);
    let iter = tmp4();
    if (!iter.done) {
      do {
        let tmp5 = closure_22;
        let tmp6 = closure_22(iter.value);
        let iter2 = tmp4();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    return true;
  },
  GUILD_SCHEDULED_EVENT_CREATE: handleGuildScheduledEventUpdateOrCreate,
  GUILD_SCHEDULED_EVENT_UPDATE: handleGuildScheduledEventUpdateOrCreate,
  GUILD_SCHEDULED_EVENT_DELETE: function handleGuildScheduledEventDelete(guildScheduledEvent) {
    deleteEvent(guildScheduledEvent.guildScheduledEvent.id);
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleRsvpCreate(arg0) {
    let guildEventExceptionId;
    let guildEventId;
    let guildId;
    let response;
    let userId;
    ({ userId, guildEventId, guildEventExceptionId } = arg0);
    ({ guildId, response } = arg0);
    let tmp2;
    if (null != closure_17[guildEventId]) {
      if (null != tmp[closure_24(undefined, guildEventExceptionId)]) {
        tmp2 = tmp3[userId];
      }
    }
    if (null != tmp2) {
      removeGuildEventUser(tmp2, false);
    }
    const member = member.getMember(guildId, userId);
    const obj = { user_id: userId, guild_scheduled_event_id: guildEventId };
    let tmp8;
    if (null != member) {
      tmp8 = member;
    }
    obj.member = tmp8;
    obj.guild_scheduled_event_exception_id = guildEventExceptionId;
    obj.response = response;
    addGuildEventUser(obj);
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function handleRsvpDelete(userId) {
    removeGuildEventUser({ user_id: userId.userId, guild_scheduled_event_id: userId.guildEventId, guild_scheduled_event_exception_id: userId.guildEventExceptionId, response: userId.response });
  },
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function handleFetchGuildEventsForUser(guildScheduledEventUsers) {
    const prop = guildScheduledEventUsers.guildScheduledEventUsers;
    const item = prop.forEach((arg0) => {
      callback(arg0, false, false);
    });
    closure_14 = closure_14 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function handleFetchUsersForGuildEventSuccess(guildScheduledEventUsers) {
    const prop = guildScheduledEventUsers.guildScheduledEventUsers;
    const item = prop.forEach((arg0) => {
      callback(arg0, false, false);
    });
    closure_14 = closure_14 + 1;
    return true;
  },
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function handleEventUserCountsFetchSuccess(eventId) {
    eventId = eventId.eventId;
    const importDefault = eventId;
    const counts = eventId.counts;
    const dependencyMap = counts;
    setUserCount(eventId, null, counts.eventCount);
    importDefault(dependencyMap[10]).forEachKey(counts.recurrenceCounts, (arg0) => {
      callback(eventId, arg0, counts.eventCount - counts.recurrenceCounts[arg0]);
    });
  },
  INVITE_RESOLVE_SUCCESS: function handleInviteResolveSuccess(invite) {
    const guild_scheduled_event = invite.invite.guild_scheduled_event;
    let flag = null != guild_scheduled_event;
    if (flag) {
      saveEvent(guild_scheduled_event);
      flag = true;
    }
    return flag;
  },
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: handleGuildScheduledEventExceptionCreateOrUpdate,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: handleGuildScheduledEventExceptionCreateOrUpdate,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function handleGuildScheduledEventExceptionDelete(eventException) {
    eventException = eventException.eventException;
    const importDefault = eventException;
    const value = secondaryIndexMap.get(eventException.event_id);
    if (null == value) {
      return false;
    } else {
      const prop = value.guild_scheduled_event_exceptions;
      const obj = {};
      const found = prop.filter((event_exception_id) => event_exception_id.event_exception_id !== eventException.event_exception_id);
      const merged = Object.assign(value);
      obj["guild_scheduled_event_exceptions"] = found;
      saveEvent(obj);
      return true;
    }
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function handleGuildScheduledEventExceptionsDelete(eventId) {
    const value = secondaryIndexMap.get(eventId.eventId);
    let flag = null != value;
    if (flag) {
      const obj = {};
      const merged = Object.assign(value);
      obj["guild_scheduled_event_exceptions"] = [];
      saveEvent(obj);
      flag = true;
    }
    return flag;
  },
  LOGOUT: function handleLogout() {
    secondaryIndexMap.clear();
    return true;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[12]), obj);
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventStore.tsx");

export default tmp4;
export const StaticGuildEventIndexes = obj;
export { scheduledEventSort };
export { isGuildScheduledEventActive };
export { isEventUpcoming };
export const eventScheduledToStartWithin = function eventScheduledToStartWithin(scheduled_start_time) {
  const time = new Date(scheduled_start_time.scheduled_start_time).getTime();
  return time < Date.now() + 1000 * arg1;
};
export const isGuildEventEnded = function isGuildEventEnded(status) {
  let hasItem = null != status;
  if (hasItem) {
    hasItem = set.has(status.status);
  }
  return hasItem;
};
