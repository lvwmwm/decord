// Module ID: 9847
// Function ID: 76238
// Name: useChannelFollowerStats
// Dependencies: []
// Exports: default

// Module 9847 (useChannelFollowerStats)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const HOUR = importDefault(dependencyMap[3]).Millis.HOUR;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/channel_following/useChannelFollowerStats.tsx");

export default function useChannelFollowerStats(arg0) {
  const arg1 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const items = [closure_5];
  const items1 = [arg0];
  const stateFromStores = arg1(closure_2[4]).useStateFromStores(items, () => followerStatsForChannel.getFollowerStatsForChannel(arg0), items1);
  const callback = stateFromStores;
  const items2 = [arg0, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      if (!first) {
        callback(true);
        const channelFollowerStats = first(callback[5]).fetchChannelFollowerStats(arg0);
        const obj = first(callback[5]);
      }
    } else {
      const _Date = Date;
    }
    if (tmp11) {
      callback(false);
    }
  }, items2);
  const items3 = [stateFromStores, first];
  return items3;
};
