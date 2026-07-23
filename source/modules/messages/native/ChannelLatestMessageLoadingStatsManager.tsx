// Module ID: 10862
// Function ID: 84362
// Name: ChannelLatestMessageLoadingStatsManager
// Dependencies: [6, 7, 653, 6700, 2]

// Module 10862 (ChannelLatestMessageLoadingStatsManager)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import { AnalyticEvents } from "ME";
import set from "ME";

const require = arg1;
const tmp2 = (() => {
  class ChannelLatestMessageLoadingStatsManager {
    constructor(arg0) {
      tmp = outer1_2(this, ChannelLatestMessageLoadingStatsManager);
      this.label = arg0;
      return;
    }
  }
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
          let obj = ChannelLatestMessageLoadingStatsManager(outer1_1[3]);
          obj = { load_duration_ms: diff, were_messages_cached: channelId.areMessagesCached, is_first_load: tmp11 };
          obj.trackClickstream(outer1_4.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM, obj);
          tmp.latestChannelMessagesLoad = undefined;
        }
      }
    }
  };
  items[2] = obj;
  return callback(ChannelLatestMessageLoadingStatsManager, items);
})();
let set = new Set();
tmp2.seenChannelIds = set;
const result = set.fileFinishedImporting("modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx");

export default tmp2;
