// Module ID: 10001
// Function ID: 10002
// Name: useBatchUpdateChannelSettings
// Dependencies: [19, 5133, 4385, 676, 709, 589, 5129, 10002, 9999, 2]
// Exports: default

// Module 10001 (useBatchUpdateChannelSettings)
import noop from "noop";
import incrementVersion from "incrementVersion";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticsSections } from "ME";

const require = arg1;
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(arg0) {
  const _require = arg0;
  let obj = _require(589);
  let items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getPendingChannelUpdates(closure_0));
  let items1 = [arg0];
  const effect = React.useEffect(() => {
    let obj = stateFromStores(outer1_2[4]);
    obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
    obj.dispatch(obj);
    return () => {
      let obj = outer1_1(outer1_2[4]);
      obj = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId: closure_0 };
      obj.dispatch(obj);
    };
  }, items1);
  const items2 = [arg0, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null != stateFromStores) {
      const result = callback(outer1_2[6]).updateOptInChannelsBatched(callback, tmp);
      const obj = callback(outer1_2[6]);
    }
  }, items2);
  obj = {
    onChannelClick: React.useCallback((closure_0, id, id) => {
      const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(closure_0, id);
      let isCollapsedResult = !isChannelOptedInResult;
      if (!isChannelOptedInResult) {
        isCollapsedResult = collapsed.isCollapsed(id);
      }
      if (isCollapsedResult) {
        isCollapsedResult = null != id;
      }
      if (isCollapsedResult) {
        let obj = callback(10002);
        obj.categoryExpand(id);
      }
      let obj1 = callback(9999);
      if (obj1.hasNotSetUpChannelOptIn(closure_0)) {
        if (id === id) {
          let tmp8Result = tmp8(9999);
          obj = { include: null };
          const _Set2 = Set;
          const items = [id];
          const set = new Set(items);
          obj[0] = set;
          const result = tmp8Result.optIntoAllChannelsForExistingMember(closure_0, obj);
        } else {
          tmp8Result = tmp8(9999);
          obj = { exclude: null };
          const _Set = Set;
          const items1 = [id];
          const set1 = new Set(items1);
          obj[0] = set1;
          const result1 = tmp8Result.optIntoAllChannelsForExistingMember(closure_0, obj);
        }
      } else {
        const tmp8Result1 = tmp8(5129);
        obj1 = { section: null };
        obj1[0] = constants.CHANNEL_BROWSER;
        const result2 = tmp8Result1.updateOptInChannelsImmediate(closure_0, id, !isChannelOptedInResult, obj1);
      }
    }, [])
  };
  return obj;
};
