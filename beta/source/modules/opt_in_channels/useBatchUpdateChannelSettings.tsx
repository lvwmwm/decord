// Module ID: 11052
// Function ID: 11053
// Name: useBatchUpdateChannelSettings
// Dependencies: [19, 6538, 5017, 1074, 573, 504, 6534, 11053, 11050, 2]
// Exports: default

// Module 11052 (useBatchUpdateChannelSettings)
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import OptInChannelsActionCreators from "OptInChannelsActionCreators" /* 6534 */;
import react from "react" /* 19 */;
import CategoryCollapseStore from "CategoryCollapseStore" /* 6538 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const AnalyticsSections = Constants.AnalyticsSections;
let result = size.fileFinishedImporting("modules/opt_in_channels/useBatchUpdateChannelSettings.tsx");

export default function useBatchUpdateChannelSettings(guildId) {
  let channelOptedIn;
  let collapsed;
  _require = guildId;
  let obj = require("get initialized");
  let items = [UserGuildSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.getPendingChannelUpdates(guildId));
  let items1 = [guildId];
  const effect = react.useEffect(() => {
    let obj = DispatcherDefault;
    let obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
    obj.dispatch(obj2);
    return () => {
      const obj = stateFromStores(dependencyMap[4]);
      const obj2 = { type: "CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES", guildId };
      obj.dispatch(obj2);
    };
  }, items1);
  const items2 = [guildId, stateFromStores];
  const effect1 = react.useEffect(() => {
    if (null != stateFromStores) {
      const obj = OptInChannelsActionCreators;
      const result = obj.updateOptInChannelsBatched(guildId, tmp);
    }
  }, items2);
  let obj2 = {
    onChannelClick: react.useCallback(function(guildId, channelId, id) {
      let set1;
      const isChannelOptedInResult = channelOptedIn.isChannelOptedIn(guildId, channelId);
      const isCollapsedResult = !isChannelOptedInResult && collapsed.isCollapsed(id) && null != id;
      if (isCollapsedResult) {
        const obj = guildId(dependencyMap[7]);
        obj.categoryExpand(id);
      }
      const obj2 = guildId(dependencyMap[8]);
      if (obj2.hasNotSetUpChannelOptIn(guildId)) {
        if (channelId === id) {
          const _Set2 = Set;
          const items = [channelId];
          const self3 = this;
          const self4 = this;
          const obj3 = { include: set };
          const optIntoAllChannelsForExistingMember2 = guildId(dependencyMap[8]).optIntoAllChannelsForExistingMember;
          guildId(dependencyMap[8]);
          set = new Set(items);
          const result = optIntoAllChannelsForExistingMember2(guildId, obj3);
        } else {
          const _Set = Set;
          const items1 = [channelId];
          const self = this;
          const self2 = this;
          const obj4 = { exclude: set1 };
          const optIntoAllChannelsForExistingMember = guildId(dependencyMap[8]).optIntoAllChannelsForExistingMember;
          guildId(dependencyMap[8]);
          set1 = new Set(items1);
          const result1 = optIntoAllChannelsForExistingMember(guildId, obj4);
        }
      } else {
        const obj5 = { section: constants.CHANNEL_BROWSER };
        const tmp8Result4 = guildId(dependencyMap[6]);
        const result2 = tmp8Result4.updateOptInChannelsImmediate(guildId, channelId, !isChannelOptedInResult, obj5);
      }
    }, [])
  };
  return obj2;
};
