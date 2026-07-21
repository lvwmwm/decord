// Module ID: 15615
// Function ID: 119243
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15615 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const GuildScheduledEventStatus = arg1(dependencyMap[5]).GuildScheduledEventStatus;
let closure_6 = {};
let tmp2 = (PersistedStore) => {
  class EventBannerStore {
    constructor() {
      self = this;
      tmp = EventBannerStore(this, EventBannerStore);
      obj = closure_3(EventBannerStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = EventBannerStore;
  callback2(EventBannerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(dismissedEventIds) {
      if (null != dismissedEventIds) {
        dismissedEventIds = dismissedEventIds.dismissedEventIds;
        if (null == dismissedEventIds) {
          dismissedEventIds = {};
        }
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isEventDismissed",
    value(arg0) {
      return null != closure_6[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { dismissedEventIds: closure_6 };
    }
  };
  items[2] = obj;
  return callback(EventBannerStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "EventBannerStore";
tmp2.persistKey = "EventBanner";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  EVENT_BANNER_DISMISS: function handleDismiss(eventId) {
    const obj = {};
    const merged = Object.assign(closure_6);
    obj[eventId.eventId] = true;
    closure_6 = obj;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED) {
      if (guildScheduledEvent.status !== GuildScheduledEventStatus.COMPLETED) {
        return false;
      }
    }
    if (null == closure_6[guildScheduledEvent.id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_6);
      const id = guildScheduledEvent.id;
      delete r0[r2];
      closure_6 = obj;
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (null == closure_6[guildScheduledEvent.id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_6);
      const id = guildScheduledEvent.id;
      delete r0[r2];
      closure_6 = obj;
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default tmp2;
