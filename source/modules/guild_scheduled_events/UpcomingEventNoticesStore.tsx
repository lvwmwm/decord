// Module ID: 8500
// Function ID: 67710
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 6758, 1354, 8501, 566, 686, 2]

// Module 8500 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "GUILD_EVENT_MAX_NAME_LENGTH";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_10;
let closure_9;
const require = arg1;
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
  const merged = Object.assign(obj);
  delete tmp[tmp2];
  obj = {};
  const merged1 = Object.assign(obj);
  delete tmp[tmp2];
}
({ GuildScheduledEventStatus: closure_9, UpcomingGuildEventNoticeTypes: closure_10 } = GUILD_EVENT_MAX_NAME_LENGTH);
let closure_11 = {};
let closure_12 = {};
let tmp3 = ((PersistedStore) => {
  class UpcomingEventNoticesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, UpcomingEventNoticesStore);
      obj = outer1_5(UpcomingEventNoticesStore);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UpcomingEventNoticesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(upcomingEventDismissals) {
      this.waitFor(outer1_7, outer1_8);
      if (null != upcomingEventDismissals) {
        let prop = upcomingEventDismissals.upcomingEventDismissals;
        if (null == prop) {
          prop = {};
        }
        const outer1_11 = prop;
        let prop1 = upcomingEventDismissals.upcomingEventSeenTimestamps;
        if (null == prop1) {
          prop1 = {};
        }
        const outer1_12 = prop1;
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getGuildEventNoticeDismissalTime",
    value(arg0) {
      return outer1_11[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getAllEventDismissals",
    value() {
      return outer1_11;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getUpcomingNoticeSeenTime",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  items[4] = {
    key: "getAllUpcomingNoticeSeenTimes",
    value() {
      return outer1_12;
    }
  };
  items[5] = {
    key: "getState",
    value() {
      return { upcomingEventDismissals: outer1_11, upcomingEventSeenTimestamps: outer1_12 };
    }
  };
  return callback(UpcomingEventNoticesStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "UpcomingEventNoticesStore";
tmp3.persistKey = "UpcomingEventNotices";
tmp3 = new tmp3(require("dispatcher"), {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function handleHideNotice(eventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[eventId.eventId] = Date.now();
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
      guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(guildEventId);
      if (null != guildScheduledEvent) {
        if (guildScheduledEvent.status === constants.SCHEDULED) {
          if (null == obj[guildEventId]) {
            obj = require(8501) /* getNextShownUpcomingEventNoticeType */;
            if (obj.getNextShownUpcomingEventNoticeType(guildScheduledEvent, undefined, table[guildEventId], false) === constants2.NEW_EVENT) {
              obj = {};
              const merged = Object.assign(obj);
              const _Date = Date;
              obj[guildEventId] = Date.now();
            }
          }
        }
      }
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function handleMarkUpcomingNoticeAsSeen(guildEventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[guildEventId.guildEventId] = Date.now();
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_scheduled_events/UpcomingEventNoticesStore.tsx");

export default tmp3;
