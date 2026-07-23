// Module ID: 9860
// Function ID: 76319
// Name: useChannelFollowerStats
// Dependencies: [57, 31, 9861, 664, 566, 9862, 2]
// Exports: default

// Module 9860 (useChannelFollowerStats)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const HOUR = require("set").Millis.HOUR;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
  const _require = arg0;
  const tmp = stateFromStores(React.useState(false), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        dependencyMap(true);
        const channelFollowerStats = first(9862).fetchChannelFollowerStats(closure_0);
        const obj = first(9862);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      dependencyMap(false);
    }
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
};
