// Module ID: 9978
// Function ID: 77102
// Name: resetStoreState
// Dependencies: [31, 5076, 4325, 653, 686, 566, 5072, 9979, 9976, 2]
// Exports: default

// Module 9978 (resetStoreState)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { AnalyticsSections } from "ME";

const require = arg1;
function resetStoreState(guildId) {
  let obj = importDefault(686);
  obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
  obj.dispatch(obj);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(arg0) {
  const _require = arg0;
  let obj = _require(566);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getPendingChannelUpdates(closure_0));
  let items1 = [arg0];
  const effect = React.useEffect(() => {
    outer1_7(closure_0);
    return () => {
      outer2_7(outer1_0);
    };
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      const result = callback(outer1_2[6]).updateOptInChannelsBatched(callback, stateFromStores);
      const obj = callback(outer1_2[6]);
    }
  }, items2);
  obj = {
    onChannelClick: React.useCallback((guildId, channelId, closure_0) => {
      const isChannelOptedInResult = outer1_5.isChannelOptedIn(guildId, channelId);
      let isCollapsedResult = !isChannelOptedInResult;
      if (isCollapsedResult) {
        isCollapsedResult = outer1_4.isCollapsed(closure_0);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != closure_0;
      }
      if (isCollapsedResult) {
        let obj = callback(outer1_2[7]);
        obj.categoryExpand(closure_0);
      }
      let obj1 = callback(outer1_2[8]);
      if (obj1.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === closure_0) {
          obj = {};
          const _Set2 = Set;
          const items = [channelId];
          const set = new Set(items);
          obj.include = set;
          const result = callback(outer1_2[8]).optIntoAllChannelsForExistingMember(guildId, obj);
          const obj7 = callback(outer1_2[8]);
        } else {
          obj = {};
          const _Set = Set;
          const items1 = [channelId];
          const set1 = new Set(items1);
          obj.exclude = set1;
          const result1 = callback(outer1_2[8]).optIntoAllChannelsForExistingMember(guildId, obj);
          const obj5 = callback(outer1_2[8]);
        }
      } else {
        const obj3 = callback(outer1_2[6]);
        obj1 = { section: outer1_6.CHANNEL_BROWSER };
        const result2 = obj3.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj1);
      }
    }, [])
  };
  return obj;
};
