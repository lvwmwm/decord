// Module ID: 16626
// Function ID: 129642
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 6720, 675, 5078, 2]

// Module 16626 (_isNativeReflectConstruct)
import expandLocation from "expandLocation";
import makeLogKey from "makeLogKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import ME from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_7;
let closure_8;
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
    const fetchLogs = importDefault(6720).fetchLogs;
    const mapped = Array.from(fetchLogs.values()).map(makeLogLine);
    let obj = importDefault(675);
    obj = { num_channels_fetch_started: importDefault(6720).channelsFetchStarted.size, num_channels_local_cached: importDefault(6720).channelsFetchedWithLocalMessages.size, num_channels_fetched_network: importDefault(6720).channelsFetchedNetwork.size };
    const sum = c9 + 1;
    c9 = sum;
    obj.num_times_backgrounded = sum;
    obj.fetch_entries = mapped;
    obj.track(constants.CACHE_STATS_RECORDED, obj);
    const arr = Array.from(fetchLogs.values());
  }
}
({ AnalyticEvents: closure_7, AppStates: closure_8 } = ME);
let c9 = 0;
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/local_message_caching/LocalMessageCacheStatsManager.tsx");

export default tmp3;
