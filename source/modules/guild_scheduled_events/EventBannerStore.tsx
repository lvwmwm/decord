// Module ID: 15740
// Function ID: 121459
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1354, 566, 686, 2]

// Module 15740 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { GuildScheduledEventStatus } from "GUILD_EVENT_MAX_NAME_LENGTH";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = {};
let tmp2 = ((PersistedStore) => {
  class EventBannerStore {
    constructor() {
      self = this;
      tmp = EventBannerStore(this, EventBannerStore);
      obj = outer1_3(EventBannerStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(EventBannerStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(dismissedEventIds) {
      if (null != dismissedEventIds) {
        dismissedEventIds = dismissedEventIds.dismissedEventIds;
        if (null == dismissedEventIds) {
          dismissedEventIds = {};
        }
        const outer1_6 = dismissedEventIds;
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isEventDismissed",
    value(arg0) {
      return null != outer1_6[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { dismissedEventIds: outer1_6 };
    }
  };
  items[2] = obj;
  return callback(EventBannerStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "EventBannerStore";
tmp2.persistKey = "EventBanner";
tmp2 = new tmp2(require("dispatcher"), {
  EVENT_BANNER_DISMISS: function handleDismiss(eventId) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[eventId.eventId] = true;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED) {
      if (guildScheduledEvent.status !== GuildScheduledEventStatus.COMPLETED) {
        return false;
      }
    }
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guildScheduledEvent.id;
      delete tmp[tmp2];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guildScheduledEvent.id;
      delete tmp[tmp2];
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default tmp2;
