// Module ID: 14886
// Function ID: 112121
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 14886 (_isNativeReflectConstruct)
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
let closure_6 = { hiddenEventsAndStages: [] };
let tmp2 = (PersistedStore) => {
  class LiveChannelNoticesStore {
    constructor() {
      self = this;
      tmp = LiveChannelNoticesStore(this, LiveChannelNoticesStore);
      obj = closure_3(LiveChannelNoticesStore);
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
  let closure_0 = LiveChannelNoticesStore;
  callback2(LiveChannelNoticesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(hiddenEventsAndStages) {

    }
  };
  const items = [obj, , ];
  obj = {
    key: "isLiveChannelNoticeHidden",
    value(arg0) {
      let eventId;
      let stageId;
      ({ eventId, stageId } = arg0);
      let tmp = null == stageId;
      if (!tmp) {
        const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
        const _HermesInternal = HermesInternal;
        tmp = !hiddenEventsAndStages.includes("stage-" + stageId);
      }
      let tmp4 = !tmp;
      if (tmp) {
        let hasItem = null != eventId;
        if (hasItem) {
          const hiddenEventsAndStages2 = closure_6.hiddenEventsAndStages;
          const _HermesInternal2 = HermesInternal;
          hasItem = hiddenEventsAndStages2.includes("event-" + eventId);
        }
        tmp4 = hasItem;
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[2] = obj;
  return callback(LiveChannelNoticesStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "LiveChannelNoticesStore";
tmp2.persistKey = "liveChannelNotices_v2";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  LIVE_CHANNEL_NOTICE_HIDE: function handleHideNotice(arg0) {
    let eventId;
    let stageId;
    ({ eventId, stageId } = arg0);
    if (null != eventId) {
      const prop = closure_6.hiddenEventsAndStages;
      const _HermesInternal2 = HermesInternal;
      prop.push("event-" + eventId);
    } else if (null != stageId) {
      const prop1 = closure_6.hiddenEventsAndStages;
      const _HermesInternal = HermesInternal;
      prop1.push("stage-" + stageId);
    }
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function handleEventUpdate(guildScheduledEvent) {
    guildScheduledEvent = guildScheduledEvent.guildScheduledEvent;
    const combined = "event-" + guildScheduledEvent.id;
    let closure_0 = combined;
    const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
    let tmp2 = !hiddenEventsAndStages.includes(combined);
    if (!tmp2) {
      let tmp4 = guildScheduledEvent.status !== GuildScheduledEventStatus.CANCELED;
      if (tmp4) {
        tmp4 = guildScheduledEvent.status !== GuildScheduledEventStatus.COMPLETED;
      }
      tmp2 = tmp4;
    }
    if (!tmp2) {
      const prop = closure_6.hiddenEventsAndStages;
      closure_6.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  },
  GUILD_SCHEDULED_EVENT_DELETE: function handleEventDelete(guildScheduledEvent) {
    const combined = "event-" + guildScheduledEvent.guildScheduledEvent.id;
    let closure_0 = combined;
    const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_6.hiddenEventsAndStages;
      closure_6.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  },
  STAGE_INSTANCE_DELETE: function handleStageUpdate(instance) {
    const combined = "stage-" + instance.instance.id;
    let closure_0 = combined;
    const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_6.hiddenEventsAndStages;
      closure_6.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/guild_scheduled_events/LiveChannelNoticesStore.tsx");

export default tmp2;
