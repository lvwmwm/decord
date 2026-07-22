// Module ID: 9970
// Function ID: 77062
// Name: resetStoreState
// Dependencies: []
// Exports: default

// Module 9970 (resetStoreState)
function resetStoreState(guildId) {
  let obj = importDefault(dependencyMap[4]);
  obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
  obj.dispatch(obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const AnalyticsSections = arg1(dependencyMap[3]).AnalyticsSections;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getPendingChannelUpdates(arg0));
  const importDefault = stateFromStores;
  const items1 = [arg0];
  const effect = React.useEffect(() => {
    callback(arg0);
    return () => {
      callback(closure_0);
    };
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      const result = arg0(closure_2[6]).updateOptInChannelsBatched(arg0, stateFromStores);
      const obj = arg0(closure_2[6]);
    }
  }, items2);
  obj = {
    onChannelClick: React.useCallback((guildId, channelId, id) => {
      const isChannelOptedInResult = closure_5.isChannelOptedIn(guildId, channelId);
      let isCollapsedResult = !isChannelOptedInResult;
      if (isCollapsedResult) {
        isCollapsedResult = collapsed.isCollapsed(id);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != id;
      }
      if (isCollapsedResult) {
        let obj = guildId(closure_2[7]);
        obj.categoryExpand(id);
      }
      let obj1 = guildId(closure_2[8]);
      if (obj1.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === id) {
          obj = {};
          const _Set2 = Set;
          const items = [channelId];
          const set = new Set(items);
          obj.include = set;
          const result = guildId(closure_2[8]).optIntoAllChannelsForExistingMember(guildId, obj);
          const obj7 = guildId(closure_2[8]);
        } else {
          obj = {};
          const _Set = Set;
          const items1 = [channelId];
          const set1 = new Set(items1);
          obj.exclude = set1;
          const result1 = guildId(closure_2[8]).optIntoAllChannelsForExistingMember(guildId, obj);
          const obj5 = guildId(closure_2[8]);
        }
      } else {
        const obj3 = guildId(closure_2[6]);
        obj1 = { section: constants.CHANNEL_BROWSER };
        const result2 = obj3.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj1);
      }
    }, [])
  };
  return obj;
};
