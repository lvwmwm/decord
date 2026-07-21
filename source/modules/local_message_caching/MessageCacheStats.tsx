// Module ID: 6715
// Function ID: 52187
// Name: makeLogKey
// Dependencies: []

// Module 6715 (makeLogKey)
function makeLogKey(arg0, arg1, arg2, arg3, arg4) {
  return "" + arg0 + ":" + arg1 + ":" + arg2 + ":" + arg3 + ":" + arg4;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let tmp2 = () => {
  class MessageCacheStats {
    constructor() {
      tmp = MessageCacheStats(this, MessageCacheStats);
      set = new Set();
      this.channelsFetchStarted = set;
      set1 = new Set();
      this.channelsFetchedWithLocalMessages = set1;
      set2 = new Set();
      this.channelsFetchedNetwork = set2;
      map = new Map();
      this.fetchLogs = map;
      return;
    }
  }
  let closure_0 = MessageCacheStats;
  let obj = {
    key: "recordChannelFetchStart",
    value(channelId, arg1, arg2, arg3, limit) {
      const channelsFetchStarted = this.channelsFetchStarted;
      channelsFetchStarted.add(channelId);
      const fetchLogs = this.fetchLogs;
      let tmp3 = null;
      if (null != arg2) {
        tmp3 = arg2;
      }
      let tmp4 = null;
      if (null != arg3) {
        tmp4 = arg3;
      }
      const obj = { channelId };
      let tmp6 = null;
      if (null != arg2) {
        tmp6 = arg2;
      }
      obj.before = tmp6;
      let tmp7 = null;
      if (null != arg3) {
        tmp7 = arg3;
      }
      obj.after = tmp7;
      obj.limit = limit;
      obj.startTime = Date.now();
      const result = fetchLogs.set(closure_2(channelId, arg1, tmp3, tmp4, limit), obj);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "recordChannelFetchedLocal",
    value(arg0, arg1, arg2, arg3, arg4, arr) {
      const channelsFetchedWithLocalMessages = this.channelsFetchedWithLocalMessages;
      channelsFetchedWithLocalMessages.add(arg0);
      const fetchLogs = this.fetchLogs;
      let tmp3 = null;
      if (null != arg2) {
        tmp3 = arg2;
      }
      let tmp4 = null;
      if (null != arg3) {
        tmp4 = arg3;
      }
      const value = fetchLogs.get(closure_2(arg0, arg1, tmp3, tmp4, arg4));
      if (null != value) {
        const obj = {};
        const _Date = Date;
        obj.loadTime = Date.now();
        obj.count = arr.length;
        const atResult = arr.at(-1);
        let id;
        if (null != atResult) {
          id = atResult.id;
        }
        obj.lastMessageId = id;
        value.localMessageDetails = obj;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "recordChannelFetchedNetwork",
    value(arg0, arg1, arg2, arg3, arg4, arr) {
      const channelsFetchedNetwork = this.channelsFetchedNetwork;
      channelsFetchedNetwork.add(arg0);
      const fetchLogs = this.fetchLogs;
      let tmp3 = null;
      if (null != arg2) {
        tmp3 = arg2;
      }
      let tmp4 = null;
      if (null != arg3) {
        tmp4 = arg3;
      }
      const value = fetchLogs.get(closure_2(arg0, arg1, tmp3, tmp4, arg4));
      if (null != value) {
        const obj = {};
        const _Date = Date;
        obj.loadTime = Date.now();
        obj.count = arr.length;
        const atResult = arr.at(-1);
        let id;
        if (null != atResult) {
          id = atResult.id;
        }
        obj.lastMessageId = id;
        value.networkMessageDetails = obj;
      }
    }
  };
  items[2] = obj;
  return callback(MessageCacheStats, items);
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/local_message_caching/MessageCacheStats.tsx");

export default tmp2;
export const INITIAL_MESSAGE_FETCH_KEY = "NativeAppStartup";
