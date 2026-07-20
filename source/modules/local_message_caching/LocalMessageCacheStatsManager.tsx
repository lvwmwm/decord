// Module ID: 16439
// Function ID: 127007
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16439 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeLogLine(channelId) {
  const items = [channelId.channelId, , , ];
  let str = "-1";
  let str2 = "-1";
  if (null != channelId.localMessageDetails) {
    str2 = channelId.localMessageDetails.loadTime - channelId.startTime;
  }
  items[1] = str2;
  if (null != channelId.networkMessageDetails) {
    str = channelId.networkMessageDetails.loadTime - channelId.startTime;
  }
  items[2] = str;
  let str3 = "incomplete";
  if (null != channelId.localMessageDetails) {
    str3 = "incomplete";
    if (null != channelId.networkMessageDetails) {
      let str5 = "mismatch";
      if (channelId.localMessageDetails.count === channelId.networkMessageDetails.count) {
        str5 = "mismatch";
        if (channelId.localMessageDetails.lastMessageId === channelId.networkMessageDetails.lastMessageId) {
          str5 = "match";
        }
      }
      str3 = str5;
    }
  }
  items[3] = str3;
  return items.join(":");
}
function handleAppStateUpdate(state) {
  if (state.state === constants2.BACKGROUND) {
    const _Array = Array;
    const fetchLogs = importDefault(dependencyMap[6]).fetchLogs;
    const mapped = Array.from(fetchLogs.values()).map(makeLogLine);
    let obj = importDefault(dependencyMap[7]);
    obj = { num_channels_fetch_started: importDefault(dependencyMap[6]).channelsFetchStarted.size, num_channels_local_cached: importDefault(dependencyMap[6]).channelsFetchedWithLocalMessages.size, num_channels_fetched_network: importDefault(dependencyMap[6]).channelsFetchedNetwork.size };
    const sum = closure_9 + 1;
    closure_9 = sum;
    obj.num_times_backgrounded = sum;
    obj.fetch_entries = mapped;
    obj.track(constants.CACHE_STATS_RECORDED, obj);
    const arr = Array.from(fetchLogs.values());
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
({ AnalyticEvents: closure_7, AppStates: closure_8 } = arg1(dependencyMap[5]));
let closure_9 = 0;
let tmp3 = (arg0) => {
  class LocalMessageCacheStatsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, LocalMessageCacheStatsManager);
      items1 = [...items];
      obj = closure_5(LocalMessageCacheStatsManager);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { APP_STATE_UPDATE: closure_12 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const importDefault = LocalMessageCacheStatsManager;
  callback2(LocalMessageCacheStatsManager, arg0);
  return callback(LocalMessageCacheStatsManager);
}(importDefault(dependencyMap[8]));
tmp3 = new tmp3();
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/local_message_caching/LocalMessageCacheStatsManager.tsx");

export default tmp3;
