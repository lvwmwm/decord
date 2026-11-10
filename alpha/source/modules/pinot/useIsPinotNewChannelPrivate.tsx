// Module ID: 9142
// Function ID: 9143
// Name: useIsPinotNewChannelPrivate
// Dependencies: [4991, 5048, 5013, 504, 9139, 2]
// Exports: useIsPinotNewChannelPrivate

// Module 9142 (useIsPinotNewChannelPrivate)
import PinotEligibility from "PinotEligibility" /* 9139 */;
import ChannelStore from "ChannelStore" /* 4991 */;
import GuildRoleStore from "GuildRoleStore" /* 5048 */;
import GuildStore from "GuildStore" /* 5013 */;
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
