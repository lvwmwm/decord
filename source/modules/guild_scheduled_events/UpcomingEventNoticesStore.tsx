// Module ID: 8445
// Function ID: 67410
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8445 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function resetStateForEvent(id) {
  let obj = {};
  const merged = Object.assign(closure_11);
  delete r0[r2];
  closure_11 = obj;
  obj = {};
  const merged1 = Object.assign(closure_12);
  delete r0[r2];
  closure_12 = obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
({ GuildScheduledEventStatus: closure_9, UpcomingGuildEventNoticeTypes: closure_10 } = arg1(dependencyMap[7]));
let closure_11 = {};
let closure_12 = {};
let tmp3 = (PersistedStore) => {
  class UpcomingEventNoticesStore {
    constructor() {
      self = this;
      tmp = closure_2(this, UpcomingEventNoticesStore);
      obj = closure_5(UpcomingEventNoticesStore);
      tmp2 = closure_4;
      if (closure_13()) {
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
  const arg1 = UpcomingEventNoticesStore;
  callback2(UpcomingEventNoticesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(upcomingEventDismissals) {
      this.waitFor(closure_7, closure_8);
      if (null != upcomingEventDismissals) {
        let prop = upcomingEventDismissals.upcomingEventDismissals;
        if (null == prop) {
          prop = {};
        }
        let prop1 = upcomingEventDismissals.upcomingEventSeenTimestamps;
        if (null == prop1) {
          prop1 = {};
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getGuildEventNoticeDismissalTime",
    value(arg0) {
      return closure_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllEventDismissals",
    value() {
      return closure_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUpcomingNoticeSeenTime",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  items[4] = {
    key: "getAllUpcomingNoticeSeenTimes",
    value() {
      return closure_12;
    }
  };
  items[5] = {
    key: "getState",
    value() {
      return { upcomingEventDismissals: closure_11, upcomingEventSeenTimestamps: closure_12 };
    }
  };
  return callback(UpcomingEventNoticesStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp3.displayName = "UpcomingEventNoticesStore";
tmp3.persistKey = "UpcomingEventNotices";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj[eventId.eventId] = Date.now();
    closure_11 = obj;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    let tmp = guildScheduledEvent.status !== constants.CANCELED;
    if (tmp) {
      tmp = guildScheduledEvent.status !== constants.COMPLETED;
    }
    if (!tmp) {
      resetStateForEvent(guildScheduledEvent.id);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    resetStateForEvent(guildScheduledEvent.guildScheduledEvent.id);
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === id.getId()) {
      const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == closure_11[guildEventId]) {
            let obj = arg1(dependencyMap[8]);
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, closure_12[guildEventId], false) === constants2.NEW_EVENT) {
              obj = {};
              const merged = Object.assign(closure_11);
              const _Date = Date;
              obj[guildEventId] = Date.now();
              closure_11 = obj;
            }
          }
        }
      }
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function handleMarkUpcomingNoticeAsSeen(guildEventId) {
    const obj = {};
    const merged = Object.assign(closure_12);
    obj[guildEventId.guildEventId] = Date.now();
    closure_12 = obj;
  }
});
const obj = {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    const obj = {};
    const merged = Object.assign(closure_11);
    obj[eventId.eventId] = Date.now();
    closure_11 = obj;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    let tmp = guildScheduledEvent.status !== constants.CANCELED;
    if (tmp) {
      tmp = guildScheduledEvent.status !== constants.COMPLETED;
    }
    if (!tmp) {
      resetStateForEvent(guildScheduledEvent.id);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    resetStateForEvent(guildScheduledEvent.guildScheduledEvent.id);
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function handleMaybeHideNewEventNotice(guildEventId) {
    guildEventId = guildEventId.guildEventId;
    if (guildEventId.userId === id.getId()) {
      const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == closure_11[guildEventId]) {
            let obj = arg1(dependencyMap[8]);
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, closure_12[guildEventId], false) === constants2.NEW_EVENT) {
              obj = {};
              const merged = Object.assign(closure_11);
              const _Date = Date;
              obj[guildEventId] = Date.now();
              closure_11 = obj;
            }
          }
        }
      }
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function handleMarkUpcomingNoticeAsSeen(guildEventId) {
    const obj = {};
    const merged = Object.assign(closure_12);
    obj[guildEventId.guildEventId] = Date.now();
    closure_12 = obj;
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default tmp3;
