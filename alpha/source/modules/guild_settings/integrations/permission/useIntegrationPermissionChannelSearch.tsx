// Module ID: 20083
// Function ID: 20084
// Name: useIntegrationPermissionChannelSearch
// Dependencies: [32, 19, 4973, 4975, 4985, 1387, 1071, 5659, 8184, 1112, 20084, 2]
// Exports: useIntegrationPermissionChannelSearch

// Module 20083 (useIntegrationPermissionChannelSearch)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8184 */;
import fuzzysearch from "fuzzysearch" /* 20084 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4973 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

let channel;

let closure_4;
let hasOwnProperty;
function channelTerms(id) {
  let items;
  const obj = { id: id.id, names: items };
  items = [id.name];
  return obj;
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_4, GUILD_VOCAL_CHANNELS_KEY: hasOwnProperty } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useIntegrationPermissionChannelSearch.tsx");

export function useIntegrationPermissionChannelSearch(arg0) {
  let query;
  let closure_0 = arg0;
  let items = [arg0];
  const memo = react.useMemo(() => {
    let intl;
    let obj2;
    const channels = GuildChannelStore.getChannels(closure_0);
    const items = [...channels[closure_2_4]];
    const arr2 = channels[hasOwnProperty];
    const items1 = [
      ...arr2.filter((channel) => {
        channel = channel.channel;
        return channel.isGuildVocal();
      })
    ];
    items.push.apply(items1);
    const mapped = items.map((channel) => {
      let obj2;
      const obj = { id: channel.channel.id, name: obj2.computeChannelName(channel.channel, closure_1_9, closure_1_8), canManage: closure_1_7.can(constants.MANAGE_ROLES, channel.channel) };
      obj2 = closure_1_0(memo[7]);
      return obj;
    });
    let obj = { id: obj2.allChannelsSentinel(closure_0), name: intl.string(intl2.t["7YqSGx"]), canManage: true };
    const unshift = mapped.unshift;
    obj2 = ApplicationCommandUtils;
    intl = intl2.intl;
    unshift(obj);
    return mapped;
  }, items);
  const tmp = query(react.useState(""), 2);
  query = tmp[0];
  let items1 = [memo, query];
  let obj = {
    query,
    results: react.useMemo(() => {
      let substr = first;
      const str = first;
      if (first.startsWith("#")) {
        substr = str.substr(1);
      }
      const obj = fuzzysearch;
      return obj.filterPermissionSearchItems(memo, channelTerms, substr);
    }, items1),
    setQuery: tmp[1],
    unfilteredCount: memo.length
  };
  return obj;
}
