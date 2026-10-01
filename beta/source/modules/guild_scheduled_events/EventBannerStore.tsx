// Module ID: 16878
// Function ID: 16879
// Name: EventBannerStore
// Dependencies: [2051, 504, 573, 2]

// Module 16878 (EventBannerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2051 */;
import size from "module_2" /* 2 */;

const GuildScheduledEventStatus = GuildScheduledEventsConstants.GuildScheduledEventStatus;
let dismissedEventIds = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class EventBannerStore extends PersistedStore {
  initialize(dismissedEventIds) {
    if (null != dismissedEventIds) {
      dismissedEventIds = dismissedEventIds.dismissedEventIds;
      if (dismissedEventIds == null) {
        dismissedEventIds = {};
      }
    }
  }
  isEventDismissed(id) {
    return null != obj[id];
  }
  getState() {
    dismissedEventIds = { dismissedEventIds };
    return dismissedEventIds;
  }
}
const prototype = EventBannerStore.prototype;
EventBannerStore.displayName = "EventBannerStore";
EventBannerStore.persistKey = "EventBanner";
dismissedEventIds = {
  EVENT_BANNER_DISMISS: function handleDismiss(eventId) {
    const obj = {};
    eventId = eventId.eventId;
    const merged = Object.assign(obj);
    obj[eventId] = true;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    let obj;
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED) {
      if (guildScheduledEvent.status !== tmp.COMPLETED) {
        return false;
      }
    }
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[guildScheduledEvent.id];
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    let obj;
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    if (null == obj[guildScheduledEvent.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      delete obj[guildScheduledEvent.id];
    }
  }
};
const eventBannerStore = new EventBannerStore(DispatcherDefault, dismissedEventIds);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/EventBannerStore.tsx");

export default eventBannerStore;
