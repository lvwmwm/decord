// Module ID: 6697
// Function ID: 51853
// Name: getClickstreamDrainEvent
// Dependencies: []
// Exports: getClickstreamDrainEvent

// Module 6697 (getClickstreamDrainEvent)
const AnalyticEvents = require(dependencyMap[0]).AnalyticEvents;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_analytics/clickstream/ClickstreamEvents.tsx");

export const getClickstreamDrainEvent = function getClickstreamDrainEvent(first, arr) {
  const AnalyticEvents = new Date();
  if (AnalyticEvents.GUILD_VIEWED_CLICKSTREAM === first) {
    let obj = {
      time_minus: arr.map((timestamp) => {
          timestamp = timestamp.timestamp;
          const time = date.getTime();
          return time - timestamp.getTime();
        }),
      rtc_states: arr.map((rtc_state) => rtc_state.rtc_state),
      guild_ids: arr.map((guild_id) => guild_id.guild_id)
    };
    return obj;
  } else if (AnalyticEvents.FRIENDS_LIST_VIEWED_CLICKSTREAM === first) {
    obj = {
      time_minus: arr.map((timestamp) => {
          timestamp = timestamp.timestamp;
          const time = date.getTime();
          return time - timestamp.getTime();
        }),
      rtc_states: arr.map((rtc_state) => rtc_state.rtc_state),
      tab_opened: arr.map((tab_opened) => tab_opened.tab_opened),
      num_friends: arr.map((num_friends) => num_friends.num_friends),
      now_playing_visible: arr.map((now_playing_visible) => now_playing_visible.now_playing_visible),
      now_playing_num_cards: arr.map((now_playing_num_cards) => now_playing_num_cards.now_playing_num_cards)
    };
    return obj;
  } else if (AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM === first) {
    const obj1 = {
      time_minus: arr.map((timestamp) => {
          timestamp = timestamp.timestamp;
          const time = date.getTime();
          return time - timestamp.getTime();
        }),
      rtc_states: arr.map((rtc_state) => rtc_state.rtc_state),
      channel_ids: arr.map((channel_id) => channel_id.channel_id),
      channel_types: arr.map((channel_type) => channel_type.channel_type)
    };
    return obj1;
  } else if (AnalyticEvents.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM === first) {
    obj = {
      time_minus: arr.map((timestamp) => {
          timestamp = timestamp.timestamp;
          const time = date.getTime();
          return time - timestamp.getTime();
        }),
      rtc_states: arr.map((rtc_state) => rtc_state.rtc_state),
      load_duration_ms: arr.map((load_duration_ms) => load_duration_ms.load_duration_ms),
      were_messages_cached: arr.map((were_messages_cached) => were_messages_cached.were_messages_cached),
      is_first_load: arr.map((is_first_load) => is_first_load.is_first_load)
    };
    return obj;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("getClickstreamDrainEvent: Unknown event: " + first);
    throw error;
  }
  const date = new Date();
};
