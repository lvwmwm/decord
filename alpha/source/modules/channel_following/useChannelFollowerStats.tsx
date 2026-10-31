// Module ID: 14517
// Function ID: 14518
// Name: useChannelFollowerStats
// Dependencies: [32, 19, 14518, 1089, 504, 11202, 2]
// Exports: default

// Module 14517 (useChannelFollowerStats)
import DurationsDefault from "Durations" /* 1089 */;
import ChannelFollowerActionCreatorsDefault from "ChannelFollowerActionCreators" /* 11202 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelFollowerStatsStore from "ChannelFollowerStatsStore" /* 14518 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const HOUR = DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
  let closure_0;
  let closure_2;
  let stateFromStores;
  _require = arg0;
  const tmp = stateFromStores(react.useState(false), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  let obj = require("get initialized");
  const items = [ChannelFollowerStatsStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => ChannelFollowerStatsStore.getFollowerStatsForChannel(closure_0), items1);
  const items2 = [arg0, stateFromStores, first];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const tmp4 = first;
      if (!tmp4) {
        closure_2(true);
        const obj = ChannelFollowerActionCreatorsDefault;
        const channelFollowerStats = obj.fetchChannelFollowerStats(closure_0);
      }
    } else {
      const _Date = Date;
    }
    const tmp11 = null != stateFromStores && first;
    if (tmp11) {
      closure_2(false);
    }
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
};
