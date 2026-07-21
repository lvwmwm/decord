// Module ID: 10851
// Function ID: 84300
// Name: ChannelLatestMessageLoadingStatsManager
// Dependencies: []

// Module 10851 (ChannelLatestMessageLoadingStatsManager)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const tmp2 = () => {
  class ChannelLatestMessageLoadingStatsManager {
    constructor(arg0) {
      tmp = closure_2(this, ChannelLatestMessageLoadingStatsManager);
      this.label = arg0;
      return;
    }
  }
  const arg1 = ChannelLatestMessageLoadingStatsManager;
  let obj = {
    key: "start",
    value(channelId) {
      this.latestChannelMessagesLoad = { channelId: channelId.channelId, startMs: Date.now() };
    }
  };
  const items = [obj, , ];
  obj = {
    key: "cancel",
    value() {
      this.latestChannelMessagesLoad = undefined;
    }
  };
  items[1] = obj;
  obj = {
    key: "finish",
    value(channelId) {
      const latestChannelMessagesLoad = this.latestChannelMessagesLoad;
      if (null != latestChannelMessagesLoad) {
        if (latestChannelMessagesLoad.channelId === channelId.channelId) {
          const _Date = Date;
          const seenChannelIds2 = ChannelLatestMessageLoadingStatsManager.seenChannelIds;
          const diff = Date.now() - latestChannelMessagesLoad.startMs;
          const tmp11 = !seenChannelIds2.has(channelId.channelId);
          if (tmp11) {
            const seenChannelIds = ChannelLatestMessageLoadingStatsManager.seenChannelIds;
            seenChannelIds.add(channelId.channelId);
          }
          let obj = ChannelLatestMessageLoadingStatsManager(closure_1[3]);
          obj = { load_duration_ms: diff, were_messages_cached: channelId.areMessagesCached, is_first_load: tmp11 };
          obj.trackClickstream(constants.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
          tmp.latestChannelMessagesLoad = undefined;
        }
      }
    }
  };
  items[2] = obj;
  return callback(ChannelLatestMessageLoadingStatsManager, items);
}();
tmp2.seenChannelIds = new Set();
const set = new Set();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default tmp2;
