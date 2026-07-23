// Module ID: 15013
// Function ID: 114366
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1354, 566, 686, 2]

// Module 15013 (_isNativeReflectConstruct)
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
let closure_6 = { hiddenEventsAndStages: [] };
let tmp2 = ((PersistedStore) => {
  class LiveChannelNoticesStore {
    constructor() {
      self = this;
      tmp = LiveChannelNoticesStore(this, LiveChannelNoticesStore);
      obj = outer1_3(LiveChannelNoticesStore);
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
  callback2(LiveChannelNoticesStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(hiddenEventsAndStages) {
      if (tmp) {
        const outer1_6 = hiddenEventsAndStages;
      }
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
        const hiddenEventsAndStages = outer1_6.hiddenEventsAndStages;
        const _HermesInternal = HermesInternal;
        tmp = !hiddenEventsAndStages.includes("stage-" + stageId);
      }
      let tmp4 = !tmp;
      if (tmp) {
        let hasItem = null != eventId;
        if (hasItem) {
          const hiddenEventsAndStages2 = outer1_6.hiddenEventsAndStages;
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
      return outer1_6;
    }
  };
  items[2] = obj;
  return callback(LiveChannelNoticesStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "LiveChannelNoticesStore";
tmp2.persistKey = "liveChannelNotices_v2";
tmp2 = new tmp2(require("dispatcher"), {
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
    const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_6.hiddenEventsAndStages;
      closure_6.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  },
  STAGE_INSTANCE_DELETE: function handleStageUpdate(instance) {
    const combined = "stage-" + instance.instance.id;
    const hiddenEventsAndStages = closure_6.hiddenEventsAndStages;
    if (hiddenEventsAndStages.includes(combined)) {
      const prop = closure_6.hiddenEventsAndStages;
      closure_6.hiddenEventsAndStages = prop.filter((arg0) => arg0 !== combined);
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_scheduled_events/LiveChannelNoticesStore.tsx");

export default tmp2;
