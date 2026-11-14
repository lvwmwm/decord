// Module ID: 8170
// Function ID: 8171
// Name: useIsPinotNewChannelPrivate
// Dependencies: [5155, 5212, 5177, 504, 8167, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 8170 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 8167 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildRoleStore from "GuildRoleStore" /* 5212 */;
import GuildStore from "GuildStore" /* 5177 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/pinot/useIsPinotNewChannelPrivate.tsx");

export function useIsPinotNewChannelPrivate(guildId, categoryId) {
  _require = guildId;
  dependencyMap = categoryId;
  let obj = require("get initialized");
  const items = [ChannelStore, GuildStore, GuildRoleStore];
  const items1 = [guildId, categoryId];
  return obj.useStateFromStores(items, () => {
    let channel;
    if (null != categoryId) {
      channel = ChannelStore.getChannel(tmp);
    } else {
      channel = GuildStore.getGuild(guildId);
    }
    let tmp6 = null != channel;
    if (tmp6) {
      const obj = PinotEligibility;
      tmp6 = !obj.everyoneHasAccess(channel);
    }
    return tmp6;
  }, items1);
}
